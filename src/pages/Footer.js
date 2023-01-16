import CallToAction from "./CallToAction";
import styles from "../styles/Footer.module.css";
import { useState } from "react";
import Image from "next/image";
import facebookIcon from "../../public/images/icon-facebook.svg";
import youTubeIcon from "../../public/images/icon-youtube.svg";
import twitterIcon from "../../public/images/icon-twitter.svg";
import pinterestIcon from "../../public/images/icon-pinterest.svg";
import instagramIcon from "../../public/images/icon-instagram.svg";
import logoLight from "../../public/images/logo-light.svg";
import WindowSize from "./components/utils/WindowSize";
export default function Footer() {
  const { width } = WindowSize();
  const [emailSignup, setEmailSignup] = useState("");
  const [isValid, setIsValid] = useState(true);
  const handleChange = (e) => {
    setEmailSignup(e.target.value);
  };

  const validateEmail = (value) => {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const isValidEmail = validateEmail(emailSignup);
    if (isValidEmail) {
      setIsValid(true);
      alert(
        `Thank you for signing up to our newsletter! Your emails will be sent to ${emailSignup}`
      );
      setEmailSignup("");
    } else {
      setIsValid(false);
    }
  };
  return (
    <footer className={styles.footer}>
      <CallToAction />
      <section className={styles.sectionDark}>
        <form className={styles.form}>
          <label htmlFor="email-signup"></label>
          <input
            id="email-signup"
            name="email-signup"
            value={emailSignup}
            placeholder="Updates in your inbox…"
            onChange={handleChange}
            className={styles.input}
          />

          <button type="submit" onClick={handleClick} className={styles.button}>
            Go
          </button>
          {isValid ? (
            ""
          ) : (
            <div className={styles.error}>Please insert a valid email</div>
          )}
        </form>
        <section className={styles.linksContainerOuter}>
          <div className={styles.linksContainerInner}>
            <a href="/" className={styles.link}>
              Home
            </a>
            <a href="/" className={styles.link}>
              Pricing
            </a>
            <a href="/" className={styles.link}>
              Products
            </a>
            <a href="/" className={styles.link}>
              About Us
            </a>
          </div>
          <div className={styles.linksContainerInner}>
            <a href="/" className={styles.link}>
              Careers
            </a>
            <a href="/" className={styles.link}>
              Community
            </a>
            <a href="/" className={styles.link}>
              Privacy Policy
            </a>
          </div>
        </section>
        <section className={styles.socialLinksContainer}>
          <div className={styles.socialLinksWrapper}>
            <a href="/" className={styles.socialLinks}>
              {width > 700 ? (
                <Image width={20} height={20} src={facebookIcon} />
              ) : (
                <Image width={32} height={32} src={facebookIcon} />
              )}
            </a>
            <a href="/" className={styles.socialLinks}>
              {width > 700 ? (
                <Image width={20} height={20} src={youTubeIcon} />
              ) : (
                <Image width={32} height={32} src={youTubeIcon} />
              )}
            </a>
            <a href="/" className={styles.socialLinks}>
              {width > 700 ? (
                <Image width={20} height={20} src={twitterIcon} />
              ) : (
                <Image width={32} height={32} src={twitterIcon} />
              )}
            </a>
            <a href="/" className={styles.socialLinks}>
              {width > 700 ? (
                <Image width={20} height={20} src={pinterestIcon} />
              ) : (
                <Image width={32} height={32} src={pinterestIcon} />
              )}
            </a>
            <a href="/" className={styles.socialLinks}>
              {width > 700 ? (
                <Image width={20} height={20} src={instagramIcon} />
              ) : (
                <Image width={32} height={32} src={instagramIcon} />
              )}
            </a>
          </div>
          {width > 700 ? (
            <Image
              width={158}
              height={26}
              src={logoLight}
              className={styles.logo}
            />
          ) : (
            <Image
              width={147}
              height={24}
              src={logoLight}
              className={styles.logo}
            />
          )}
        </section>
        <p className={styles.copyright}>Copyright 2020. All Rights Reserved</p>
      </section>
    </footer>
  );
}