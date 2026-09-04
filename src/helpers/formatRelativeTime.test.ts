import { afterEach, describe, expect, test, vi } from "vitest";
import { formatRelativeTime } from "./formatRelativeTime";

describe("formatRelativeTime", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  test("formats recent timestamps", () => {
    vi.setSystemTime(new Date("2026-09-04T12:00:00Z"));

    expect(formatRelativeTime("2026-09-04T11:59:30Z")).toBe("just now");
    expect(formatRelativeTime("2026-09-04T11:45:00Z")).toBe("15 min ago");
    expect(formatRelativeTime("2026-09-04T10:00:00Z")).toBe("2 hr ago");
    expect(formatRelativeTime("2026-09-02T12:00:00Z")).toBe("2 day ago");
  });

  test("handles invalid timestamps", () => {
    expect(formatRelativeTime("not-a-date")).toBe("recently");
  });
});
