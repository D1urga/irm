import React from "react";
import styles from "./styles/projectDescription.module.css";
import { FaAngleUp, FaEdit, FaPlusCircle, FaTrash } from "react-icons/fa";
import { useState } from "react";

export default function ProjectDescription({
  projectDescriptionData,
  setProjectDescriptionData,
  projectDescriptionTable,
  setProjectDescriptionTable,
  onClickFun,
}) {
  const [page, setPage] = useState(0);
  const [isDescriptionShowing, setIsDescriptionShowing] = useState(true);
  const [isDescriptionTableShowing, setIsDescriptionTableShowing] =
    useState(false);
  const [isDescriptionTableUploading, setIsDescriptionTableUploading] =
    useState(false);

  const [projectDescriptionTableData, setProjectDescriptionTableData] =
    useState({
      status: "",
      author: "",
      reviewer: "",
      distribution: "",
      mode: "",
      date: "",
    });
  const handleChange = (event) => {
    setProjectDescriptionTableData({
      ...projectDescriptionTableData,
      [event.target.name]: event.target.value,
    });
  };
  const handleDataChange = (event) => {
    setProjectDescriptionData({
      ...projectDescriptionData,
      [event.target.name]: event.target.value,
    });
  };

  const handleShowingChange = (event, id) => {
    const clone = [...projectDescriptionTable];
    const obj = clone[id];

    obj[`${event.target.name}`] = event.target.value;
    clone[id] = obj;
    setProjectDescriptionTable([...clone]);
  };

  return (
    <div className={styles.main_div}>
      <div className={styles.outer_div}>
        <div className={styles.left}>
          <div className={styles.title}>
            <p>Project Description</p>
            <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
          </div>
          <button
            className={
              setIsDescriptionShowing
                ? styles.project_info_button
                : styles.project_info_button1
            }
            onClick={() => {
              setIsDescriptionShowing(true);
              setIsDescriptionTableShowing(false);
              setIsDescriptionTableUploading(false);
            }}
          >
            Project Info
          </button>
          <p className={styles.issue_table}>Issues Table</p>
          <div className={styles.description_table_div}>
            {projectDescriptionTable.length != 0 ? (
              <div>
                {projectDescriptionTable.map((data, index) => (
                  <div key={index}>
                    <div
                      className={
                        setIsDescriptionTableShowing
                          ? styles.tables
                          : styles.tables1
                      }
                      onClick={() => {
                        setIsDescriptionShowing(false);
                        setIsDescriptionTableShowing(true);
                        setIsDescriptionTableUploading(false);
                        setPage(index);
                      }}
                    >
                      <p>item {index + 1}</p>
                      <div className={styles.logos}>
                        {/* <FaPlusCircle className={styles.logo1} />
                    <FaEdit className={styles.logo2} /> */}
                        <FaTrash
                          className={styles.logo3}
                          // onClick={() => {
                          //   // const newData = projectDescriptionTable.un();
                          //   const halfBeforeTheUnwantedElement =
                          //     projectDescriptionTable.pop();

                          //   const halfAfterTheUnwantedElement =
                          //     projectDescriptionTable.slice(index + 1);
                          //   // setProjectDescriptionTable(
                          //   //   halfBeforeTheUnwantedElement +
                          //   //     halfAfterTheUnwantedElement
                          //   // );
                          //   console.log(projectDescriptionTable);
                          //   // console.log(
                          //   //   halfAfterTheUnwantedElement +
                          //   //     halfBeforeTheUnwantedElement
                          //   // );
                          // }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p
                style={{ fontSize: "12.2px", marginTop: "5px", color: "gray" }}
              >
                no data available click "Add Issue" to fill
              </p>
            )}
          </div>
        </div>
        <div>
          <button
            className={styles.add_issue_btn}
            onClick={() => {
              setIsDescriptionShowing(false);
              setIsDescriptionTableShowing(false);
              setIsDescriptionTableUploading(true);
            }}
          >
            Add Issue
          </button>
        </div>
      </div>
      {isDescriptionShowing ? (
        <div className={styles.outer_div2}>
          <p className={styles.project_info}>Project Info</p>
          <p className={styles.project_title}>Project title</p>
          <textarea
            value={projectDescriptionData.projectTitle}
            onChange={handleDataChange}
            name="projectTitle"
            className={styles.project_title_textarea}
            placeholder="project title ..."
          ></textarea>
          <p className={styles.project_title}>Client</p>
          <input
            value={projectDescriptionData.client}
            onChange={handleDataChange}
            name="client"
            className={styles.client_input}
            placeholder="client ..."
          ></input>
          <p className={styles.project_title}>Document Reference</p>
          <input
            value={projectDescriptionData.documentReference}
            onChange={handleDataChange}
            name="documentReference"
            className={styles.document_refrence}
            placeholder="document ref ..."
          ></input>
        </div>
      ) : isDescriptionTableShowing ? (
        <div className={styles.outer_div3}>
          <p className={styles.add_issue_title}>Issues {page + 1}</p>
          <p className={styles.fields}>Status</p>
          <div>
            <input
              value={
                projectDescriptionTable && projectDescriptionTable[page].status
              }
              name="status"
              onChange={(e) => {
                handleShowingChange(e, page);
              }}
              className={styles.add_issue_input}
              placeholder="status..."
            ></input>
          </div>
          <p className={styles.fields}>Author</p>
          <div>
            {" "}
            <input
              value={projectDescriptionTable[page].author}
              name="author"
              onChange={(e) => {
                handleShowingChange(e, page);
              }}
              className={styles.add_issue_input}
              placeholder="Author..."
            ></input>
          </div>
          <p className={styles.fields}>Reviewer</p>
          <div>
            {" "}
            <input
              value={projectDescriptionTable[page].reviewer}
              name="reviewer"
              onChange={(e) => {
                handleShowingChange(e, page);
              }}
              className={styles.add_issue_input}
              placeholder="Reviewer..."
            ></input>
          </div>
          <p className={styles.fields}>Distribution</p>
          <div>
            <input
              value={projectDescriptionTable[page].distribution}
              name="distribution"
              onChange={(e) => {
                handleShowingChange(e, page);
              }}
              className={styles.add_issue_input}
              placeholder="Distribution..."
            ></input>
          </div>
          <p className={styles.fields}>Mode</p>
          <div>
            {" "}
            <input
              value={projectDescriptionTable[page].mode}
              name="mode"
              onChange={(e) => {
                handleShowingChange(e, page);
              }}
              className={styles.add_issue_input}
              placeholder="Mode..."
            ></input>
          </div>
          <p className={styles.fields}>Date</p>
          <div>
            {" "}
            <input
              value={projectDescriptionTable[page].date}
              name="date"
              onChange={(e) => {
                handleShowingChange(e, page);
              }}
              className={styles.add_issue_input}
              placeholder="Date..."
            ></input>
          </div>
          {/* <div>
            <button className={styles.add_btn}>Add</button>
            <button className={styles.delete_btn}>Delete</button>
          </div> */}
        </div>
      ) : isDescriptionTableUploading ? (
        <div className={styles.outer_div3}>
          <p className={styles.add_issue_title}>Add Issues</p>
          <p className={styles.fields}>Status</p>
          <input
            value={projectDescriptionTableData.status}
            name="status"
            onChange={handleChange}
            className={styles.add_issue_input}
            placeholder="status..."
          ></input>
          <p className={styles.fields}>Author</p>
          <input
            value={projectDescriptionTableData.author}
            onChange={handleChange}
            name="author"
            className={styles.add_issue_input}
            placeholder="Author..."
          ></input>
          <p className={styles.fields}>Reviewer</p>
          <input
            value={projectDescriptionTableData.reviewer}
            onChange={handleChange}
            name="reviewer"
            className={styles.add_issue_input}
            placeholder="Reviewer..."
          ></input>
          <p className={styles.fields}>Distribution</p>
          <input
            value={projectDescriptionTableData.distribution}
            onChange={handleChange}
            name="distribution"
            className={styles.add_issue_input}
            placeholder="Distribution..."
          ></input>
          <p className={styles.fields}>Mode</p>
          <input
            value={projectDescriptionTableData.mode}
            onChange={handleChange}
            name="mode"
            className={styles.add_issue_input}
            placeholder="Mode..."
          ></input>
          <p className={styles.fields}>Date</p>
          <input
            value={projectDescriptionTableData.date}
            onChange={handleChange}
            name="date"
            className={styles.add_issue_input}
            placeholder="Date..."
          ></input>
          <div>
            <button
              className={styles.add_btn}
              onClick={() => {
                const obj = {
                  status: projectDescriptionTableData.status,
                  author: projectDescriptionTableData.author,
                  reviewer: projectDescriptionTableData.reviewer,
                  distribution: projectDescriptionTableData.distribution,
                  mode: projectDescriptionTableData.mode,
                  date: projectDescriptionTableData.date,
                };
                const newData = projectDescriptionTable.concat(obj);
                setProjectDescriptionTable(newData);
              }}
            >
              Add
            </button>
            <button className={styles.delete_btn}>Delete</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
