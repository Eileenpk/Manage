import Image from "next/image";
import logo from "../../public/images/logo.svg";
import openNav from "../../public/images/icon-hamburger.svg";
import closeNav from "../../public/images/icon-close.svg";
import introImg from "../../public/images/intro-mobile.png";
import GetStartedButton from "./components/GetStartedButton";
import styles from "../styles/Header.module.css";
import { useState, useEffect } from "react";
import WindowSize from "./components/utils/WindowSize";
export default function Header() {
  const [isNavShown, setIsNavShown] = useState(false);
  const { width } = WindowSize();
  //   useEffect to see if window size is greater then 700px and if so set isNavShown to true
  useEffect(() => {
    if (width > 700) {
      return setIsNavShown(true);
    }
  }, [width]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Image
          height={18}
          width={110}
          src={logo}
          alt="manage logo"
          className={styles.logo}
        />

        {!isNavShown ? (
          <button
            type="button"
            onClick={() => setIsNavShown(true)}
            className={styles.navBtn}
          >
            <Image height={20} width={20} src={openNav} alt="open nav button" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsNavShown(false)}
            className={styles.navBtn}
          >
            <Image
              height={20}
              width={20}
              src={closeNav}
              alt="close nav button"
            />
          </button>
        )}

        {isNavShown ? (
          <div className={styles.navWindow}>
            <ul className={styles.navList}>
              <li>Pricing</li>
              <li>Product</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Community </li>
            </ul>
          </div>
        ) : (
          <div className={styles.introImg}>
            <Image
              height={310}
              width={342}
              src={introImg}
              alt="charts and graphs"
            />
          </div>
        )}
        {width > 700 ? <GetStartedButton /> : ""}
      </nav>
      <div className={styles.headerContentWrapper}>
        <div className={styles.headerTextInfo}>
          <h1 className={styles.heading}>
            Bring everyone together to build better products.
          </h1>
          <p className={styles.p}>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          {width > 700 ? <GetStartedButton /> : ""}
        </div>
        {width < 700 ? (
          <GetStartedButton />
        ) : (
          <div className={styles.introImg}>
            <Image
              height={540}
              width={485}
              src={introImg}
              alt="close nav button"
            />
          </div>
        )}
      </div>
    </header>
  );
}