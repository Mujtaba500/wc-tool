import yargs from "yargs";
import { hideBin } from "yargs/helpers";

/** 

const argv = yargs(hideBin(process.argv)).parse();

console.log(argv);

console.log(`Your input was: ${argv._.join(", ")}`);

*/

const yargsInit = () => {
  const cli = yargs(hideBin(process.argv))
    .option("c", {
      alias: "check",
      describe: "Log file size",
      type: "string", // We expect the filename here
      demandOption: false,
    })
    .middleware([
      (argv) => {
        if (argv._.length > 0) {
          console.log("Running command:", argv._[0]);
        }
        argv.c && console.log("Running flag -c", argv.c);
      },
    ]);
  return cli;
};

export default yargsInit;
