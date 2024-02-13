import React, { useState } from "react";
import styles from "./styles/conclusion.module.css";
import { FaAngleUp, FaTrash, FaEdit, FaPlusCircle } from "react-icons/fa";

export default function Conclusion({ onClickFun }) {
  const [page, setPage] = useState(0);
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.title}>
          <p>Conclusion</p>
          <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
        </div>
        <button
          className={page === 0 ? styles.intro_btn : styles.intro_btn1}
          onClick={() => {
            setPage(0);
          }}
        >
          Conclusion Description
        </button>
        <p className={styles.add_attach}>Attachments</p>
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
        <div
          className={page === 3 ? styles.tables : styles.tables1}
          onClick={() => {
            setPage(3);
          }}
        >
          <p>item 3</p>
          <div className={styles.logos}>
            <FaPlusCircle className={styles.logo1} />
            <FaEdit className={styles.logo2} />
            <FaTrash className={styles.logo3} />
          </div>
        </div>
        <button className={styles.add_btn1}>Add Attachment</button>
        {/* <p className={styles.add_attach}>notes</p> */}
        {/* <div
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
        <button className={styles.add_btn1}>Add Note</button> */}
      </div>
      {page === 0 ? (
        <div className={styles.outer_div2}>
          <p className={styles.des}>Conclusion Description</p>
          <textarea
            className={styles.intro_textarea}
            placeholder="conclusion description ..."
          ></textarea>
        </div>
      ) : page === 1 ? (
        <div className={styles.items}>
          <p className={styles.add_attach_title}>Add Attachment (1)</p>
          <p className={styles.des}>Title</p>
          <input
            className={styles.client_input}
            placeholder="title ..."
          ></input>
          <p className={styles.des}>Attachment</p>
          <div className={styles.img}></div>
          <div>
            <div>
              <button className={styles.add_btn}>Add</button>
              <button className={styles.delete_btn}>Delete</button>
            </div>
          </div>
        </div>
      ) : page === 2 ? (
        <div className={styles.items}>
          <p className={styles.add_attach_title}>Add Attachment (2)</p>
          <p className={styles.des}>Title</p>
          <input
            className={styles.client_input}
            placeholder="title ..."
          ></input>
          <p className={styles.des}>Attachment</p>
          <div className={styles.img}></div>
          <div>
            <div>
              <button className={styles.add_btn}>Add</button>
              <button className={styles.delete_btn}>Delete</button>
            </div>
          </div>
        </div>
      ) : page === 3 ? (
        <div className={styles.items}>
          <p className={styles.add_attach_title}>Add Attachment (3)</p>
          <p className={styles.des}>Title</p>
          <input
            className={styles.client_input}
            placeholder="title ..."
          ></input>
          <p className={styles.des}>Attachment</p>
          <div className={styles.img}></div>
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
