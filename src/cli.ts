import { program } from "commander";
import { writeFile } from "fs/promises";

import type { BomCsvEntry, TransformedBomCsvEntry } from "./types";
import parseCsv from "./utils/parseCsv";
// import processWeatherData from "./utils/processWeatherData";
import transformBomCsvEntry from "./utils/transformBomCsvEntry";

export const ingestWeatherData = async () => {
  program
    .requiredOption("-i, --input <path>", "Path to input CSV file")
    .option(
      "-o, --output <path>",
      "Path to output JSON file",
      "./weather-data.json"
    )
    .parse(process.argv);

  try {
    const options = program.opts();

    const data = await parseCsv<BomCsvEntry, TransformedBomCsvEntry>(
      options.input,
      transformBomCsvEntry
    );

    // TODO: process data
    // const result = processWeatherData(data);

    // await writeFile(options.output, JSON.stringify(result, null, 2));
    await writeFile(options.output, JSON.stringify(data, null, 2));

    console.log(`Successfully ingested BOM weather data to ${options.output}`);
  } catch (error) {
    console.error(
      "Error:",
      error instanceof Error ? error.message : "Unknown error"
    );

    process.exit(1);
  }
};
