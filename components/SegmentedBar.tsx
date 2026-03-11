"use client";

import { useEffect, useMemo, useState } from "react";
import type { FinancialItem } from "@/data/figures";
import styles from "@/styles/SegmentedBar.module.css";

type SegmentedBarProps = {
  items: FinancialItem[];
  total: number;
  activeLabel?: string | null;
};

const segmentColors = [
  "var(--amber)",
  "var(--green)",
  "var(--grey)",
  "var(--lghtgrey)"
];

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

export default function SegmentedBar({
  items,
  total,
  activeLabel = null
}: SegmentedBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  const segments = useMemo(
    () =>
      items.map((item, index) => ({
        ...item,
        color: segmentColors[index % segmentColors.length],
        width: total > 0 ? (item.amount / total) * 100 : 0
      })),
    [items, total]
  );

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsVisible(true);
    }, 180);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.bar} aria-label="Cost distribution">
        {segments.map((segment) => (
          <div
            key={segment.label}
            className={[
              styles.segment,
              activeLabel && activeLabel !== segment.label ? styles.segmentMuted : "",
              activeLabel === segment.label ? styles.segmentActive : ""
            ]
              .filter(Boolean)
              .join(" ")}
            style={{
              backgroundColor: segment.color,
              width: isVisible ? `${segment.width}%` : "0%"
            }}
            title={`${segment.label}: ${formatCurrency(segment.amount)}`}
          >
            <span className={styles.tooltip}>
              {segment.label} {formatCurrency(segment.amount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
