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
        <div className={styles.scrollbar_div}>
          <p className={styles.reason}>Draft Name</p>
          <div>
            <input
              value={headerSectionData.DraftName}
              name="DraftName"
              onChange={handleChange}
              className={styles.input}
              placeholder="enter your name here ..."
            ></input>
          </div>
          <p className={styles.reason}>Damages To</p>
          <div>
            <input
              value={headerSectionData.DamagesTo}
              name="DamagesTo"
              onChange={handleChange}
              className={styles.input}
              placeholder="enter your name here ..."
            ></input>
          </div>
          <p className={styles.reason}>Draft Heading and Address</p>
          <div>
            <textarea
              value={headerSectionData.DraftHeadingAndAddress}
              name="DraftHeadingAndAddress"
              onChange={handleChange}
              className={styles.text_area}
              placeholder="enter your reason here ..."
              autoComplete="true"
            ></textarea>
          </div>

          <p className={styles.reason}>Date of Incident</p>
          <div>
            {" "}
            <input
              type="date"
              value={headerSectionData.DateOfIncident}
              name="DateOfIncident"
              onChange={handleChange}
              className={styles.input}
              placeholder="enter your name here ..."
            ></input>
          </div>
          <p className={styles.reason}>Date of Survey</p>
          <div>
            {" "}
            <input
              type="date"
              value={headerSectionData.DateOfSurvey}
              name="DateOfSurvey"
              onChange={handleChange}
              className={styles.input}
              placeholder="enter your name here ..."
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
