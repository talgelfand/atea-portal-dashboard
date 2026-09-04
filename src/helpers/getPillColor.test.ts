import { describe, expect, test } from "vitest";
import { getPillColor } from "./getPillColor";

describe("getPillColor", () => {
  test("maps known priority values", () => {
    expect(getPillColor("priority", "HIGH")).toBe("danger");
    expect(getPillColor("priority", "medium")).toBe("warning");
    expect(getPillColor("priority", "low")).toBe("success");
  });

  test("uses the default color for unknown values", () => {
    expect(getPillColor("status", "unknown")).toBe("warning");
    expect(getPillColor("category", "unknown")).toBe("info");
  });
});
