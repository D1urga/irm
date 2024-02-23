import React from "react";
import styles from "./styles/policyparticulars.module.css";
import { FaAngleUp } from "react-icons/fa";

export default function PolicyParticulars({
  policyParticularsData,
  setPolicyParticularsData,
  onClickFun,
}) {
  const handleChange = (event) => {
    setPolicyParticularsData({
      ...policyParticularsData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className={styles.main_div}>
      <div className={styles.outer_div}>
        <div className={styles.title}>
          <p>Policy Particulars</p>
          <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
        </div>
        <p className={styles.topics}>The Insurer</p>
        <div>
          {" "}
          <input
            className={styles.inputs}
            value={policyParticularsData.insurer}
            name="insurer"
            onChange={handleChange}
            placeholder="the insurer ..."
          ></input>
        </div>
        <p className={styles.topics}>The Insured</p>
        <div>
          {" "}
          <input
            className={styles.inputs}
            value={policyParticularsData.insured}
            name="insured"
            onChange={handleChange}
            placeholder="the insured ..."
          ></input>
        </div>
        <p className={styles.topics}>Types of Policy</p>
        <div>
          {" "}
          <input
            className={styles.inputs}
            value={policyParticularsData.typesOfPolicy}
            name="typesOfPolicy"
            onChange={handleChange}
            placeholder="types of policy ..."
          ></input>
        </div>
        <p className={styles.topics}>Policy Number</p>
        <div>
          <input
            className={styles.inputs}
            value={policyParticularsData.policyNumber}
            name="policyNumber"
            onChange={handleChange}
            placeholder="policy number ..."
          ></input>
        </div>
        <p className={styles.topics}>Period of Insurance</p>
        <div>
          {" "}
          <input
            className={styles.inputs}
            value={policyParticularsData.periodOfInsurance}
            name="periodOfInsurance"
            onChange={handleChange}
            placeholder="period of insurance ..."
          ></input>
        </div>
        <p className={styles.topics}>Policy Excess</p>
        <div>
          {" "}
          <textarea
            className={styles.policy_excess}
            value={policyParticularsData.policyExcess}
            name="policyExcess"
            onChange={handleChange}
            placeholder="policy excess ..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}
