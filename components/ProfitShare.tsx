import styles from "@/styles/ProfitShare.module.css";

type ProfitShareProps = {
  artistCount: number;
  totalProfit: number;
  perArtistShare: number;
  totalRevenue: number;
  totalCosts: number;
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

export default function ProfitShare({
  artistCount,
  totalProfit,
  perArtistShare,
  totalRevenue,
  totalCosts
}: ProfitShareProps) {
  const hasProfit = totalProfit > 0;

  return (
    <section className={styles.section} aria-labelledby="profit-share-heading">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Artist Profit Share</p>
        <h2 id="profit-share-heading" className={styles.title}>
          Profit only starts after the calendar breaks even
        </h2>
      </div>

      <div className={styles.card}>
        <p className={styles.summary}>
          {hasProfit
            ? `The calendar is above cost, so profit is now split across ${artistCount} artists.`
            : `The calendar is still below cost, so the current artist share is $0.00.`}
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.label}>Per Artist</span>
            <strong className={styles.value}>{formatCurrency(perArtistShare)}</strong>
          </div>
          <div className={styles.stat}>
            <span className={styles.label}>Profit Pool</span>
            <strong className={styles.value}>{formatCurrency(totalProfit)}</strong>
          </div>
          <div className={styles.stat}>
            <span className={styles.label}>Artists</span>
            <strong className={styles.value}>{artistCount}</strong>
          </div>
        </div>

        <p className={styles.note}>
          Based on current totals: {formatCurrency(totalRevenue)} revenue minus{" "}
          {formatCurrency(totalCosts)} costs, with any amount above break-even split
          evenly among {artistCount} artists.
        </p>
      </div>
    </section>
  );
}
