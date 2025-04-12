import dayjs from "dayjs";
import arraySupport from "dayjs/plugin/arraySupport";

import type { MonthlyAggregates, TransformedBomCsvEntry, YearlyAggregates } from "../types";
import { findLongestSequenceInArray, findMedian } from "./helpers";

dayjs.extend(arraySupport);

export type RainfallDataPoint = { date: dayjs.Dayjs; rainfall: number | null };
export type WeatherDataForMonthMap = Map<number, number | null>;
export type WeatherDataForYearMap = Map<number, WeatherDataForMonthMap>;
export type WeatherDataMap = Map<number, WeatherDataForYearMap>;

/**
 * Structure individual entries from ingested BOM rainfall data into a Map organised by year, month, and day
 * @param entries transformed rows of BOM rainfall data
 * @returns A nested Map organised by year -> month -> day describing rainfall for a year
 */
export const createWeatherDataMap = (entries: TransformedBomCsvEntry[]) => {
  const weatherDataMap: WeatherDataMap = new Map();

  entries.forEach((entry) => {
    const weatherDataForYearMap: WeatherDataForYearMap = weatherDataMap.get(entry.year) ?? new Map();
    const weatherDataForMonthMap: WeatherDataForMonthMap = weatherDataForYearMap.get(entry.month) ?? new Map();

    weatherDataForMonthMap.set(entry.day, entry.rainfall);
    weatherDataForYearMap.set(entry.month, weatherDataForMonthMap);
    weatherDataMap.set(entry.year, weatherDataForYearMap);
  });

  return weatherDataMap;
};

export const getLongestNumberDaysRaining = (rainfallDataPoints: RainfallDataPoint[]) => {
  const rainfallDataPointsDateAscending = rainfallDataPoints.sort((curr, prev) => curr.date.diff(prev.date));

  const checkConsecutiveDaysRaining = (curr: RainfallDataPoint, prev: RainfallDataPoint) => {
    // Once the data points are ordered in ascending date order, ensure there are no missing dates
    const areDatesConsecutive = curr.date.diff(prev.date, "day") === 1;
    const isRaining = curr.rainfall != null && curr.rainfall > 0;

    return areDatesConsecutive && isRaining;
  };

  return findLongestSequenceInArray(rainfallDataPointsDateAscending, checkConsecutiveDaysRaining);
};

export const prefixWeatherDataGroup = (monthOrYear: number | string) => {
  return `WeatherDataFor${monthOrYear}`;
};

/**
 * Take individual entries from ingested BOM rainfall data and transform/combine them to the Yearly/Monthly Aggregates
 * structure
 * @param entries transformed rows of BOM rainfall data
 * @returns Weather Data dataset with Yearly Aggregates and Monthly Aggregates
 */
export const processWeatherData = (entries: TransformedBomCsvEntry[]) => {
  const weatherDataMap = createWeatherDataMap(entries);
  const yearlyAggregates: YearlyAggregates = {};

  weatherDataMap.forEach((weatherDataForYearMap, year) => {
    // Do not process data that is in the future
    if (!dayjs().isAfter(dayjs([year]))) {
      return;
    }

    const { weatherDataForYear } = processWeatherDataForYear(year, weatherDataForYearMap);

    const yearKey = prefixWeatherDataGroup(weatherDataForYear.Year);

    yearlyAggregates[yearKey] = weatherDataForYear;
  });

  return { WeatherData: yearlyAggregates };
};

/**
 * Use a Map describing rainfall data for days of a month and transform into a Monthly Aggregate dataset
 * @param year
 * @param month
 * @param weatherDataForMonthMap
 * @returns the Monthly Aggregate dataset and a flat array of rainfall data points for the month
 */
