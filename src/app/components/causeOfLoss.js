import React from "react";
import styles from "./styles/causeOfLoss.module.css";
import { FaAngleUp } from "react-icons/fa";

export default function CauseOfLoss({
  causeOfLoss,
  setCauseOfLoss,
  onClickFun,
}) {
  const handleChange = (event) => {
    setCauseOfLoss({
      ...causeOfLoss,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className={styles.outer_div}>
      <div className={styles.title}>
        <p>Cause of Loss</p>
        <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
      </div>
      <p className={styles.des}>Description</p>
      <textarea
        value={causeOfLoss.causeOfLoss}
        onChange={handleChange}
        name="causeOfLoss"
        className={styles.intro_textarea}
        placeholder="description ..."
      ></textarea>
    </div>
  );
}
