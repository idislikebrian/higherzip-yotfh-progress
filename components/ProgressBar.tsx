"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "@/styles/ProgressBar.module.css";

type ProgressBarProps = {
  revenue: number;
  goal: number;
  progress: number;
  rawRatio: number;
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

export default function ProgressBar({
  revenue,
  goal,
  progress,
  rawRatio
}: ProgressBarProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [displayPercent, setDisplayPercent] = useState(0);
  const [displayRevenue, setDisplayRevenue] = useState(0);

  const clampedProgress = useMemo(() => Math.min(progress, 1), [progress]);
  const isOverGoal = rawRatio > 1;

  useEffect(() => {
    const startDelay = window.setTimeout(() => {
      setAnimatedProgress(clampedProgress);
    }, 120);

    const duration = 1200;
    const start = performance.now();

    const tick = (time: number) => {
      const elapsed = time - start;
      const ratio = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - ratio) ** 3;

      setDisplayPercent(Math.round(rawRatio * 100 * eased));
      setDisplayRevenue(Math.round(revenue * eased));

      if (ratio < 1) {
        window.requestAnimationFrame(tick);
      }
    };

    const frame = window.requestAnimationFrame(tick);

    return () => {
      window.clearTimeout(startDelay);
      window.cancelAnimationFrame(frame);
    };
  }, [clampedProgress, rawRatio, revenue]);

  return (
    <section className={styles.wrapper} aria-label="Break-even progress">
      <div className={styles.track}>
        <div
          className={`${styles.fill} ${isOverGoal ? styles.fillComplete : ""}`}
          style={{ width: `${animatedProgress * 100}%` }}
        />
      </div>
      <p className={styles.percent}>
        {displayPercent}% to break even
      </p>
      <div className={styles.meta}>
        <div>
          <span className={styles.label}>Revenue</span>
          <strong>{formatCurrency(displayRevenue)} raised</strong>
        </div>
        <div>
          <span className={styles.label}>Goal</span>
          <strong>{formatCurrency(goal)}</strong>
        </div>
      </div>
    </section>
  );
}
