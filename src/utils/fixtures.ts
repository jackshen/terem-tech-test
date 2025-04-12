/* eslint-disable perfectionist/sort-maps */
/* eslint-disable perfectionist/sort-objects */

import dayjs from "dayjs";
import { TransformedBomCsvEntry, WeatherDataForMonth } from "../types";
import { RainfallDataPoint, WeatherDataForMonthMap, WeatherDataForYearMap, WeatherDataMap } from "./processWeatherData";

export const mockRainfallDataPoints: RainfallDataPoint[] = [
  {
    date: "2018-12-31T13:00:00.000Z",
    rainfall: 8.8,
  },
  {
    date: "2019-01-01T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-02T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-03T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-04T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-05T13:00:00.000Z",
    rainfall: 26.2,
  },
  {
    date: "2019-01-06T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-07T13:00:00.000Z",
    rainfall: 0.6,
  },
  {
    date: "2019-01-08T13:00:00.000Z",
    rainfall: 4.8,
  },
  {
    date: "2019-01-09T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-10T13:00:00.000Z",
    rainfall: 0.8,
  },
  {
    date: "2019-01-11T13:00:00.000Z",
    rainfall: 3.8,
  },
  {
    date: "2019-01-12T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-13T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-14T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-15T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-16T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-17T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-18T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-19T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-20T13:00:00.000Z",
    rainfall: 0.4,
  },
  {
    date: "2019-01-21T13:00:00.000Z",
    rainfall: 0.2,
  },
  {
    date: "2019-01-22T13:00:00.000Z",
    rainfall: 0.4,
  },
  {
    date: "2019-01-23T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-24T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-25T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-26T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-27T13:00:00.000Z",
    rainfall: 2.8,
  },
  {
    date: "2019-01-28T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-29T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-30T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-01-31T13:00:00.000Z",
    rainfall: 2.8,
  },
  {
    date: "2019-02-01T13:00:00.000Z",
    rainfall: 23,
  },
  {
    date: "2019-02-02T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-02-03T13:00:00.000Z",
    rainfall: 0.2,
  },
  {
    date: "2019-02-04T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-02-05T13:00:00.000Z",
    rainfall: 1.8,
  },
  {
    date: "2019-02-06T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-02-07T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-02-08T13:00:00.000Z",
    rainfall: 17.2,
  },
  {
    date: "2019-02-09T13:00:00.000Z",
    rainfall: 0.2,
  },
  {
    date: "2019-02-10T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-02-11T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-02-12T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-02-13T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-02-14T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-02-15T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-02-16T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-02-17T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-02-18T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-02-19T13:00:00.000Z",
    rainfall: 7.8,
  },
  {
    date: "2019-02-20T13:00:00.000Z",
    rainfall: 5,
  },
  {
    date: "2019-02-21T13:00:00.000Z",
    rainfall: 4.4,
  },
  {
    date: "2019-02-22T13:00:00.000Z",
    rainfall: 6.6,
  },
  {
    date: "2019-02-23T13:00:00.000Z",
    rainfall: 16,
  },
  {
    date: "2019-02-24T13:00:00.000Z",
    rainfall: 0.4,
  },
  {
    date: "2019-02-25T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-02-26T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-02-27T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-02-28T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-03-01T13:00:00.000Z",
    rainfall: 6.8,
  },
  {
    date: "2019-03-02T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-03-03T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-03-04T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-03-05T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-03-06T13:00:00.000Z",
    rainfall: 1.4,
  },
  {
    date: "2019-03-07T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-03-08T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-03-09T13:00:00.000Z",
    rainfall: 0.8,
  },
  {
    date: "2019-03-10T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-03-11T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-03-12T13:00:00.000Z",
    rainfall: 14.6,
  },
  {
    date: "2019-03-13T13:00:00.000Z",
    rainfall: 5.8,
  },
  {
    date: "2019-03-14T13:00:00.000Z",
    rainfall: 8.6,
  },
  {
    date: "2019-03-15T13:00:00.000Z",
    rainfall: 16,
  },
  {
    date: "2019-03-16T13:00:00.000Z",
    rainfall: 43.4,
  },
  {
    date: "2019-03-17T13:00:00.000Z",
    rainfall: 75.2,
  },
  {
    date: "2019-03-18T13:00:00.000Z",
    rainfall: 4.6,
  },
  {
    date: "2019-03-19T13:00:00.000Z",
    rainfall: 5.8,
  },
  {
    date: "2019-03-20T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-03-21T13:00:00.000Z",
    rainfall: 8.4,
  },
  {
    date: "2019-03-22T13:00:00.000Z",
    rainfall: 2,
  },
  {
    date: "2019-03-23T13:00:00.000Z",
    rainfall: 0.4,
  },
  {
    date: "2019-03-24T13:00:00.000Z",
    rainfall: 3.8,
  },
  {
    date: "2019-03-25T13:00:00.000Z",
    rainfall: 0.6,
  },
  {
    date: "2019-03-26T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-03-27T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-03-28T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-03-29T13:00:00.000Z",
    rainfall: 30.8,
  },
  {
    date: "2019-03-30T13:00:00.000Z",
    rainfall: 0.2,
  },
  {
    date: "2019-03-31T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-04-01T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-04-02T13:00:00.000Z",
    rainfall: 2.8,
  },
  {
    date: "2019-04-03T13:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-04-04T13:00:00.000Z",
    rainfall: 3,
  },
  {
    date: "2019-04-05T13:00:00.000Z",
    rainfall: 4.8,
  },
  {
    date: "2019-04-06T13:00:00.000Z",
    rainfall: 0.2,
  },
  {
    date: "2019-04-07T14:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-04-08T14:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-04-09T14:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-04-10T14:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-04-11T14:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-04-12T14:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-04-13T14:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-04-14T14:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-04-15T14:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-04-16T14:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-04-17T14:00:00.000Z",
    rainfall: 0,
  },
  {
    date: "2019-04-18T14:00:00.000Z",
    rainfall: 0,
  },
].map(({ date, rainfall }) => ({ date: dayjs(date), rainfall }));