export const processWeatherDataForMonth = (
  year: number,
  month: number,
  weatherDataForMonthMap: WeatherDataForMonthMap
) => {
  const rainfallDataPointsForMonth: RainfallDataPoint[] = [];

  let daysWithNoRainfall = 0;
  let daysWithRainfall = 0;
  let firstRecordedDate = "";
  let lastRecordedDate = "";
  let totalRainfall = 0;

  weatherDataForMonthMap.forEach((rainfallDataPointsForDay, day) => {
    // Months are 0-indexed
    const date = dayjs([year, month - 1, day]);

    // Do not process data that is in the future
    if (!dayjs().isAfter(date)) {
      return;
    }

    rainfallDataPointsForMonth.push({ date, rainfall: rainfallDataPointsForDay });

    if (rainfallDataPointsForDay == null) {
      daysWithNoRainfall += 1;
      return;
    }

    if (rainfallDataPointsForDay === 0) {
      daysWithNoRainfall += 1;
    } else {
      daysWithRainfall += 1;
    }

    if (!firstRecordedDate || date.isBefore(dayjs(firstRecordedDate))) {
      firstRecordedDate = date.format("YYYY-MM-DD");
    }

    if (!lastRecordedDate || date.isAfter(dayjs(lastRecordedDate))) {
      lastRecordedDate = date.format("YYYY-MM-DD");
    }

    totalRainfall += rainfallDataPointsForDay ?? 0;
  });

  const filteredRainfallForMonth = rainfallDataPointsForMonth
    .map(({ rainfall }) => rainfall)
    .filter((rainfall) => rainfall != null);

  const medianDailyRainfall = findMedian(filteredRainfallForMonth);

  const weatherDataForMonth = {
    AverageDailyRainfall: totalRainfall / (daysWithNoRainfall + daysWithRainfall),
    DaysWithNoRainfall: daysWithNoRainfall,
    DaysWithRainfall: daysWithRainfall,
    FirstRecordedDate: firstRecordedDate,
    LastRecordedDate: lastRecordedDate,
    MedianDailyRainfall: medianDailyRainfall,
    Month: dayjs()
      // Months are 0-indexed
      .month(month - 1)
      .format("MMMM"),
    TotalRainfall: totalRainfall,
  };

  return {
    rainfallDataPointsForMonth,
    weatherDataForMonth,
  };
};

/**
 * Use a Map describing rainfall data for months of a year and transform into a Yearly Aggregate dataset
 * @param year
 * @param weatherDataForYearMap
 * @returns the Yearly Aggregate dataset and a flat array of rainfall data points for the month
 */
export const processWeatherDataForYear = (year: number, weatherDataForYearMap: WeatherDataForYearMap) => {
  const monthlyAggregates: MonthlyAggregates = {};
  const rainfallDataPointsForYear: RainfallDataPoint[] = [];

  let daysWithNoRainfall = 0;
  let daysWithRainfall = 0;
  let firstRecordedDate = "";
  let lastRecordedDate = "";
  let totalRainfall = 0;

  weatherDataForYearMap.forEach((weatherDataForMonthMap, month) => {
    const { rainfallDataPointsForMonth, weatherDataForMonth } = processWeatherDataForMonth(
      year,
      month,
      weatherDataForMonthMap
    );

    rainfallDataPointsForYear.push(...rainfallDataPointsForMonth);

    const monthKey = prefixWeatherDataGroup(weatherDataForMonth.Month);

    monthlyAggregates[monthKey] = weatherDataForMonth;

    daysWithNoRainfall += weatherDataForMonth.DaysWithNoRainfall;
    daysWithRainfall += weatherDataForMonth.DaysWithRainfall;

    if (!firstRecordedDate || dayjs(weatherDataForMonth.FirstRecordedDate).isBefore(dayjs(firstRecordedDate))) {
      firstRecordedDate = weatherDataForMonth.FirstRecordedDate;
    }

    if (!lastRecordedDate || dayjs(weatherDataForMonth.LastRecordedDate).isAfter(dayjs(lastRecordedDate))) {
      lastRecordedDate = weatherDataForMonth.LastRecordedDate;
    }

    totalRainfall += weatherDataForMonth.TotalRainfall;
  });

  const longestNumberDaysRaining = getLongestNumberDaysRaining(rainfallDataPointsForYear);

  const weatherDataForYear = {
    AverageDailyRainfall: totalRainfall / (daysWithNoRainfall + daysWithRainfall),
    DaysWithNoRainfall: daysWithNoRainfall,
    DaysWithRainfall: daysWithRainfall,
    FirstRecordedDate: firstRecordedDate,
    LastRecordedDate: lastRecordedDate,
    LongestNumberDaysRaining: longestNumberDaysRaining,
    MonthlyAggregates: monthlyAggregates,
    TotalRainfall: totalRainfall,
    Year: dayjs([year]).format("YYYY"),
  };

  return { weatherDataForYear };
};

export default processWeatherData;
