"use client";
import React from "react";
import styles from "./myLandingPage.module.css";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();
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
        <div className={styles.btns}>
          <button
            className={styles.btn1}
            onClick={() => {
              router.push("/typeAReports");
            }}
          >
            Create Report
          </button>
          <button
            className={styles.btn2}
            onClick={() => {
              router.push("/allReports");
            }}
          >
            View Report
          </button>
        </div>
      </div>
    </div>
  );
}
