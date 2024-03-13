import React from "react";
import styles from "./styles/policyparticulars.module.css";
import {
  FaAngleUp,
  FaPlusCircle,
  FaTimesCircle,
  FaTrash,
} from "react-icons/fa";
import { useState } from "react";

export default function PolicyParticulars({
  addFieldData,
  setAddFieldData,
  policyParticularsFields,
  setPolicyParticularsFields,
  policyParticularsData,
  setPolicyParticularsData,
  onClickFun,
}) {
  const [isNewFieldShowing, setIsNewFieldShowing] = useState(false);
  const handleAddFieldChange = (event) => {
    setAddFieldData({
      ...addFieldData,
      [event.target.name]: event.target.value,
    });
  };

  const [addField, setAddField] = useState({ name: "" });
  const handleAddChange = (event) => {
    setAddField({
      ...addField,
      [event.target.name]: event.target.value,
    });
  };
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
          <div>
            <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
            <FaPlusCircle
              style={{ color: "gray", marginLeft: "30px" }}
              onClick={() => {
                setIsNewFieldShowing(!isNewFieldShowing);
              }}
            />
          </div>
        </div>
        <div className={styles.scroll_div}>
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
          {policyParticularsFields.map((data, index) => (
            <div key={index}>
              <div className={styles.icon_div1}>
                <p className={styles.des_title}>{data.name}</p>
                <FaTrash
                  className={styles.del}
                  onClick={() => {
                    const subarr1 = policyParticularsFields.slice(0, index);
                    const subarr2 = policyParticularsFields.slice(
                      index + 1,
                      policyParticularsFields.length
                    );
                    const newData = [...subarr1, ...subarr2];
                    setPolicyParticularsFields(newData);
                  }}
                />
              </div>
              <textarea
                value={addFieldData[`field${index}`]}
                onChange={handleAddFieldChange}
                name={`field${index}`}
                className={styles.add_textarea}
                placeholder={data.name}
              ></textarea>
            </div>
          ))}
          <div>
            <div
              className={
                isNewFieldShowing
                  ? styles.add_field_name
                  : styles.add_field_name1
              }
            >
              <div className={styles.icon_div}>
                <p>Add New Field</p>
                <FaTimesCircle
                  onClick={() => {
                    setIsNewFieldShowing(!isNewFieldShowing);
                  }}
                />
              </div>
              <input
                value={addField.name}
                name="name"
                onChange={handleAddChange}
                placeholder="new field name"
              ></input>
              <button
                onClick={() => {
                  if (policyParticularsFields.length < 5) {
                    console.log(policyParticularsFields);
                    const obj = { name: addField.name };
                    const newdata = policyParticularsFields.concat(obj);
                    setPolicyParticularsFields(newdata);
                  }
                }}
              >
                add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
