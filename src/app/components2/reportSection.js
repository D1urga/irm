import React, { use, useState } from "react";
import styles from "./styles/reportSection.module.css";
import {
  FaAngleUp,
  FaTrash,
  FaEdit,
  FaPlusCircle,
  FaPlus,
  FaTimesCircle,
} from "react-icons/fa";

export default function ReportSection({
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
  const [isUploadingTable, setIsUploadingTable] = useState(true);
  const [isShowingNote, setIsShowingNote] = useState(false);
  const [isUploadingNote, setIsUploadingNote] = useState(false);
  const [isNewFieldShowing, setIsNewFieldShowing] = useState(false);
  const [des, setDes] = useState({
    des: "",
    report: "",
    action: "",
    replacement: "",
    depreciation: "",
    assessment: "",
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
          <p>Report Section</p>
          <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
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
      </div>
      {isShowingTable ? (
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
          <p className={styles.des_title}>Report</p>
          <div>
            <textarea
              value={
                assessmentLossTable.length != 0
                  ? assessmentLossTable[tablePage] &&
                    assessmentLossTable[tablePage].report
                  : ""
              }
              onChange={(e) => {
                handleShowingChange(e, tablePage);
              }}
              name="report"
              className={styles.dec_textarea}
              placeholder="report..."
            ></textarea>
          </div>
          <p className={styles.des_title}>Action</p>
          <div>
            <input
              className={styles.claim_input}
              onChange={(e) => {
                handleShowingChange(e, tablePage);
              }}
              name="action"
              value={
                assessmentLossTable.length != 0
                  ? assessmentLossTable[tablePage] &&
                    assessmentLossTable[tablePage].action
                  : ""
              }
              placeholder="action..."
            ></input>
          </div>
          <p className={styles.des_title}>Replacement cost (Rs)</p>
          <div>
            <input
              type="number"
              className={styles.claim_input}
              onChange={(e) => {
                handleShowingChange(e, tablePage);
              }}
              name="replacement"
              value={
                assessmentLossTable.length != 0
                  ? assessmentLossTable[tablePage] &&
                    assessmentLossTable[tablePage].replacement
                  : ""
              }
              placeholder="replacement..."
            ></input>
          </div>
          <p className={styles.des_title}>Depreciation cost (Rs)</p>
          <div>
            <input
              type="number"
              className={styles.claim_input}
              onChange={(e) => {
                handleShowingChange(e, tablePage);
              }}
              name="depreciation"
              value={
                assessmentLossTable.length != 0
                  ? assessmentLossTable[tablePage] &&
                    assessmentLossTable[tablePage].depreciation
                  : ""
              }
              placeholder="depreciation..."
            ></input>
          </div>
          <p className={styles.des_title}>Assessment cost (Rs)</p>
          <div>
            <input
              type="number"
              className={styles.claim_input}
              onChange={(e) => {
                handleShowingChange(e, tablePage);
              }}
              name="assessment"
              value={
                assessmentLossTable.length != 0
                  ? assessmentLossTable[tablePage] &&
                    assessmentLossTable[tablePage].assessment
                  : ""
              }
              placeholder="assessment..."
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
              onChange={handleChange}
              className={styles.dec_textarea}
              placeholder="description..."
            ></textarea>
          </div>
          <p className={styles.des_title}>Report</p>
          <div>
            <textarea
              value={des.report}
              name="report"
              onChange={handleChange}
              className={styles.dec_textarea}
              placeholder="report..."
            ></textarea>
          </div>
          <p className={styles.des_title}>Action</p>
          <div>
            <input
              className={styles.claim_input}
              value={des.action}
              name="action"
              onChange={handleChange}
              placeholder="action..."
            ></input>
          </div>
          <p className={styles.des_title}>Replacement Cost (Rs)</p>
          <div>
            <input
              type="number"
              className={styles.claim_input}
              value={des.replacement}
              name="replacement"
              onChange={handleChange}
              placeholder="replacement..."
            ></input>
          </div>
          <p className={styles.des_title}>Depreciation Cost (Rs)</p>
          <div>
            <input
              type="number"
              className={styles.claim_input}
              value={des.depreciation}
              name="depreciation"
              onChange={handleChange}
              placeholder="depreciation..."
            ></input>
          </div>
          <p className={styles.des_title}>Assessment Cost (Rs)</p>
          <div>
            <input
              type="number"
              className={styles.claim_input}
              value={des.assessment}
              name="assessment"
              onChange={handleChange}
              placeholder="assessment..."
            ></input>
          </div>
          {assessmentLossFields.map((data, index) => (
            <div key={index}>
              <p className={styles.des_title}>{data.name}</p>
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
                    report: des.report,
                    action: des.action,
                    replacement: des.replacement,
                    depreciation: des.depreciation,
                    assessment: des.assessment,
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
              {/* <button className={styles.delete_btn}>Delete</button> */}
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
      ) : null}

      {/* <div>
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
      </div> */}
    </div>
  );
}
