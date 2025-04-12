import csvParser from "csv-parser";
import fs from "fs";

function parseCsv<Chunk, TransformedChunk = Chunk>(
  filePath: string,
  transformData: (chunk: Chunk) => TransformedChunk
): Promise<TransformedChunk[]>;

function parseCsv<Chunk>(filePath: string): Promise<Chunk[]>;

/**
 * Parses, optionally transforms, and returns data from a .csv file
 * @param filePath
 * @param transformData
 */
function parseCsv<Chunk, TransformedChunk = Chunk>(
  filePath: string,
  transformData?: (chunk: Chunk) => TransformedChunk
): Promise<(Chunk | TransformedChunk)[]> {
  const output: (Chunk | TransformedChunk)[] = [];

  const csvReadStream = fs.createReadStream(filePath).pipe(csvParser());

  const onDataListener = (chunk: Chunk) => {
    const data = transformData ? transformData(chunk) : chunk;

    output.push(data);
  };

  csvReadStream.on("data", onDataListener);

  return new Promise((resolve, reject) => {
    csvReadStream.on("end", () => {
      resolve(output);
    });

    csvReadStream.on("error", (error) => {
      reject(error);
    });
  });
}

export default parseCsv;
