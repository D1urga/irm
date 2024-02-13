import React from "react";
import styles from "./styles/policyparticulars.module.css";
import { FaAngleUp } from "react-icons/fa";

export default function PolicyParticulars({ onClickFun }) {
  return (
    <div className={styles.main_div}>
      <div className={styles.outer_div}>
        <div className={styles.title}>
          <p>Policy Particulars</p>
          <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
        </div>
        <p className={styles.topics}>The Insurer</p>
        <input className={styles.inputs} placeholder="the insurer ..."></input>
        <p className={styles.topics}>The Insured</p>
        <input className={styles.inputs} placeholder="the insured ..."></input>
        <p className={styles.topics}>Types of Policy</p>
        <input
          className={styles.inputs}
          placeholder="types of policy ..."
        ></input>
        <p className={styles.topics}>Policy Number</p>
        <input
          className={styles.inputs}
          placeholder="policy number ..."
        ></input>
        <p className={styles.topics}>Period of Insurance</p>
        <input
          className={styles.inputs}
          placeholder="period of insurance ..."
        ></input>
        <p className={styles.topics}>Policy Excess</p>
        <textarea
          className={styles.policy_excess}
          placeholder="policy excess ..."
        ></textarea>
      </div>
    </div>
  );
}
