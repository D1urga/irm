import React from "react";
import styles from "./myLandingPage.module.css";

export default function Landing() {
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <p className={styles.p1}>Welcome </p>
        <div className={styles.title}>
          <p className={styles.p2}>IRM</p>
          <div>
            <p className={styles.p3}>
              <span className={styles.s1}>Innovative</span> Thinking
            </p>
            <p className={styles.p3}>
              <span className={styles.s2}>Creative</span> Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
