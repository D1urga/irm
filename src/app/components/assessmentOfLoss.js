import React, { use, useState } from "react";
import styles from "./styles/assessmentOfLoss.module.css";
import {
  FaAngleUp,
  FaTrash,
  FaEdit,
  FaPlusCircle,
  FaPlus,
  FaCross,
  FaCut,
  FaTimesCircle,
} from "react-icons/fa";

export default function AssessmentOfLoss({
  assessmentLossDescription,
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
  const [isUploadingNote, setIsUploadingNote] = useState(false);
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
    setAssessmentLossDes({
      ...assessmentLossDes,
      [event.target.name]: event.target.value,
    });
  };
  const handleChange1 = (event) => {
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
        <div>
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
        </div>
        <p className={styles.add_attach}>Assessment Table</p>
        <div>
          <div className={styles.assessment_loss_table}>
            {assessmentLossTable.length != 0 ? (
              <div>
                {assessmentLossTable.map((data, index) => (
                  <div
                    key={index}
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
                    <p>item {index + 1}</p>
                    <div className={styles.logos}>
                      {/* <FaPlusCircle className={styles.logo1} />
                <FaEdit className={styles.logo2} /> */}
                      <FaTrash
                        className={styles.logo3}
                        onClick={() => {
                          const subarr1 = assessmentLossTable.slice(0, index);
                          const subarr2 = assessmentLossTable.slice(
                            index + 1,
                            assessmentLossTable.length
                          );
                          const newData = [...subarr1, ...subarr2];
                          setAssessmentLossTable(newData);
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
                no data available click Add Item to fill
              </p>
            )}
          </div>
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
      {isShowingDes ? (
        <div className={styles.outer_div2}>
          <p className={styles.des}>Assessment of Loss Description</p>
          <textarea
            value={assessmentLossDes.des}
            onChange={handleChange}
            name="des"
            className={styles.intro_textarea}
            placeholder="Assessment of Loss Description ..."
          ></textarea>
        </div>
      ) : isShowingTable ? (
        <div className={styles.outer_div3}>
          <p className={styles.des}>Item {tablePage + 1}</p>
          <p className={styles.des_title}>Description</p>
          <div>
            <textarea
              value={
                assessmentLossTable.length != 0
                  ? assessmentLossTable[tablePage] &&
                    assessmentLossTable[tablePage].description
                  : ""
              }
              onChange={(e) => {
                handleShowingChange(e, tablePage);
              }}
              name="description"
              className={styles.dec_textarea}
              placeholder="description..."
            ></textarea>
          </div>
          <p className={styles.des_title}>claim Rs</p>
          <div>
            <input
              type="number"
              className={styles.claim_input}
              onChange={(e) => {
                handleShowingChange(e, tablePage);
              }}
              name="claimAmout"
              value={
                assessmentLossTable.length != 0
                  ? assessmentLossTable[tablePage] &&
                    assessmentLossTable[tablePage].claimAmout
                  : ""
              }
              placeholder="claim..."
            ></input>
          </div>
          <p className={styles.des_title}>assessment Rs</p>
          <div>
            <input
              type="number"
              onChange={(e) => {
                handleShowingChange(e, tablePage);
              }}
              name="assessmentAmount"
              className={styles.claim_input}
              value={
                assessmentLossTable.length != 0
                  ? assessmentLossTable[tablePage] &&
                    assessmentLossTable[tablePage].assessmentAmount
                  : ""
              }
              placeholder="assessmentAmount..."
            ></input>
          </div>
          {assessmentLossFields.map((data, index) => (
            <div key={index}>
              <p className={styles.des_title}>{data.name}</p>
              <textarea
                value={
                  assessmentLossTable.length != 0
                    ? assessmentLossTable[tablePage] &&
                      assessmentLossTable[tablePage][`field${index}`]
                    : ""
                }
                onChange={(e) => {
                  handleShowingChange(e, tablePage);
                }}
                name={`field${index}`}
                className={styles.add_textarea}
                placeholder={data.name}
              ></textarea>
            </div>
          ))}
          {/* <div>
            <div>
              <button className={styles.add_btn}>Add</button>
              <button className={styles.delete_btn}>Delete</button>
            </div>
          </div> */}
        </div>
      ) : isUploadingTable ? (
        <div className={styles.outer_div3}>
          <div className={styles.more_fields}>
            <p className={styles.des}>Add Item </p>
            <FaPlusCircle
              className={styles.add}
              onClick={() => {
                setIsNewFieldShowing(!isNewFieldShowing);
              }}
            />
          </div>
          <p className={styles.des_title}>Description</p>
          <div>
            <textarea
              value={des.des}
              name="des"
              onChange={handleChange1}
              className={styles.dec_textarea}
              placeholder="description..."
            ></textarea>
          </div>
          <p className={styles.des_title}>claim Rs</p>
          <div>
            <input
              type="number"
              className={styles.claim_input}
              value={des.claimAm}
              name="claimAm"
              onChange={handleChange1}
              placeholder="claim..."
            ></input>
          </div>
          <p className={styles.des_title}>Assessment RS</p>
          <div>
            <input
              type="number"
              className={styles.claim_input}
              value={des.assessAm}
              name="assessAm"
              onChange={handleChange1}
              placeholder="claim..."
            ></input>
          </div>
          {assessmentLossFields.map((data, index) => (
            <div key={index}>
              <div className={styles.icon_div1}>
                <p className={styles.des_title}>{data.name}</p>
                <FaTrash
                  className={styles.del}
                  onClick={() => {
                    const subarr1 = assessmentLossFields.slice(0, index);
                    const subarr2 = assessmentLossFields.slice(
                      index + 1,
                      assessmentLossFields.length
                    );
                    const newData = [...subarr1, ...subarr2];
                    setAssessmentLossFields(newData);
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
            <div>
              <button
                className={styles.add_btn}
                onClick={() => {
                  const obj = {
                    description: des.des,
                    claimAmout: des.claimAm,
                    assessmentAmount: des.assessAm,
                    field0: addFieldData.field0,
                    field1: addFieldData.field1,
                    field2: addFieldData.field2,
                    field3: addFieldData.field3,
                    field4: addFieldData.field4,
                  };
                  console.log(assessmentLossTable);
                  const newData = assessmentLossTable.concat(obj);
                  setAssessmentLossTable(newData);
                }}
              >
                Add
              </button>
              <button className={styles.delete_btn}>Delete</button>
            </div>
          </div>
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
      ) : isShowingNote ? (
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
              assessmentLossNotes.length != 0
                ? assessmentLossNotes[curentNotePage] &&
                  assessmentLossNotes[curentNotePage].note
                : ""
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
              <button className={styles.delete_btn}>Delete</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
