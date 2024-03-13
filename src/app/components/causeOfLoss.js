import React, { useState } from "react";
import styles from "./styles/causeOfLoss.module.css";
import { FaAngleUp, FaArrowRight } from "react-icons/fa";

export default function CauseOfLoss({
  causeOfLoss,
  setCauseOfLoss,
  onClickFun,
}) {
  const [isSuggestionShowing, setIsSuggestionShowing] = useState(false);
  const handleChange = (event) => {
    setCauseOfLoss({
      ...causeOfLoss,
      [event.target.name]: event.target.value,
    });
  };
  const handleSuggestionChange = (event, val) => {
    setCauseOfLoss({
      ...causeOfLoss,
      causeOfLoss: val,
    });
  };
  const suggestions = [
    "Based on our observations and declarations of Insured on claim form, we tend to believe that the declared damages are of malicious nature, caused by unidentified individuals, in view of stealing copper pipes fittings and wires from Insured premises.However, there has been no forcible entry/ exit from Insured’s premises during this incidence – as mentioned above.",
  ];
  return (
    <div className={styles.outer_div}>
      <div className={styles.title}>
        <p>Cause of Loss</p>
        <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
      </div>
      <p
        style={{ cursor: "pointer" }}
        className={styles.des}
        onClick={() => {
          setIsSuggestionShowing(!isSuggestionShowing);
        }}
      >
        Description{" "}
        <span style={{ fontSize: "12px", color: "blue" }}>
          (see suggestions)
        </span>
      </p>
      <textarea
        value={causeOfLoss.causeOfLoss}
        onChange={handleChange}
        name="causeOfLoss"
        className={styles.intro_textarea}
        placeholder="description ..."
      ></textarea>
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
