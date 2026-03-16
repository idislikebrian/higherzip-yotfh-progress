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
              ? "The calendar has already cleared break-even"
              : `${calendarsNeeded} more calendars to break even`}
          </h2>
          <p className={styles.description}>
            {isAtBreakEven
              ? `At the current totals, every additional sale above ${formatCurrency(unitPrice)} contributes to profit beyond break-even.`
              : `${formatCurrency(remainingAmount)} remains before break-even. At ${formatCurrency(unitPrice)} per calendar, that comes out to ${calendarsNeeded} more sales.`}
          </p>
        </div>

        <a href="#buy" className={styles.action}>
          Jump to buy options
        </a>
      </div>
    </section>
  );
}
