import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';


const __dirname = dirname(fileURLToPath(import.meta.url));

export function version() {
  try {
    
    const pkgPath = join(__dirname, '../../package.json');
    
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
    console.log(chalk.green(`v${pkg.version}`));
  } catch (err) {
    console.error(chalk.red("Could not find the internal package.json file."));
  }
}