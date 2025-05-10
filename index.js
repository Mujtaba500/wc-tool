import yargsInit from "./src/commands.js";
import {
  readandLogFileSize,
  readAndLogFileNoOfLines,
  readAndLogNoOfWords,
  readAndLogNoOfChars,
} from "./src/common.js";

const file = yargsInit();

file.logFileSize && readandLogFileSize(file.fileName);

file.logNoOfLines && readAndLogFileNoOfLines(file.fileName);

file.logNoOfWords && readAndLogNoOfWords(file.fileName);

file.logNoOfCharacters && readAndLogNoOfChars(file.fileName);