export const mockParsedBomEntries: TransformedBomCsvEntry[] = [
  {
    day: 1,
    month: 1,
    rainfall: 8.8,
    year: 2019,
  },
  {
    day: 2,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 3,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 4,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 5,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 6,
    month: 1,
    rainfall: 26.2,
    year: 2019,
  },
  {
    day: 7,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 8,
    month: 1,
    rainfall: 0.6,
    year: 2019,
  },
  {
    day: 9,
    month: 1,
    rainfall: 4.8,
    year: 2019,
  },
  {
    day: 10,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 11,
    month: 1,
    rainfall: 0.8,
    year: 2019,
  },
  {
    day: 12,
    month: 1,
    rainfall: 3.8,
    year: 2019,
  },
  {
    day: 13,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 14,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 15,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 16,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 17,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 18,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 19,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 20,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 21,
    month: 1,
    rainfall: 0.4,
    year: 2019,
  },
  {
    day: 22,
    month: 1,
    rainfall: 0.2,
    year: 2019,
  },
  {
    day: 23,
    month: 1,
    rainfall: 0.4,
    year: 2019,
  },
  {
    day: 24,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 25,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 26,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 27,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 28,
    month: 1,
    rainfall: 2.8,
    year: 2019,
  },
  {
    day: 29,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 30,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 31,
    month: 1,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 1,
    month: 2,
    rainfall: 2.8,
    year: 2019,
  },
  {
    day: 2,
    month: 2,
    rainfall: 23,
    year: 2019,
  },
  {
    day: 3,
    month: 2,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 4,
    month: 2,
    rainfall: 0.2,
    year: 2019,
  },
  {
    day: 5,
    month: 2,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 6,
    month: 2,
    rainfall: 1.8,
    year: 2019,
  },
  {
    day: 7,
    month: 2,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 8,
    month: 2,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 9,
    month: 2,
    rainfall: 17.2,
    year: 2019,
  },
  {
    day: 10,
    month: 2,
    rainfall: 0.2,
    year: 2019,
  },
  {
    day: 11,
    month: 2,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 12,
    month: 2,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 13,
    month: 2,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 14,
    month: 2,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 15,
    month: 2,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 16,
    month: 2,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 17,
    month: 2,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 18,
    month: 2,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 19,
    month: 2,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 20,
    month: 2,
    rainfall: 7.8,
    year: 2019,
  },
  {
    day: 21,
    month: 2,
    rainfall: 5,
    year: 2019,
  },
  {
    day: 22,
    month: 2,
    rainfall: 4.4,
    year: 2019,
  },
  {
    day: 23,
    month: 2,
    rainfall: 6.6,
    year: 2019,
  },
  {
    day: 24,
    month: 2,
    rainfall: 16,
    year: 2019,
  },
  {
    day: 25,
    month: 2,
    rainfall: 0.4,
    year: 2019,
  },
  {
    day: 26,
    month: 2,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 27,
    month: 2,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 28,
    month: 2,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 1,
    month: 3,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 2,
    month: 3,
    rainfall: 6.8,
    year: 2019,
  },
  {
    day: 3,
    month: 3,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 4,
    month: 3,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 5,
    month: 3,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 6,
    month: 3,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 7,
    month: 3,
    rainfall: 1.4,
    year: 2019,
  },
  {
    day: 8,
    month: 3,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 9,
    month: 3,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 10,
    month: 3,
    rainfall: 0.8,
    year: 2019,
  },
  {
    day: 11,
    month: 3,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 12,
    month: 3,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 13,
    month: 3,
    rainfall: 14.6,
    year: 2019,
  },
  {
    day: 14,
    month: 3,
    rainfall: 5.8,
    year: 2019,
  },
  {
    day: 15,
    month: 3,
    rainfall: 8.6,
    year: 2019,
  },
  {
    day: 16,
    month: 3,
    rainfall: 16,
    year: 2019,
  },
  {
    day: 17,
    month: 3,
    rainfall: 43.4,
    year: 2019,
  },
  {
    day: 18,
    month: 3,
    rainfall: 75.2,
    year: 2019,
  },
  {
    day: 19,
    month: 3,
    rainfall: 4.6,
    year: 2019,
  },
  {
    day: 20,
    month: 3,
    rainfall: 5.8,
    year: 2019,
  },
  {
    day: 21,
    month: 3,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 22,
    month: 3,
    rainfall: 8.4,
    year: 2019,
  },
  {
    day: 23,
    month: 3,
    rainfall: 2,
    year: 2019,
  },
  {
    day: 24,
    month: 3,
    rainfall: 0.4,
    year: 2019,
  },
  {
    day: 25,
    month: 3,
    rainfall: 3.8,
    year: 2019,
  },
  {
    day: 26,
    month: 3,
    rainfall: 0.6,
    year: 2019,
  },
  {
    day: 27,
    month: 3,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 28,
    month: 3,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 29,
    month: 3,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 30,
    month: 3,
    rainfall: 30.8,
    year: 2019,
  },
  {
    day: 31,
    month: 3,
    rainfall: 0.2,
    year: 2019,
  },
  {
    day: 1,
    month: 4,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 2,
    month: 4,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 3,
    month: 4,
    rainfall: 2.8,
    year: 2019,
  },
  {
    day: 4,
    month: 4,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 5,
    month: 4,
    rainfall: 3,
    year: 2019,
  },
  {
    day: 6,
    month: 4,
    rainfall: 4.8,
    year: 2019,
  },
  {
    day: 7,
    month: 4,
    rainfall: 0.2,
    year: 2019,
  },
  {
    day: 8,
    month: 4,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 9,
    month: 4,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 10,
    month: 4,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 11,
    month: 4,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 12,
    month: 4,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 13,
    month: 4,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 14,
    month: 4,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 15,
    month: 4,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 16,
    month: 4,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 17,
    month: 4,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 18,
    month: 4,
    rainfall: 0,
    year: 2019,
  },
  {
    day: 19,
    month: 4,
    rainfall: 0,
    year: 2019,
  },
];

