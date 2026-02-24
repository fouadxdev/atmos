# atmos-cli

```
npm install atmos-cli
```

> A beautiful CLI tool for weather forecasts and current conditions.

**atmos-cli** is a sleek command-line weather application that fetches real-time weather data from the Open-Meteo API. Get current conditions and 7-day forecasts directly from your terminal.

## Features

- **Current Weather** - Get real-time temperature and conditions
- **7-Day Forecast** - Plan ahead with detailed forecasts
- **Easy to Use** - Simple, intuitive command-line interface
- **Fast** - Lightweight with minimal dependencies
- **Open Source** - Free and open API (Open-Meteo)

## Usage

### Get Help

```sh
atmos-cli --help
```

### Check Version

```sh
atmos-cli --version
```

### Current Weather

```sh
atmos-cli today -l "Toronto"
```

### 7-Day Forecast

```sh
atmos-cli forecast -l "London"
```

## Example Output

```
Current conditions in London: 15°C

7-Day Forecast for Toronto:
 Date              Highs    Lows
 Mon, Dec 16       12°C     5°C
 Tue, Dec 17       10°C     3°C
 Wed, Dec 18       11°C     4°C
 Thu, Dec 19        9°C      2°C
 Fri, Dec 20       13°C     6°C
 Sat, Dec 21       14°C     7°C
 Sun, Dec 22       12°C     5°C
```

## Dependencies

- `arg` - Command-line argument parsing
- `axios` - HTTP client for API requests
- `chalk` - Terminal string styling
- `ora` - Terminal spinner

## API

atmos-cli uses the [Open-Meteo API](https://open-meteo.com/), a free, open-source weather API that requires no API key.

## License

This project is licensed under the MIT License.

---

[fouadxdev](https://github.com/fouadxdev).
