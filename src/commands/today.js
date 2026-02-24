import ora from "ora";
import chalk from "chalk";
import { getWeather } from "../utils/weather.js";

export async function today(args) {
  const spinner = ora("Fetching weather").start();

  try {
    const location = args["--location"];

    const weather = await getWeather(location);

    spinner.stop();

    console.log(
      chalk.cyan(
        `Current conditions in ${chalk.bold(weather.location)}: ${weather.temperature}°C`,
      ),
    );
  } catch (error) {
    spinner.fail(chalk.red(error.message));
  }
}
