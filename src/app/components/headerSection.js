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
    "Burglary at Jade House Building, Port Louis- Mr and Mrs Voon Chong Fon sing",
    "Burglary at Jade House Building, Port Louis- Mr and Mrs Voon Chong Fon sing",
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
          Reason{" "}
          <span style={{ fontSize: "12px", color: "blue" }}>
            (see suggestions)
          </span>
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
