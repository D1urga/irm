import React, { use, useState } from "react";
import styles from "./styles/assessmentOfLoss.module.css";
import { FaAngleUp, FaTrash, FaEdit, FaPlusCircle } from "react-icons/fa";

export default function AssessmentOfLoss({
  assessmentLossDes,
  setAssessmentLossDes,
  assessmentLossTable,
  setAssessmentLossTable,
  assessmentLossNotes,
  setAssessmentLossNotes,
  onClickFun,
}) {
  const [tablePage, setTablePage] = useState(0);
  const [curentNotePage, setCurentNotePage] = useState(0);
  const [notePage, setNotePage] = useState(0);
  const [isShowingDes, setIsShowingDes] = useState(true);
  const [isShowingTable, setIsShowingTable] = useState(false);
  const [isUploadingTable, setIsUploadingTable] = useState(false);
  const [isShowingNote, setIsShowingNote] = useState(false);
  const [isUploadingNote, setIsUploadingNote] = useState(false);
  const [des, setDes] = useState({
    des: "",
    claimAm: "",
  });
  const handleChange = (event) => {
    setDes({
      ...des,
      [event.target.name]: event.target.value,
    });
  };
  const [ref, setRef] = useState({
    ref: "asjvasdfasda",
    note: "fahsfvashd",
  });
  const handleRefChange = (event) => {
    setRef({
      ...ref,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.title}>
          <p>Assessment Loss</p>
          <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
        </div>
        <button
          className={isShowingDes ? styles.intro_btn : styles.intro_btn1}
          onClick={() => {
            setIsUploadingNote(false);
            setIsUploadingTable(false);
            setIsShowingDes(true);
            setIsShowingNote(false);
            setIsShowingTable(false);
          }}
        >
          Description
        </button>
        <p className={styles.add_attach}>Assessment Table</p>
        <div className={styles.assessment_loss_table}>
          {assessmentLossTable.map((data, index) => (
            <div
              className={isShowingTable ? styles.tables : styles.tables1}
              onClick={() => {
                setIsUploadingNote(false);
                setIsUploadingTable(false);
                setIsShowingDes(false);
                setIsShowingNote(false);
                setIsShowingTable(true);
                setTablePage(index);
              }}
            >
              <p>item {index}</p>
              <div className={styles.logos}>
                <FaPlusCircle className={styles.logo1} />
                <FaEdit className={styles.logo2} />
                <FaTrash className={styles.logo3} />
              </div>
            </div>
          ))}
        </div>
        <button
          className={styles.add_btn1}
          onClick={() => {
            setIsUploadingNote(false);
            setIsUploadingTable(true);
            setIsShowingDes(false);
            setIsShowingNote(false);
            setIsShowingTable(false);
          }}
        >
          Add Item
        </button>
        <p className={styles.add_attach}>notes</p>
        <div className={styles.note_div}>
          {assessmentLossNotes.map((data, index) => (
            <div
              className={isShowingNote ? styles.tables : styles.tables1}
              onClick={() => {
                setIsUploadingNote(false);
                setIsUploadingTable(false);
                setIsShowingDes(false);
                setIsShowingNote(true);
                setIsShowingTable(false);
                setCurentNotePage(index);
              }}
            >
              <p>note {index}</p>
              <div className={styles.logos}>
                <FaPlusCircle className={styles.logo1} />
                <FaEdit className={styles.logo2} />
                <FaTrash className={styles.logo3} />
              </div>
            </div>
          ))}
        </div>
        <button
          className={styles.add_btn1}
          onClick={() => {
            setIsUploadingNote(true);
            setIsUploadingTable(false);
            setIsShowingDes(false);
            setIsShowingNote(false);
            setIsShowingTable(false);
          }}
        >
          Add Note
        </button>
      </div>
      {isShowingDes ? (
        <div className={styles.outer_div2}>
          <p className={styles.des}>Assessment of Loss Description</p>
          <textarea
            className={styles.intro_textarea}
            placeholder="Assessment of Loss Description ..."
          ></textarea>
        </div>
      ) : isShowingTable ? (
        <div className={styles.outer_div3}>
          <p className={styles.des}>Add Item (1)</p>
          <p className={styles.des_title}>Description</p>
          <textarea
            value={assessmentLossTable[tablePage].description}
            className={styles.dec_textarea}
            placeholder="description..."
          ></textarea>{" "}
          <p className={styles.des_title}>claim , Rs Exclusive of VAT</p>
          <input
            className={styles.claim_input}
            value={assessmentLossTable[tablePage].claimAmout}
            placeholder="claim..."
          ></input>
          {/* <div>
            <div>
              <button className={styles.add_btn}>Add</button>
              <button className={styles.delete_btn}>Delete</button>
            </div>
          </div> */}
        </div>
      ) : isUploadingTable ? (
        <div className={styles.outer_div3}>
          <p className={styles.des}>Add Item (1)</p>
          <p className={styles.des_title}>Description</p>
          <textarea
            value={des.des}
            name="des"
            onChange={handleChange}
            className={styles.dec_textarea}
            placeholder="description..."
          ></textarea>{" "}
          <p className={styles.des_title}>claim , Rs Exclusive of VAT</p>
          <input
            className={styles.claim_input}
            value={des.claimAm}
            name="claimAm"
            onChange={handleChange}
            placeholder="claim..."
          ></input>
          <div>
            <div>
              <button
                className={styles.add_btn}
                onClick={() => {
                  const obj = { description: des.des, claimAmout: des.claimAm };
                  const newData = assessmentLossTable.concat(obj);
                  setAssessmentLossTable(newData);
                }}
              >
                Add
              </button>
              <button className={styles.delete_btn}>Delete</button>
            </div>
          </div>
        </div>
      ) : isShowingNote ? (
        <div className={styles.outer_div3}>
          <p className={styles.des}>Add Note</p>
          <p className={styles.des_title}>Ref</p>
          <input
            className={styles.claim_input}
            value={assessmentLossNotes[curentNotePage].ref}
            placeholder="ref..."
          ></input>
          <p className={styles.des_title}>Note</p>
          <textarea
            value={assessmentLossNotes[curentNotePage].note}
            className={styles.dec_textarea}
            placeholder="note..."
          ></textarea>
          {/* <div>
            <div>
              <button className={styles.add_btn}>Add</button>
              <button className={styles.delete_btn}>Delete</button>
            </div>
          </div> */}
        </div>
      ) : isUploadingNote ? (
        <div className={styles.outer_div3}>
          <p className={styles.des}>Add Note</p>
          <p className={styles.des_title}>Ref</p>
          <input
            className={styles.claim_input}
            value={ref.ref}
            name="ref"
            onChange={handleRefChange}
            placeholder="ref..."
          ></input>
          <p className={styles.des_title}>Note</p>
          <textarea
            className={styles.dec_textarea}
            value={ref.note}
            name="note"
            onChange={handleRefChange}
            placeholder="note..."
          ></textarea>
          <div>
            <div>
              <button
                className={styles.add_btn}
                onClick={() => {
                  const obj = { ref: ref.ref, note: ref.note };
                  const newData = assessmentLossNotes.concat(obj);
                  setAssessmentLossNotes(newData);
                }}
              >
                Add
              </button>
              <button className={styles.delete_btn}>Delete</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
