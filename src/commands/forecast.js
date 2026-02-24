import ora from "ora";
import chalk from "chalk";
import { getWeather } from "../utils/weather.js";

export async function forecast(args) {
  const spinner = ora("Fetching weather Forecast").start();

  try {
    const location = args["--location"];

    const forecast = await getWeather(location);

    spinner.stop();

    console.log(
      `7-Day Forecast for ${location
        .toLowerCase()
        .split(" ")
        .reduce(
          (s, c) => s + "" + (c.charAt(0).toUpperCase() + c.slice(1) + " "),
          "",
        )}:`,
    );
    // console.log(forecast.date)
    // console.log(forecast.maxTemp)
    // console.log(forecast.minTemp)

    const heading = [
      chalk.gray.underline(`Date`.padEnd(20)),
      chalk.yellow.underline(`Highs`.padStart(8)),
      chalk.blue.underline(`Lows`.padStart(8)),
    ];
    console.log(` ${heading}`);

    forecast.date.forEach((date, index) => {
      const dateObj = new Date(date);

      const formattedDate = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      }).format(dateObj);

      const high = forecast.maxTemp[index];
      const low = forecast.minTemp[index];

      const output = [
        chalk.gray(formattedDate.padEnd(20)),
        chalk.yellow(`${high}°C`.padStart(8)),
        chalk.blue(`${low}°C`.padStart(8)),
      ];

      console.log(` ${output}`);
    });
  } catch (error) {
    spinner.fail(chalk.red(error.message));
  }
}
