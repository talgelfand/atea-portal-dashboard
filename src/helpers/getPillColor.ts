import type { PillColor } from "../components/atoms/Pill";

type PillKind = "status" | "priority" | "shipment" | "category";

const colorMaps: Record<PillKind, Record<string, PillColor>> = {
  priority: {
    high: "danger",
    urgent: "danger",
    medium: "warning",
    low: "success",
  },
  status: {
    open: "info",
    closed: "success",
    delivered: "success",
    pending: "neutral",
    processing: "neutral",
    "in transit": "info",
  },
  shipment: {
    delivered: "success",
    "in progress": "warning",
    "in transit": "info",
    processing: "neutral",
    cancelled: "danger",
  },
  category: {
    product: "info",
    article: "neutral",
  },
};

const defaultColors: Record<PillKind, PillColor> = {
  priority: "warning",
  status: "warning",
  shipment: "warning",
  category: "info",
};

export const getPillColor = (kind: PillKind, value: string): PillColor => {
  const normalizedValue = value.toLowerCase();

  return colorMaps[kind][normalizedValue] ?? defaultColors[kind];
};
