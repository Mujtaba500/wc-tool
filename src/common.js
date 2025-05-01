import fs from "fs";

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
