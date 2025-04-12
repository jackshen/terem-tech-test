# terem-tech-test

Thank you for considering my application! This directory contains my attempt at the technical test that was given.

## Setup and usage

1. Install dependencies. I have elected to use `pnpm` but you may use the package manager of choice.

```sh
pnpm install
```

2. Download the BOM historical rainfall data in `.csv` file format.
3. To ingest the data, run the following CLI script. The `-o` argument is optional, if not provided the output file will be in the same directory as the script was run.

```sh
pnpm start -i <path/to/bom_file.csv> -o <path/to/output_file.json>
```

## Technologies used

- **Language**: JavaScript + TypeScript
- **Linting and formatting**: ESLint, Prettier
- **Testing**: Jest
- **Command-line interfacing**: commander
- **CSV parsing**: csv-parser
- **Date and time management**: dayjs

## High-level design

I envisioned this problem—and solution—to be in three stages:

1. Read the `.csv` file and transform it into useful manipulable data;
2. process the data;
3. and finally, write the processed data to a `.json` file.

Stage 1 involves ingesting the data in its raw form from the BOM `.csv` and normalising it into a format that is predictable and easy to manipulate. This step is important because we want to ensure that data passed into the next stages is always consistent and follows an expected structure. If the format of BOM data changes in the future, this will allows us to continue using all the existing logic without having to undergo major refactors. In order to achieve this, I have written a function that concurrently reads the `.csv`, strips all unnecessary information, and reformats it. We create a read stream instead of reading the whole file at once in case we need to ingest very large files.

Stage 2 deals with all the logic required to combine every individual point of rainfall data into useful information grouped by year and month. Data first needs to be organised as prerequisite for some of the calculations, for example:

- All rainfall data points must be group by month and ordered in order to calculate the median rainfall for a given month.
- All rainfall data points must be grouped by year and ordered in order to calculate the longest consecutive days of rain.

To achieve this, I have written a function that iterates through each rainfall data point (which describes the amount of rain for a single date) and stores this information in a Map that is structured by year, followed by month, and then day. This is then used as the skeleton on which the final format (which is similarly structured) is built on.

The final stage is the most straightforward: it simply writes the completed data to a `.json` file with an optionally-user-defined path. This stage also involves writing the logic that will allow the entire end-to-end ingestion process to be conducted through a command-line script.

## Testing

I have written unit tests for every function in order to verify and demonstrate the assumptions I have made. To run Jest unit tests:

```sh
pnpm test
```

## Assumptions

- As `MonthlyAggregates` is an object containing nodes for each month keyed as `WeatherDataFor<month_name>` (e.g. `WeatherDataForJanuary`), I have assumed that a similar structure is desired for years. In my code and TypeScript definitions, I describe this structure as `YearlyAggregates`, with each year keyed as `WeatherDataFor<year>` (e.g. `WeatherDataFor2019`).
- I have typed rainfall-related properties (`TotalRainfall`, `DaysWithNoRainfall`, etc) as numbers even though the provided example snipped suggests they should be strings. Numbers are valid in JSON, and I believe it makes more sense for them to be typed as numbers than strings. However, if this requirement is important, it is trivial to write a post-processing function to convert all numbers into strings and round them to the same number of decimal places as in the example.
- Longest number days raining and median daily rainfall were listed as requirements but not present in the example snippet. I have added them following the same naming format as the other properties in the JSON snippet.
- I have assumed that we should not rely on the data being perfect. In particular:
  - We do not expect the `.csv` to list each entry in ascending chronological order. For example before calculating the Longest number days raining, we ensure rainfall data points are sorted.
  - We do not expect the `.csv` to be complete, there may be missing dates. For example when calculating the Longest number days raining, we validate every rainfall data point is chronologically consecutive.
- The median of an empty set is `undefined`.
