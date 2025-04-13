import processWeatherData, {
  createWeatherDataMap,
  getLongestNumberDaysRaining,
  prefixWeatherDataGroup,
  processWeatherDataForMonth,
  processWeatherDataForYear,
} from "../processWeatherData";
import {
  mockParsedBomEntries,
  mockRainfallDataPoints,
  mockWeatherDataFor2019,
  mockWeatherDataFor2019Map,
  mockWeatherDataFor2019UntilApril1st,
  mockWeatherDataForJanuaryMap,
  mockWeatherDataMap,
  mockWeatherMapForJanuary,
  mockWeatherMapForJanuaryUntil13th,
} from "./fixtures";

describe("createWeatherDataMap", () => {
  it("creates a Map of weather data", () => {
    const weatherDataMap = createWeatherDataMap(mockParsedBomEntries);

    expect(weatherDataMap).toEqual(mockWeatherDataMap);
  });
});

describe("getLongestNumberDaysRaining", () => {
  it("gets the correct longest numbers of days raining", () => {
    expect(getLongestNumberDaysRaining(mockRainfallDataPoints)).toBe(8);
  });

  it("gets the correct longest numbers of days raining when provided unordered data", () => {
    const shuffledDataPoints = mockRainfallDataPoints.sort(
      () => Math.random() - 0.5
    );

    expect(getLongestNumberDaysRaining(shuffledDataPoints)).toBe(8);
  });

  it("gets the correct longest numbers of days raining when provided data with missing dates", () => {
    const indexToRemoveAt = 75;

    const missingDataPoints = [
      ...mockRainfallDataPoints.slice(0, indexToRemoveAt),
      ...mockRainfallDataPoints.slice(
        indexToRemoveAt + 1,
        mockParsedBomEntries.length
      ),
    ];

    expect(getLongestNumberDaysRaining(missingDataPoints)).toBe(6);
  });
});

describe("prefixWeatherDataGroup", () => {
  it("prefixes months and years correctly", () => {
    expect(prefixWeatherDataGroup("2000")).toBe("WeatherDataFor2000");
    expect(prefixWeatherDataGroup(2000)).toBe("WeatherDataFor2000");
    expect(prefixWeatherDataGroup("January")).toBe("WeatherDataForJanuary");
  });
});

describe("processWeatherData", () => {
  it("processes weather data into a Weather Data dataset with Yearly Aggregates and Monthly Aggregates", () => {
    expect(processWeatherData(mockParsedBomEntries)).toStrictEqual({
      WeatherData: { WeatherDataFor2019: mockWeatherDataFor2019 },
    });
  });

  it("does not process data that is in the future", () => {
    jest.useFakeTimers().setSystemTime(new Date("2019-04-01"));

    expect(processWeatherData(mockParsedBomEntries)).toStrictEqual({
      WeatherData: { WeatherDataFor2019: mockWeatherDataFor2019UntilApril1st },
    });

    jest.clearAllTimers();
  });
});

describe("processWeatherDataForMonth", () => {
  it("processes weather data into a Monthly Aggregate structure", () => {
    const { weatherDataForMonth } = processWeatherDataForMonth(
      2019,
      1,
      mockWeatherDataForJanuaryMap
    );

    expect(weatherDataForMonth).toStrictEqual(mockWeatherMapForJanuary);
  });

  it("processes weather data into flat array of rainfall data points for the month", () => {
    const { rainfallDataPointsForMonth } = processWeatherDataForMonth(
      2019,
      1,
      mockWeatherDataForJanuaryMap
    );

    expect(rainfallDataPointsForMonth).toStrictEqual(
      mockRainfallDataPoints.slice(0, 31)
    );
  });

  it("does not process data that is in the future", () => {
    jest.useFakeTimers().setSystemTime(new Date("2019-01-13"));

    const { weatherDataForMonth } = processWeatherDataForMonth(
      2019,
      1,
      mockWeatherDataForJanuaryMap
    );

    expect(weatherDataForMonth).toStrictEqual(
      mockWeatherMapForJanuaryUntil13th
    );

    jest.clearAllTimers();
  });
});

describe("processWeatherDataForYear", () => {
  it("processes weather data into a Yearly Aggregate structure", () => {
    const { weatherDataForYear } = processWeatherDataForYear(
      2019,
      mockWeatherDataFor2019Map
    );

    expect(weatherDataForYear).toStrictEqual(mockWeatherDataFor2019);
  });

  it("does not process data that is in the future", () => {
    jest.useFakeTimers().setSystemTime(new Date("2019-04-01"));

    const { weatherDataForYear } = processWeatherDataForYear(
      2019,
      mockWeatherDataFor2019Map
    );

    expect(weatherDataForYear).toStrictEqual(
      mockWeatherDataFor2019UntilApril1st
    );

    jest.clearAllTimers();
  });
});
