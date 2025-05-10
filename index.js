import yargsInit from "./src/commands.js";
import {
  readandLogFileSize,
  readAndLogFileNoOfLines,
  readAndLogNoOfWords,
} from "./src/common.js";

const file = yargsInit();

file.logFileSize && readandLogFileSize(file.fileName);

file.logNoOfLines && readAndLogFileNoOfLines(file.fileName);

file.logNoOfWords && readAndLogNoOfWords(file.fileName);