export const mockWeatherMapForJanuary: WeatherDataForMonth = {
  AverageDailyRainfall: 1.5741935483870964,
  DaysWithNoRainfall: 21,
  DaysWithRainfall: 10,
  FirstRecordedDate: "2019-01-01",
  LastRecordedDate: "2019-01-31",
  MedianDailyRainfall: 0,
  Month: "January",
  TotalRainfall: 48.79999999999999,
};

export const mockWeatherDataForJanuaryMap: WeatherDataForMonthMap = new Map([
  [1, 8.8],
  [2, 0],
  [3, 0],
  [4, 0],
  [5, 0],
  [6, 26.2],
  [7, 0],
  [8, 0.6],
  [9, 4.8],
  [10, 0],
  [11, 0.8],
  [12, 3.8],
  [13, 0],
  [14, 0],
  [15, 0],
  [16, 0],
  [17, 0],
  [18, 0],
  [19, 0],
  [20, 0],
  [21, 0.4],
  [22, 0.2],
  [23, 0.4],
  [24, 0],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 2.8],
  [29, 0],
  [30, 0],
  [31, 0],
]);

export const mockWeatherMapForJanuaryUntil13th: WeatherDataForMonth = {
  AverageDailyRainfall: 3.461538461538461,
  DaysWithNoRainfall: 7,
  DaysWithRainfall: 6,
  FirstRecordedDate: "2019-01-01",
  LastRecordedDate: "2019-01-13",
  MedianDailyRainfall: 0,
  Month: "January",
  TotalRainfall: 44.99999999999999,
};

export const mockWeatherDataForFebruary = {
  AverageDailyRainfall: 3.0500000000000003,
  DaysWithNoRainfall: 16,
  DaysWithRainfall: 12,
  FirstRecordedDate: "2019-02-01",
  LastRecordedDate: "2019-02-28",
  MedianDailyRainfall: 0,
  Month: "February",
  TotalRainfall: 85.4,
};

