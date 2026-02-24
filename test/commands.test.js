import { describe, it, expect } from "vitest";
import { execSync } from "child_process";

describe("CLI Help Command", () => {
  it("should display help information", () => {
    const output = execSync("node bin/atmos.js --help").toString();
    expect(output).toContain("Commands:");
    expect(output).toContain("--help");
  });

  it("should display help with -h flag", () => {
    const output = execSync("node bin/atmos.js -h").toString();
    expect(output).toContain("Commands:");
    expect(output).toContain("--help");
  });
});

describe("CLI Today Command", () => {
  it("should require a location", () => {
    try {
      execSync("node bin/atmos.js today");
    } catch (error) {
      expect(error.status).toBe(1);
    }
  });
});

describe("CLI Forecast Command", () => {
  it("should require a location", () => {
    try {
      execSync("node bin/atmos.js forecast");
    } catch (error) {
      expect(error.status).toBe(1);
    }
  });
});

describe("CLI Version Command", () => {
  it("should display version with -v flag", () => {
    const output = execSync("node bin/atmos.js -v").toString();
    expect(output).toMatch(/^v\d+\.\d+\.\d+/);
  });
});

describe("CLI Input Validation", () => {
  it("should handle missing location gracefully for today", () => {
    try {
      execSync("node bin/atmos.js today");
    } catch (error) {
      expect(error.status).toBe(1);
    }
  });

  it("should handle missing location gracefully for forecast", () => {
    try {
      execSync("node bin/atmos.js forecast");
    } catch (error) {
      expect(error.status).toBe(1);
    }
  });
});
