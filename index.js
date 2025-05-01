import yargsInit from "./src/commands.js";
import { readandLogFileSize, readFile } from "./src/common.js";

const file = yargsInit();

file.logFileSize && readandLogFileSize(file.fileName);

file.logNoOfLines && readFile(file.fileName);
