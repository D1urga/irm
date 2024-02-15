import React from "react";
import styles from "./styles/headerSection.module.css";
import { FaAngleUp } from "react-icons/fa";

export default function HeaderSection({
  headerSectionData,
  setHeaderSectionData,
  onClickFun,
}) {
  const handleChange = (event) => {
    setHeaderSectionData({
      ...headerSectionData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.title}>
          <p>Header Section</p>
          <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
        </div>
        <p className={styles.reason}>Reason</p>
        <textarea
          value={headerSectionData.reason}
          name="reason"
          onChange={handleChange}
          className={styles.text_area}
          placeholder="enter your reason here ..."
          autoComplete="true"
        ></textarea>

        <p className={styles.reason}>Name</p>
        <input
          value={headerSectionData.name}
          name="name"
          onChange={handleChange}
          className={styles.input}
          placeholder="enter your name here ..."
        ></input>
      </div>
    </div>
  );
}
