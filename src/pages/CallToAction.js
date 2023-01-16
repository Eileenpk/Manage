import GetStartedButton from "./components/GetStartedButton";
import styles from "../styles/CallToAction.module.css";
export default function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Simplify how your team works today.</h2>
        <GetStartedButton className="btnLight" />
      </div>
    </section>
  );
} 