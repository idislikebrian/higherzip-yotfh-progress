"use client";

import { useState } from "react";
import Breakdown from "@/components/Breakdown";
import ProgressBar from "@/components/ProgressBar";
import SegmentedBar from "@/components/SegmentedBar";
import {
  breakEvenGoal,
  costGroups,
  getBreakEvenProgress,
  getCostSegments,
  getTotalCosts,
  getTotalRevenue
} from "@/data/figures";
import styles from "@/styles/page.module.css";

export default function Home() {
  const [activeCostCategory, setActiveCostCategory] = useState<string | null>(null);
  const totalRevenue = getTotalRevenue();
  const totalCosts = getTotalCosts();
  const costSegments = getCostSegments();
  const breakEvenProgress = getBreakEvenProgress();
  const rawBreakEvenRatio =
    breakEvenGoal > 0 ? totalRevenue / breakEvenGoal : 0;
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);

  return (
    <main className={styles.page}>
      <section className={styles.panel}>
        <p className={styles.eyebrow}>PRODUCT #001</p>
        <h1 className={styles.title}>Year of the Fire Horse Calendar</h1>

        <ProgressBar
          revenue={totalRevenue}
          goal={breakEvenGoal}
          progress={breakEvenProgress}
          rawRatio={rawBreakEvenRatio}
        />

        <div className={styles.block}>
          <div className={styles.headingRow}>
            <span className={styles.heading}>Costs</span>
            <span className={styles.headingValue}>{formatCurrency(totalCosts)}</span>
          </div>
          <SegmentedBar
            items={costSegments}
            total={totalCosts}
            activeLabel={activeCostCategory}
          />
        </div>

        <Breakdown
          groups={costGroups}
          activeCategory={activeCostCategory}
          onCategoryEnter={setActiveCostCategory}
          onCategoryLeave={() => setActiveCostCategory(null)}
        />
      </section>
    </main>
  );
}
