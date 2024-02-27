import React, { useState } from "react";
import styles from "./styles/headerSection.module.css";
import { FaAngleUp, FaArrowRight } from "react-icons/fa";

export default function HeaderSection({
  headerSectionData,
  setHeaderSectionData,
  onClickFun,
}) {
  const [isSuggestionShowing, setIsSuggestionShowing] = useState(false);
  const handleChange = (event) => {
    setHeaderSectionData({
      ...headerSectionData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSuggestionChange = (event, val) => {
    setHeaderSectionData({
      ...headerSectionData,
      reason: val,
    });
  };

  const suggestions = [
    "reason 1",
    "reason 2",
    "reason 3",
    "reason 4",
    "reason 5",
    "reason 6",
    "reason 7",
    "reason 8",
    "reason 9",
    "reason 10",
    "reason 11",
    "reason 12",
    "reason 13",
    "reason 14",
    "reason 15",
    "reason 16",
    "reason 17",
    "reason 18",
    "reason 19",
    "reason 20",
  ];
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.title}>
          <p>Header Section</p>
          <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
        </div>
        <p className={styles.reason}>Name</p>
        <input
          value={headerSectionData.name}
          name="name"
          onChange={handleChange}
          className={styles.input}
          placeholder="enter your name here ..."
        ></input>
        <p
          className={styles.reason}
          onClick={() => {
            setIsSuggestionShowing(!isSuggestionShowing);
          }}
        >
          Reason
        </p>
        <textarea
          value={headerSectionData.reason}
          name="reason"
          onChange={handleChange}
          className={styles.text_area}
          placeholder="enter your reason here ..."
          autoComplete="true"
        ></textarea>
      </div>

      <div
        className={isSuggestionShowing ? styles.suggestion : styles.suggestion1}
      >
        <div className={styles.suggestion_option}>
          <FaArrowRight
            className={styles.arrow_back}
            onClick={() => {
              setIsSuggestionShowing(!isSuggestionShowing);
            }}
          />
          <p>reason suggestions</p>
        </div>
        <div className={styles.scrollBar}>
          {suggestions.map((data, index) => (
            <div
              key={index}
              className={styles.suggestion_inner_div}
              onClick={(e) => {
                handleSuggestionChange(e, data);
              }}
            >
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
