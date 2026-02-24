import { describe, it, expect } from "vitest";
import { execSync } from "child_process";

describe("CLI Integration", () => {
  it("should output the version number", () => {
    const output = execSync("node bin/atmos-cli.js --version").toString();

    // Check if it looks like v1.0.0
    expect(output).toMatch(/^v\d+\.\d+\.\d+/);
  });

  it("should show an error for unknown commands", () => {
    try {
      execSync("node bin/atmos-cli.js pizza");
    } catch (error) {
      expect(error.status).toBe(1);
      expect(error.stderr.toString()).toContain("not a valid command");
    }
  });
});
