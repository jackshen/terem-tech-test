import type { BomCsvEntry, TransformedBomCsvEntry } from "../types";

const transformBomCsvEntry = (entry: BomCsvEntry): TransformedBomCsvEntry => {
  const rainfall = entry["Rainfall amount (millimetres)"];

  return {
    day: Number.parseInt(entry.Day),
    month: Number.parseInt(entry.Month),
    rainfall: rainfall ? Number.parseFloat(rainfall) : null,
    year: Number.parseInt(entry.Year),
  };
};

export default transformBomCsvEntry;
