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
          Nobody gets rich until the object pays for itself
        </h2>
      </div>

      <div className={styles.card}>
        <p className={styles.summary}>
          {hasProfit
            ? `The costs have been handled, so the upside is now being sliced across ${artistCount} artists.`
            : `We are still in reimbursement mode, so the current artist share remains $0.00.`}
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
          Current math: {formatCurrency(totalRevenue)} in revenue, {formatCurrency(totalCosts)} in costs, and anything above that line gets split evenly between {artistCount} artists.
        </p>
      </div>
    </section>
  );
}