export const mockWeatherDataForFebruaryMap: WeatherDataForMonthMap = new Map([
  [1, 2.8],
  [2, 23],
  [3, 0],
  [4, 0.2],
  [5, 0],
  [6, 1.8],
  [7, 0],
  [8, 0],
  [9, 17.2],
  [10, 0.2],
  [11, 0],
  [12, 0],
  [13, 0],
  [14, 0],
  [15, 0],
  [16, 0],
  [17, 0],
  [18, 0],
  [19, 0],
  [20, 7.8],
  [21, 5],
  [22, 4.4],
  [23, 6.6],
  [24, 16],
  [25, 0.4],
  [26, 0],
  [27, 0],
  [28, 0],
]);

export const mockWeatherDataForMarch = {
  AverageDailyRainfall: 7.393548387096776,
  DaysWithNoRainfall: 13,
  DaysWithRainfall: 18,
  FirstRecordedDate: "2019-03-01",
  LastRecordedDate: "2019-03-31",
  MedianDailyRainfall: 0.6,
  Month: "March",
  TotalRainfall: 229.20000000000005,
};

export const mockWeatherDataForMarchMap: WeatherDataForMonthMap = new Map([
  [1, 0],
  [2, 6.8],
  [3, 0],
  [4, 0],
  [5, 0],
  [6, 0],
  [7, 1.4],
  [8, 0],
  [9, 0],
  [10, 0.8],
  [11, 0],
  [12, 0],
  [13, 14.6],
  [14, 5.8],
  [15, 8.6],
  [16, 16],
  [17, 43.4],
  [18, 75.2],
  [19, 4.6],
  [20, 5.8],
  [21, 0],
  [22, 8.4],
  [23, 2],
  [24, 0.4],
  [25, 3.8],
  [26, 0.6],
  [27, 0],
  [28, 0],
  [29, 0],
  [30, 30.8],
  [31, 0.2],
]);

export const mockWeatherDataForApril = {
  AverageDailyRainfall: 0.5684210526315789,
  DaysWithNoRainfall: 15,
  DaysWithRainfall: 4,
  FirstRecordedDate: "2019-04-01",
  LastRecordedDate: "2019-04-19",
  MedianDailyRainfall: 0,
  Month: "April",
  TotalRainfall: 10.799999999999999,
};

export const mockWeatherDataForAprilMap: WeatherDataForMonthMap = new Map([
  [1, 0],
  [2, 0],
  [3, 2.8],
  [4, 0],
  [5, 3],
  [6, 4.8],
  [7, 0.2],
  [8, 0],
  [9, 0],
  [10, 0],
  [11, 0],
  [12, 0],
  [13, 0],
  [14, 0],
  [15, 0],
  [16, 0],
  [17, 0],
  [18, 0],
  [19, 0],
]);

export const mockWeatherDataForAprilUntil1st: WeatherDataForMonth = {
  AverageDailyRainfall: 0,
  DaysWithNoRainfall: 1,
  DaysWithRainfall: 0,
  FirstRecordedDate: "2019-04-01",
  LastRecordedDate: "2019-04-01",
  MedianDailyRainfall: 0,
  Month: "April",
  TotalRainfall: 0,
};

export const mockWeatherDataFor2019 = {
  AverageDailyRainfall: 3.43302752293578,
  DaysWithNoRainfall: 65,
  DaysWithRainfall: 44,
  FirstRecordedDate: "2019-01-01",
  LastRecordedDate: "2019-04-19",
  LongestNumberDaysRaining: 8,
  MonthlyAggregates: {
    WeatherDataForJanuary: mockWeatherMapForJanuary,
    WeatherDataForFebruary: mockWeatherDataForFebruary,
    WeatherDataForMarch: mockWeatherDataForMarch,
    WeatherDataForApril: mockWeatherDataForApril,
  },
  TotalRainfall: 374.20000000000005,
  Year: "2019",
};

export const mockWeatherDataFor2019Map: WeatherDataForYearMap = new Map([
  [1, mockWeatherDataForJanuaryMap],
  [2, mockWeatherDataForFebruaryMap],
  [3, mockWeatherDataForMarchMap],
  [4, mockWeatherDataForAprilMap],
]);

export const mockWeatherDataFor2019UntilApril1st = {
  AverageDailyRainfall: 3.993406593406594,
  DaysWithNoRainfall: 51,
  DaysWithRainfall: 40,
  FirstRecordedDate: "2019-01-01",
  LastRecordedDate: "2019-04-01",
  LongestNumberDaysRaining: 8,
  MonthlyAggregates: {
    WeatherDataForJanuary: mockWeatherMapForJanuary,
    WeatherDataForFebruary: mockWeatherDataForFebruary,
    WeatherDataForMarch: mockWeatherDataForMarch,
    WeatherDataForApril: mockWeatherDataForAprilUntil1st,
  },
  TotalRainfall: 363.40000000000003,
  Year: "2019",
};

export const mockWeatherDataMap: WeatherDataMap = new Map([[2019, mockWeatherDataFor2019Map]]);
