"use client";

import styles from "@/styles/BuySection.module.css";

const STORE_URL = "https://shop.slice.so/store/2899?productId=5";
const CREDIT_CARD_URL =
  "https://higher-zip.myshopify.com/products/higher-calendar?variant=44811040587878";

const product = {
  title: "Higher Calendar",
  shortDescription:
    "A collaborative calendar designed to carry momentum through the year",
  price: "$44.44",
  description:
    "Year of the Fire Horse is built to live either on your wall or upright on your desk. Functional, sculptural, and designed to be marked up, pinned, rearranged, and lived with.",
  details:
    "Each small-batch set includes the calendar, an acrylic stand, two Higher pencils, a push pin, at least one magnet, and a paper cover variant."
};

const images = [
  "/yotfh/photo_2026-03-03_02-12-48.jpg",
  "/yotfh/photo_2026-03-03_02-12-58.jpg",
  "/yotfh/photo_2026-03-03_02-13-00.jpg",
  "/yotfh/photo_2026-03-03_02-13-02.jpg",
  "/yotfh/photo_2026-03-03_02-13-03.jpg",
  "/yotfh/photo_2026-03-03_02-13-05.jpg",
  "/yotfh/photo_2026-03-03_02-13-07.jpg",
  "/yotfh/photo_2026-03-03_02-13-09.jpg",
  "/yotfh/photo_2026-03-03_02-13-12.jpg",
  "/yotfh/photo_2026-03-03_02-13-14.jpg"
];

export default function BuySection() {
  return (
    <section id="buy" className={styles.section} aria-labelledby="buy-heading">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Calendar Promo</p>
        <h2 id="buy-heading" className={styles.title}>
          A small-batch calendar designed to be used hard
        </h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.gallery}>
          <div className={styles.mainImageFrame}>
            <img
              src={images[0]}
              alt={product.title}
              className={styles.mainImage}
            />
          </div>

          <div className={styles.filmStrip} aria-hidden="true">
            {images.slice(1, 4).map((image) => (
              <div key={image} className={styles.filmCell}>
                <img
                  src={image}
                  alt=""
                  className={styles.filmImage}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <p className={styles.productEyebrow}>Small-Batch Release</p>
          <h3 className={styles.productTitle}>{product.title}</h3>
          <p className={styles.shortDescription}>{product.shortDescription}</p>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.details}>{product.details}</p>
          <p className={styles.priceLine}>
            <span className={styles.price}>{product.price}</span>
            <span className={styles.priceMeta}>Small-batch release</span>
          </p>

          <div className={styles.actions}>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.primaryAction}
            >
              Buy with USDC
            </a>
            <a
              href={CREDIT_CARD_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryAction}
            >
              Buy with Credit Card
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
