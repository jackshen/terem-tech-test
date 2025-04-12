export interface BomCsvEntry {
  "Bureau of Meteorology station number": string;
  Day: string;
  Month: string;
  "Period over which rainfall was measured (days)": string;
  "Product code": string;
  Quality: string;
  "Rainfall amount (millimetres)": string;
  Year: string;
}

export type MonthlyAggregates = Record<string, WeatherDataForMonth>;

export interface TransformedBomCsvEntry {
  day: number;
  month: number;
  rainfall: number | null;
  year: number;
}

export interface WeatherDataForMonth {
  AverageDailyRainfall: number;
  DaysWithNoRainfall: number;
  DaysWithRainfall: number;
  FirstRecordedDate: string;
  LastRecordedDate: string;
  MedianDailyRainfall: number | undefined;
  Month: string;
  TotalRainfall: number;
}

export interface WeatherDataForYear {
  AverageDailyRainfall: number;
  DaysWithNoRainfall: number;
  DaysWithRainfall: number;
  FirstRecordedDate: string;
  LastRecordedDate: string;
  LongestNumberDaysRaining: number;
  MonthlyAggregates: MonthlyAggregates;
  TotalRainfall: number;
  Year: string;
}

export type YearlyAggregates = Record<string, WeatherDataForYear>;
