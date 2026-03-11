"use client";

import type { CostGroup } from "@/data/figures";
import styles from "@/styles/SegmentedBar.module.css";

type BreakdownProps = {
  groups: CostGroup[];
  activeCategory?: string | null;
  onCategoryEnter: (category: string) => void;
  onCategoryLeave: () => void;
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

export default function Breakdown({
  groups,
  activeCategory = null,
  onCategoryEnter,
  onCategoryLeave
}: BreakdownProps) {
  return (
    <div className={styles.breakdown}>
      {groups.map((group) => (
        <section
          key={group.category}
          className={[
            styles.group,
            activeCategory && activeCategory !== group.category ? styles.groupMuted : "",
            activeCategory === group.category ? styles.groupActive : ""
          ]
            .filter(Boolean)
            .join(" ")}
          onMouseEnter={() => onCategoryEnter(group.category)}
          onMouseLeave={onCategoryLeave}
          onFocus={() => onCategoryEnter(group.category)}
          onBlur={onCategoryLeave}
          tabIndex={0}
        >
          <h2 className={styles.groupTitle}>{group.category}</h2>
          <ul className={styles.groupList}>
            {group.items.map((item) => (
              <li key={item.label} className={styles.breakdownItem}>
                <div className={styles.itemCopy}>
                  <span>{item.label}</span>
                  {item.notes ? (
                    <small className={styles.itemNote}>{item.notes}</small>
                  ) : null}
                </div>
                <span>{formatCurrency(item.amount)}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
