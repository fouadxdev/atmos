import { describe, it, expect } from "vitest";
import { getWeather } from "../src/utils/weather.js";

describe("Weather Utility", () => {
  it("should fetch weather data with the correct properties", async () => {
    // Testing with a known city
    const data = await getWeather("London");

    expect(data).toHaveProperty("location");
    expect(data).toHaveProperty("temperature");
    expect(Array.isArray(data.date)).toBe(true);
    expect(typeof data.temperature).toBe("number");
  });

  it("should throw an error for non-existent locations", async () => {
    await expect(getWeather("Non-Existent-Location.com")).rejects.toThrow();
  });
});
