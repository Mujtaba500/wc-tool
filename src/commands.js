import yargs from "yargs";
import { hideBin } from "yargs/helpers";

/** 

const argv = yargs(hideBin(process.argv)).parse();

console.log(argv);

console.log(`Your input was: ${argv._.join(", ")}`);

*/

const yargsInit = () => {
  let file = {
    fileName: false,
    logFileSize: false,
    logNoOfLines: false,
  };
  yargs(hideBin(process.argv)) // doesnot take the first two args which are node and filename
    // For controlling option, not necessarily required passing:
    .option("c", {
      alias: "check",
      describe: "Log file size",
      type: "string", // We expect the filename here
      demandOption: false, // true if required
    })
    .command(
      "file [fileName]",
      "read the file",
      (yargs) => {
        // return yargs.positional("port", {
        //   describe: "port to bind on",
        //   default: 5000,
        // });
      },
      (argv) => {
        file.logFileSize = true;
        file.logNoOfLines = true;
        file.logNoOfWords = true;
        file.logNoOfCharacters = true;
        file.fileName = argv.fileName;
      }
    )
    .middleware([
      (argv) => {
        if (argv._.length > 0) {
          console.log("Running command:", argv._[0]);
        }
        // if (!argv.c && !argv.l && !argv.w && !argv.m) {
        // file.logFileSize = true;
        // file.logNoOfLines = true;
        // file.logNoOfWords = true;
        // file.logNoOfCharacters = true;
        //   if (argv._.length > 0) {
        //     file.fileName = argv.fileName;
        //   }
        // }
        console.log("argv", argv);
        if (argv.c) {
          file.fileName = argv.c;
          file.logFileSize = true;
          console.log("Running flag -c for file size", argv.c);
        }
        if (argv.l) {
          file.fileName = argv.l;
          file.logNoOfLines = true;
          console.log("Running flag -l for lines of file", argv.l);
        }
        if (argv.w) {
          file.fileName = argv.w;
          file.logNoOfWords = true;
          console.log("Running flag -w for words of file", argv.w);
        }
        if (argv.m) {
          file.fileName = argv.m;
          file.logNoOfCharacters = true;
          console.log("Running flag -m for characters in file", argv.m);
        }
      },
    ]).argv;
  return file;
};

export default yargsInit;
