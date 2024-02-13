import React, { useState } from "react";
import styles from "./styles/assessmentOfLoss.module.css";
import { FaAngleUp, FaTrash, FaEdit, FaPlusCircle } from "react-icons/fa";

export default function AssessmentOfLoss({ onClickFun }) {
  const [page, setPage] = useState(0);
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.title}>
          <p>Assessment Loss</p>
          <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
        </div>
        <button
          className={page === 0 ? styles.intro_btn : styles.intro_btn1}
          onClick={() => {
            setPage(0);
          }}
        >
          Description
        </button>
        <p className={styles.add_attach}>Assessment Table</p>
        <div
          className={page === 1 ? styles.tables : styles.tables1}
          onClick={() => {
            setPage(1);
          }}
        >
          <p>item 1</p>
          <div className={styles.logos}>
            <FaPlusCircle className={styles.logo1} />
            <FaEdit className={styles.logo2} />
            <FaTrash className={styles.logo3} />
          </div>
        </div>
        <div
          className={page === 2 ? styles.tables : styles.tables1}
          onClick={() => {
            setPage(2);
          }}
        >
          <p>item 2</p>
          <div className={styles.logos}>
            <FaPlusCircle className={styles.logo1} />
            <FaEdit className={styles.logo2} />
            <FaTrash className={styles.logo3} />
          </div>
        </div>
        <button className={styles.add_btn1}>Add Item</button>
        <p className={styles.add_attach}>notes</p>
        <div
          className={page === 3 ? styles.tables : styles.tables1}
          onClick={() => {
            setPage(3);
          }}
        >
          <p>a</p>
          <div className={styles.logos}>
            <FaPlusCircle className={styles.logo1} />
            <FaEdit className={styles.logo2} />
            <FaTrash className={styles.logo3} />
          </div>
        </div>
        <button className={styles.add_btn1}>Add Note</button>
      </div>
      {page === 0 ? (
        <div className={styles.outer_div2}>
          <p className={styles.des}>Assessment of Loss Description</p>
          <textarea
            className={styles.intro_textarea}
            placeholder="Assessment of Loss Description ..."
          ></textarea>
        </div>
      ) : page === 1 ? (
        <div className={styles.outer_div3}>
          <p className={styles.des}>Add Item (1)</p>
          <p className={styles.des_title}>Description</p>
          <textarea
            className={styles.dec_textarea}
            placeholder="description..."
          ></textarea>{" "}
          <p className={styles.des_title}>claim , Rs Exclusive of VAT</p>
          <input className={styles.claim_input} placeholder="claim..."></input>
          <div>
            <div>
              <button className={styles.add_btn}>Add</button>
              <button className={styles.delete_btn}>Delete</button>
            </div>
          </div>
        </div>
      ) : page === 2 ? (
        <div className={styles.outer_div3}>
          <p className={styles.des}>Add Item (2)</p>
          <p className={styles.des_title}>Description</p>
          <textarea
            className={styles.dec_textarea}
            placeholder="description..."
          ></textarea>{" "}
          <p className={styles.des_title}>claim , Rs Exclusive of VAT</p>
          <input className={styles.claim_input} placeholder="claim..."></input>
          <div>
            <div>
              <button className={styles.add_btn}>Add</button>
              <button className={styles.delete_btn}>Delete</button>
            </div>
          </div>
        </div>
      ) : page === 3 ? (
        <div className={styles.outer_div3}>
          <p className={styles.des}>Add Note</p>
          <p className={styles.des_title}>Ref</p>
          <input className={styles.claim_input} placeholder="ref..."></input>
          <p className={styles.des_title}>Note</p>
          <textarea
            className={styles.dec_textarea}
            placeholder="note..."
          ></textarea>
          <div>
            <div>
              <button className={styles.add_btn}>Add</button>
              <button className={styles.delete_btn}>Delete</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
