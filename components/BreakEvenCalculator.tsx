import styles from "@/styles/BreakEvenCalculator.module.css";

type BreakEvenCalculatorProps = {
  calendarsNeeded: number;
  remainingAmount: number;
  unitPrice: number;
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

export default function BreakEvenCalculator({
  calendarsNeeded,
  remainingAmount,
  unitPrice
}: BreakEvenCalculatorProps) {
  const isAtBreakEven = calendarsNeeded === 0;

  return (
    <section className={styles.section} aria-labelledby="break-even-units-heading">
      <div className={styles.card}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Break-Even Units</p>
          <h2 id="break-even-units-heading" className={styles.title}>
            {isAtBreakEven
              ? "Break-even is dead. Everything from here is extra."
              : `${calendarsNeeded} more calendars until this thing stops being expensive performance art`}
          </h2>
          <p className={styles.description}>
            {isAtBreakEven
              ? `Costs are covered. Every calendar sold above ${formatCurrency(unitPrice)} now lands on the profitable side of the spreadsheet.`
              : `${formatCurrency(remainingAmount)} is still standing between us and financial closure. At ${formatCurrency(unitPrice)} per calendar, that works out to ${calendarsNeeded} more people deciding they need one.`}
          </p>
        </div>

        <a href="#buy" className={styles.action}>
          BUY YOURS
        </a>
      </div>
    </section>
  );
}
