import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import Reviews from "./Reviews";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Manage</title>
        <meta
          name="description"
          content="Bring everyone
                  together to build
                  better products."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.info}>
          <h2 className={styles.subHeading}>What's different about Manage?</h2>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <section className={styles.outerList}>
          <div className={styles.listItem}>
            <h3 className={styles.listHeading}>
              <span className={styles.number}>1</span>Track company-wide
              progress
            </h3>
            <p className={styles.listDescription}>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
          <div className={styles.listItem}>
            <h3 className={styles.listHeading}>
              <span className={styles.number}>2</span>Advanced built-in reports
            </h3>
            <p className={styles.listDescription}>
              Set internal delivery estimates and track progress toward company
              goals. Our customizable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
          <div className={styles.listItem}>
            <h3 className={styles.listHeading}>
              <span className={styles.number}>3</span>Everything you need in one
              place
            </h3>
            <p className={styles.listDescription}>
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </section>
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
