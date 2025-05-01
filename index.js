import yargsInit from "./src/commands.js";
import { readandLogFileSize } from "./src/common.js";

const cli = yargsInit();

readandLogFileSize(cli.argv.c);
