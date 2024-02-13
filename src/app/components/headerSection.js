import React from "react";
import styles from "./styles/headerSection.module.css";
import { FaAngleUp } from "react-icons/fa";

export default function HeaderSection({ onClickFun }) {
  return (
    <div className={styles.outer_div}>
      <div className={styles.title}>
        <p>Header Section</p>
        <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
      </div>
      <p className={styles.reason}>Reason</p>
      <textarea
        className={styles.text_area}
        placeholder="enter your reason here ..."
      ></textarea>

      <p className={styles.reason}>Name</p>
      <input
        className={styles.input}
        placeholder="enter your name here ..."
      ></input>
    </div>
  );
}
