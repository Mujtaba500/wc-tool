import fs from "fs";
import readline from "readline";

export const readandLogFileSize = (filename) => {
  if (filename) {
    try {
      const stats = fs.statSync(filename);
      console.log(`File size of ${filename}: ${stats.size} bytes`);
    } catch (err) {
      console.error("File not found or error reading file:", err.message);
    }
  }
};

export const readAndLogFileNoOfLines = async (file) => {
  let noOfLines = 0;
  const readStream = fs.createReadStream(file, { encoding: "utf8" });
  try {
    const rl = readline.createInterface({
      input: readStream,
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      console.log(line);
      noOfLines++;
    }
    console.log("No of lines in file: ", noOfLines);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
};

export const readAndLogNoOfWords = async (file) => {
  let words = 0;
  const readStream = fs.createReadStream(file, { encoding: "utf8" });
  try {
    const rl = readline.createInterface({
      input: readStream,
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      for (const char of line) {
        if (char === " ") {
          words++;
        }
      }
      // Line ends
      words++;
    }

    readStream.on("close", () => {
      console.log("No of words in file: ", words);
    });
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
};
