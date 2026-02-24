import arg from "arg";
import chalk from "chalk";

export async function main() {
  
  try {
    const args = arg({
      "--help": Boolean,
      "--version": Boolean,
      "--location": String,
      "--forecast": String,

      "-h": "--help",
      "-v": "--version",
      "-l": "--location",
      "-f": "--forecast",
    });

    let command = args._[0] || "help";

    if (args["--location"]) command = "location";
    if (args["--version"]) command = "version";
    if (args["--help"]) command = "help";

    switch (command) {
      case "help":
        const { help } = await import("./commands/help.js");
        help();
        break;

      case "today":
        const { today } = await import("./commands/today.js");
        await today(args);
        break;

      case "forecast":
        const { forecast } = await import("./commands/forecast.js");
        await forecast(args);
        break;

      case "version":
        const { version } = await import("./commands/version.js");
        version();
        break;

      default:
        console.error(chalk.red(`${command} is not a valid command`));
        process.exit(1);
    }
  } catch (err) {
    console.error(chalk.yellow(err.message));
  }
}
