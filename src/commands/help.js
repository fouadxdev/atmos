import chalk from "chalk";

export function help() {
  console.log(`${chalk.bold(`Commands:`)}
--help or -h: List Available Commands
--version or -v: Get Package Version
--location or -l: Get Location
today: Get current Weather ${chalk.bgGreen(`e.g atmos-cli today -l "London"`)}
forecast: Show 7-day weather forecast ${chalk.bgGreen(`e.g atmos-cli forecast -l "Toronto"`)}
`);
}
