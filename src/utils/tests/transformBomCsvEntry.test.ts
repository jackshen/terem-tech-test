import transformBomCsvEntry from "../transformBomCsvEntry";

describe("transformBomCsvEntry", () => {
  it("extracts relevant values and ignores the rest", () => {
    const entry = {
      "Bureau of Meteorology station number": "066062",
      Day: "01",
      Month: "01",
      "Period over which rainfall was measured (days)": "1",
      "Product code": "IDCJAC0009",
      Quality: "N",
      "Rainfall amount (millimetres)": "8.8",
      Year: "2019",
    };

    const output = {
      day: 1,
      month: 1,
      rainfall: 8.8,
      year: 2019,
    };

    expect(transformBomCsvEntry(entry)).toStrictEqual(output);
  });

  it("should recognise entries with blank rainfall amounts as null rainfall", () => {
    const entry = {
      "Bureau of Meteorology station number": "066062",
      Day: "01",
      Month: "01",
      "Period over which rainfall was measured (days)": "",
      "Product code": "IDCJAC0009",
      Quality: "",
      "Rainfall amount (millimetres)": "",
      Year: "1858",
    };

    const output = {
      day: 1,
      month: 1,
      rainfall: null,
      year: 1858,
    };

    expect(transformBomCsvEntry(entry)).toStrictEqual(output);
  });

  it("should recognise entries with zero rainfall amounts as zero rainfall", () => {
    const entry = {
      "Bureau of Meteorology station number": "066062",
      Day: "09",
      Month: "01",
      "Period over which rainfall was measured (days)": "",
      "Product code": "IDCJAC0009",
      Quality: "Y",
      "Rainfall amount (millimetres)": "0.0",
      Year: "1861",
    };

    const output = {
      day: 9,
      month: 1,
      rainfall: 0,
      year: 1861,
    };

    expect(transformBomCsvEntry(entry)).toStrictEqual(output);
  });
});
