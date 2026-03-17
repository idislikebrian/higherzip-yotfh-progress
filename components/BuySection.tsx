"use client";

import styles from "@/styles/BuySection.module.css";

const STORE_URL = "https://shop.slice.so/store/2899?productId=5";
const CREDIT_CARD_URL =
  "https://higher-zip.myshopify.com/products/higher-calendar?variant=44811040587878";

const product = {
  title: "Higher Calendar",
  shortDescription:
    "A functional object for people who want their wall to apply pressure",
  price: "$44.44",
  description:
    "Year of the Fire Horse is built to live on your wall or stand upright on your desk. Part calendar, part device, part evidence that you intended to do something with your year.",
  details:
    "Each set includes the calendar, an acrylic stand, two Higher pencils, a push pin, at least one magnet, and a paper cover variant."
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
        <p className={styles.eyebrow}>Object for Sale</p>
        <h2 id="buy-heading" className={styles.title}>
          A small-batch calendar for public accountability and private delusion
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
          <h3 className={styles.productTitle}>{product.title}</h3>
          <p className={styles.shortDescription}>{product.shortDescription}</p>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.details}>{product.details}</p>
          <p className={styles.priceLine}>
            <span className={styles.price}>{product.price}</span>
            <span className={styles.priceMeta}>Tools included</span>
          </p>

          <div className={styles.actions}>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.primaryAction}
            >
              Acquire with USDC
            </a>
            <a
              href={CREDIT_CARD_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryAction}
            >
              Acquire with Card
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
