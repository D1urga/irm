import React from "react";
import styles from "./styles/projectDescription.module.css";
import { FaAngleUp, FaEdit, FaPlusCircle, FaTrash } from "react-icons/fa";
import { useState } from "react";

export default function ProjectDescription({
  projectDescriptionData,
  setProjectDescriptionData,
  onClickFun,
}) {
  const [page, setPage] = useState(0);

  const handleChange = (event, id) => {
    const clone = [...projectDescriptionData];
    const obj = clone[id];

    obj[`${event.target.name}`] = event.target.value;
    clone[id] = obj;
    setProjectDescriptionData([...clone]);
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
              page === 0
                ? styles.project_info_button
                : styles.project_info_button1
            }
            onClick={() => {
              setPage(0);
            }}
          >
            Project Info
          </button>
          <p className={styles.issue_table}>Issues Table</p>
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
        </div>
        <div>
          <button className={styles.add_issue_btn}>Add Issue</button>
        </div>
      </div>
      {page === 0 ? (
        <div className={styles.outer_div2}>
          <p className={styles.project_info}>Project Info</p>
          <p className={styles.project_title}>Project title</p>
          <textarea
            value={projectDescriptionData[0].projectTitle}
            name="projectTitle"
            onChange={(e) => {
              handleChange(e, 0);
            }}
            className={styles.project_title_textarea}
            placeholder="project title ..."
          ></textarea>
          <p className={styles.project_title}>Client</p>
          <input
            value={projectDescriptionData[0].client}
            name="client"
            onChange={(e) => {
              handleChange(e, 0);
            }}
            className={styles.client_input}
            placeholder="client ..."
          ></input>
          <p className={styles.project_title}>Document Reference</p>
          <input
            value={projectDescriptionData[0].documentReference}
            name="documentReference"
            onChange={(e) => {
              handleChange(e, 0);
            }}
            className={styles.document_refrence}
            placeholder="document ref ..."
          ></input>
        </div>
      ) : page === 1 ? (
        <div className={styles.outer_div3}>
          <p className={styles.add_issue_title}>Add Issues (1)</p>
          <p className={styles.fields}>Status</p>
          <input
            value={projectDescriptionData[1].status}
            name="status"
            onChange={(e) => {
              handleChange(e, 1);
            }}
            className={styles.add_issue_input}
            placeholder="status..."
          ></input>
          <p className={styles.fields}>Author</p>
          <input
            value={projectDescriptionData[1].author}
            name="author"
            onChange={(e) => {
              handleChange(e, 1);
            }}
            className={styles.add_issue_input}
            placeholder="Author..."
          ></input>
          <p className={styles.fields}>Reviewer</p>
          <input
            value={projectDescriptionData[1].reviewer}
            name="reviewer"
            onChange={(e) => {
              handleChange(e, 1);
            }}
            className={styles.add_issue_input}
            placeholder="Reviewer..."
          ></input>
          <p className={styles.fields}>Distribution</p>
          <input
            value={projectDescriptionData[1].distribution}
            name="distribution"
            onChange={(e) => {
              handleChange(e, 1);
            }}
            className={styles.add_issue_input}
            placeholder="Distribution..."
          ></input>
          <p className={styles.fields}>Mode</p>
          <input
            value={projectDescriptionData[1].mode}
            name="mode"
            onChange={(e) => {
              handleChange(e, 1);
            }}
            className={styles.add_issue_input}
            placeholder="Mode..."
          ></input>
          <p className={styles.fields}>Date</p>
          <input
            value={projectDescriptionData[1].date}
            name="date"
            onChange={(e) => {
              handleChange(e, 1);
            }}
            className={styles.add_issue_input}
            placeholder="Date..."
          ></input>
          <div>
            <button className={styles.add_btn}>Add</button>
            <button className={styles.delete_btn}>Delete</button>
          </div>
        </div>
      ) : page === 2 ? (
        <div className={styles.outer_div3}>
          <p className={styles.add_issue_title}>Add Issues (2)</p>
          <p className={styles.fields}>Status</p>
          <input
            value={projectDescriptionData[2].status}
            name="status"
            onChange={(e) => {
              handleChange(e, 2);
            }}
            className={styles.add_issue_input}
            placeholder="status..."
          ></input>
          <p className={styles.fields}>Author</p>
          <input
            value={projectDescriptionData[2].author}
            name="author"
            onChange={(e) => {
              handleChange(e, 2);
            }}
            className={styles.add_issue_input}
            placeholder="Author..."
          ></input>
          <p className={styles.fields}>Reviewer</p>
          <input
            value={projectDescriptionData[2].reviewer}
            name="reviewer"
            onChange={(e) => {
              handleChange(e, 2);
            }}
            className={styles.add_issue_input}
            placeholder="Reviewer..."
          ></input>
          <p className={styles.fields}>Distribution</p>
          <input
            value={projectDescriptionData[2].distribution}
            name="distribution"
            onChange={(e) => {
              handleChange(e, 2);
            }}
            className={styles.add_issue_input}
            placeholder="Distribution..."
          ></input>
          <p className={styles.fields}>Mode</p>
          <input
            value={projectDescriptionData[2].mode}
            name="mode"
            onChange={(e) => {
              handleChange(e, 2);
            }}
            className={styles.add_issue_input}
            placeholder="Mode..."
          ></input>
          <p className={styles.fields}>Date</p>
          <input
            value={projectDescriptionData[2].date}
            name="date"
            onChange={(e) => {
              handleChange(e, 2);
            }}
            className={styles.add_issue_input}
            placeholder="Date..."
          ></input>
          <div>
            <button className={styles.add_btn}>Add</button>
            <button className={styles.delete_btn}>Delete</button>
          </div>
        </div>
      ) : page === 3 ? (
        <div className={styles.outer_div3}>
          <p className={styles.add_issue_title}>Add Issues (3)</p>
          <p className={styles.fields}>Status</p>
          <input
            value={projectDescriptionData[3].status}
            name="status"
            onChange={(e) => {
              handleChange(e, 3);
            }}
            className={styles.add_issue_input}
            placeholder="status..."
          ></input>
          <p className={styles.fields}>Author</p>
          <input
            value={projectDescriptionData[3].author}
            name="author"
            onChange={(e) => {
              handleChange(e, 3);
            }}
            className={styles.add_issue_input}
            placeholder="Author..."
          ></input>
          <p className={styles.fields}>Reviewer</p>
          <input
            value={projectDescriptionData[3].reviewer}
            name="reviewer"
            onChange={(e) => {
              handleChange(e, 3);
            }}
            className={styles.add_issue_input}
            placeholder="Reviewer..."
          ></input>
          <p className={styles.fields}>Distribution</p>
          <input
            value={projectDescriptionData[3].distribution}
            name="distribution"
            onChange={(e) => {
              handleChange(e, 3);
            }}
            className={styles.add_issue_input}
            placeholder="Distribution..."
          ></input>
          <p className={styles.fields}>Mode</p>
          <input
            value={projectDescriptionData[3].mode}
            name="mode"
            onChange={(e) => {
              handleChange(e, 3);
            }}
            className={styles.add_issue_input}
            placeholder="Mode..."
          ></input>
          <p className={styles.fields}>Date</p>
          <input
            value={projectDescriptionData[3].date}
            name="date"
            onChange={(e) => {
              handleChange(e, 3);
            }}
            className={styles.add_issue_input}
            placeholder="Date..."
          ></input>
          <div>
            <button className={styles.add_btn}>Add</button>
            <button className={styles.delete_btn}>Delete</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
