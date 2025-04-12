import path from "path";

import parseCsv from "../parseCsv";

describe("parseCsv", () => {
  it("reads and parses a .csv file from a path", async () => {
    const mockPath = path.join(__dirname, "mockCsvFile.csv");

    const parsedCsvOutput = await parseCsv(mockPath);

    expect(parsedCsvOutput).toStrictEqual([
      { a: "1", b: "2", c: "3", d: "4" },
      { a: "5", b: "6", c: "7", d: "8" },
      { a: "9", b: "10", c: "11", d: "12" },
    ]);
  });

  it("reads, parses, and transforms a .csv file from a path", async () => {
    const mockPath = path.join(__dirname, "mockCsvFile.csv");

    const mockTransformData = (chunk: Record<string, string>) => {
      const transformedDataEntries = Object.entries(chunk).map(([key, value]) => [key, parseInt(value)]);

      return Object.fromEntries(transformedDataEntries);
    };

    const parsedCsvOutput = await parseCsv(mockPath, mockTransformData);

    expect(parsedCsvOutput).toStrictEqual([
      { a: 1, b: 2, c: 3, d: 4 },
      { a: 5, b: 6, c: 7, d: 8 },
      { a: 9, b: 10, c: 11, d: 12 },
    ]);
  });
});
