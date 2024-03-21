import React, { use, useState } from "react";
import styles from "./styles/notesSection.module.css";
import {
  FaAngleUp,
  FaTrash,
  FaEdit,
  FaPlusCircle,
  FaPlus,
} from "react-icons/fa";

export default function NotesSection({
  assessmentLossDes,
  setAssessmentLossDes,
  assessmentLossTable,
  setAssessmentLossTable,
  assessmentLossNotes,
  setAssessmentLossNotes,
  assessmentLossFields,
  setAssessmentLossFields,
  onClickFun,
}) {
  const [tablePage, setTablePage] = useState(0);
  const [curentNotePage, setCurentNotePage] = useState(0);
  const [notePage, setNotePage] = useState(0);
  const [isShowingDes, setIsShowingDes] = useState(true);
  const [isShowingTable, setIsShowingTable] = useState(false);
  const [isUploadingTable, setIsUploadingTable] = useState(false);
  const [isShowingNote, setIsShowingNote] = useState(false);
  const [isUploadingNote, setIsUploadingNote] = useState(true);
  const [isNewFieldShowing, setIsNewFieldShowing] = useState(false);
  const [des, setDes] = useState({
    des: "",
    claimAm: "",
    assessAm: "",
  });

  const [addField, setAddField] = useState({ name: "" });
  const [addFieldData, setAddFieldData] = useState({
    field0: "",
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });

  const handleAddFieldChange = (event) => {
    setAddFieldData({
      ...addFieldData,
      [event.target.name]: event.target.value,
    });
  };
  const handleShowingChange = (event, id) => {
    const clone = [...assessmentLossTable];
    const obj = clone[id];

    obj[`${event.target.name}`] = event.target.value;
    clone[id] = obj;
    setAssessmentLossTable([...clone]);
  };
  const handleShowingNoteChange = (event, id) => {
    const clone = [...assessmentLossNotes];
    const obj = clone[id];

    obj[`${event.target.name}`] = event.target.value;
    clone[id] = obj;
    setAssessmentLossNotes([...clone]);
  };
  const handleChange = (event) => {
    setDes({
      ...des,
      [event.target.name]: event.target.value,
    });
  };
  const handleAddChange = (event) => {
    setAddField({
      ...addField,
      [event.target.name]: event.target.value,
    });
  };
  const [ref, setRef] = useState({
    ref: "",
    note: "",
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
          <p>Notes Section</p>

          <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
        </div>

        <p className={styles.add_attach}>notes</p>
        <div>
          <div className={styles.note_div}>
            {assessmentLossNotes.length != 0 ? (
              <div>
                {assessmentLossNotes.map((data, index) => (
                  <div
                    key={index}
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
                    <p>note {index + 1}</p>
                    <div className={styles.logos}>
                      {/* <FaPlusCircle className={styles.logo1} />
                <FaEdit className={styles.logo2} /> */}
                      <FaTrash
                        className={styles.logo3}
                        onClick={() => {
                          const subarr1 = assessmentLossNotes.slice(0, index);
                          const subarr2 = assessmentLossNotes.slice(
                            index + 1,
                            assessmentLossNotes.length
                          );
                          const newData = [...subarr1, ...subarr2];
                          setAssessmentLossNotes(newData);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p
                style={{ fontSize: "12.2px", marginTop: "5px", color: "gray" }}
              >
                no data available click Add Note to fill
              </p>
            )}
          </div>
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
      {isShowingNote ? (
        <div className={styles.outer_div3}>
          <p className={styles.des}>Note {curentNotePage + 1}</p>
          <p className={styles.des_title}>Ref</p>
          <input
            onChange={(e) => {
              handleShowingNoteChange(e, curentNotePage);
            }}
            name="ref"
            className={styles.claim_input}
            value={
              assessmentLossNotes.length != 0
                ? assessmentLossNotes[curentNotePage] &&
                  assessmentLossNotes[curentNotePage].ref
                : ""
            }
            placeholder="ref..."
          ></input>
          <p className={styles.des_title}>Note</p>
          <textarea
            onChange={(e) => {
              handleShowingNoteChange(e, curentNotePage);
            }}
            name="note"
            value={
              assessmentLossNotes[curentNotePage] &&
              assessmentLossNotes[curentNotePage].note
            }
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
              {/* <button className={styles.delete_btn}>Delete</button> */}
            </div>
          </div>
        </div>
      ) : null}

      <div>
        <div
          className={
            isNewFieldShowing ? styles.add_field_name : styles.add_field_name1
          }
        >
          <p>Add New Field</p>
          <input
            value={addField.name}
            name="name"
            onChange={handleAddChange}
            placeholder="new field name"
          ></input>
          <button
            onClick={() => {
              if (assessmentLossFields.length < 5) {
                console.log(assessmentLossFields);
                const obj = { name: addField.name };
                const newdata = assessmentLossFields.concat(obj);
                setAssessmentLossFields(newdata);
              }
            }}
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
}
