import React from "react";
import styles from "./styles/projectDescription.module.css";
import {
  FaAngleUp,
  FaEdit,
  FaPlusCircle,
  FaTrash,
  FaArrowRight,
} from "react-icons/fa";
import { useState } from "react";

export default function ProjectDescription({
  projectDescriptionData,
  setProjectDescriptionData,
  projectDescriptionTable,
  setProjectDescriptionTable,
  onClickFun,
}) {
  const projectTitleSuggestion = [
    "Loss Adjustment Survey Report forLosses encountered by MRS. MARIE JESSICA NATHALIE JOUMONTfollowing apparatus burst",
    "Burglary at Jade House Building, Port LouisMr. and Mrs. Voon Chong Fon Sing",
  ];
  const clientSuggestion = ["SICOM"];
  const projectDescriptionSuggestion = [
    "projectTitle1",
    "projectTitle2",
    "projectTitle3",
    "projectTitle4",
  ];
  const [isSuggestionShowing, setIsSuggestionShowing] = useState(false);
  const [isClientSuggestionSgowing, setIsClientSuggestionSgowing] =
    useState(false);
  const [isDescriptionSuggestionSgowing, setIsDescriptionSuggestionSgowing] =
    useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
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
  const projectinfo = ["projectTitle", "client", "documentReference"];

  const handleShowingChange = (event, id) => {
    const clone = [...projectDescriptionTable];
    const obj = clone[id];

    obj[`${event.target.name}`] = event.target.value;
    clone[id] = obj;
    setProjectDescriptionTable([...clone]);
  };
  const handleProjectTitleChange = (event, val) => {
    setProjectDescriptionData({
      ...projectDescriptionData,
      projectTitle: val,
    });
  };
  const handleClientChange = (event, val) => {
    setProjectDescriptionData({
      ...projectDescriptionData,
      client: val,
    });
  };
  const handleProjectDescriptionChange = (event, val) => {
    setProjectDescriptionData({
      ...projectDescriptionData,
      documentReference: val,
    });
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
                      <p>issue {index + 1}</p>
                      <div className={styles.logos}>
                        {/* <FaPlusCircle className={styles.logo1} />
                    <FaEdit className={styles.logo2} /> */}
                        <FaTrash
                          className={styles.logo3}
                          onClick={() => {
                            const subarr1 = projectDescriptionTable.slice(
                              0,
                              index
                            );
                            const subarr2 = projectDescriptionTable.slice(
                              index + 1,
                              projectDescriptionTable.length
                            );
                            const newData = [...subarr1, ...subarr2];
                            setProjectDescriptionTable(newData);
                          }}
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
                no data available click Add Issue to fill
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
          <p
            className={styles.project_title}
            onClick={() => {
              setActiveSuggestion(0);
              setIsSuggestionShowing(true);
              setIsClientSuggestionSgowing(false);
              setIsDescriptionSuggestionSgowing(false);
            }}
          >
            Project title
          </p>
          <textarea
            value={projectDescriptionData.projectTitle}
            onChange={handleDataChange}
            name="projectTitle"
            className={styles.project_title_textarea}
            placeholder="project title ..."
          ></textarea>
          <p
            className={styles.project_title}
            onClick={() => {
              setActiveSuggestion(1);
              setIsSuggestionShowing(false);
              setIsClientSuggestionSgowing(true);
              setIsDescriptionSuggestionSgowing(false);
            }}
          >
            Client
          </p>
          <input
            value={projectDescriptionData.client}
            onChange={handleDataChange}
            name="client"
            className={styles.client_input}
            placeholder="client ..."
          ></input>
          <p
            className={styles.project_title}
            onClick={() => {
              setActiveSuggestion(1);
              setIsSuggestionShowing(false);
              setIsClientSuggestionSgowing(false);
              setIsDescriptionSuggestionSgowing(true);
            }}
          >
            Document Reference
          </p>
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
                projectDescriptionTable.length != 0
                  ? projectDescriptionTable[page] &&
                    projectDescriptionTable[page].status
                  : ""
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
              value={
                projectDescriptionTable.length != 0
                  ? projectDescriptionTable[page] &&
                    projectDescriptionTable[page].author
                  : ""
              }
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
              value={
                projectDescriptionTable.length != 0
                  ? projectDescriptionTable[page] &&
                    projectDescriptionTable[page].reviewer
                  : ""
              }
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
              value={
                projectDescriptionTable.length != 0
                  ? projectDescriptionTable[page] &&
                    projectDescriptionTable[page].distribution
                  : ""
              }
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
              value={
                projectDescriptionTable.length != 0
                  ? projectDescriptionTable[page] &&
                    projectDescriptionTable[page].mode
                  : ""
              }
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
              value={
                projectDescriptionTable.length != 0
                  ? projectDescriptionTable[page] &&
                    projectDescriptionTable[page].date
                  : ""
              }
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
          <div>
            <input
              value={projectDescriptionTableData.status}
              name="status"
              onChange={handleChange}
              className={styles.add_issue_input}
              placeholder="status..."
            ></input>
          </div>
          <p className={styles.fields}>Author</p>
          <div>
            <input
              value={projectDescriptionTableData.author}
              onChange={handleChange}
              name="author"
              className={styles.add_issue_input}
              placeholder="Author..."
            ></input>
          </div>
          <p className={styles.fields}>Reviewer</p>
          <div>
            <input
              value={projectDescriptionTableData.reviewer}
              onChange={handleChange}
              name="reviewer"
              className={styles.add_issue_input}
              placeholder="Reviewer..."
            ></input>
          </div>
          <p className={styles.fields}>Distribution</p>
          <div>
            {" "}
            <input
              value={projectDescriptionTableData.distribution}
              onChange={handleChange}
              name="distribution"
              className={styles.add_issue_input}
              placeholder="Distribution..."
            ></input>
          </div>
          <p className={styles.fields}>Mode</p>
          <div>
            {" "}
            <input
              value={projectDescriptionTableData.mode}
              onChange={handleChange}
              name="mode"
              className={styles.add_issue_input}
              placeholder="Mode..."
            ></input>
          </div>
          <p className={styles.fields}>Date</p>
          <div>
            {" "}
            <input
              type="date"
              value={projectDescriptionTableData.date}
              onChange={handleChange}
              name="date"
              className={styles.add_issue_input}
              placeholder="Date..."
            />
          </div>
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
            {/* <button className={styles.delete_btn}>Delete</button> */}
          </div>
        </div>
      ) : null}

      <div
        className={isSuggestionShowing ? styles.suggestion : styles.suggestion1}
      >
        <div className={styles.suggestion_option}>
          <FaArrowRight
            className={styles.arrow_back}
            onClick={() => {
              setIsSuggestionShowing(false);
              setIsClientSuggestionSgowing(false);
              setIsDescriptionSuggestionSgowing(false);
            }}
          />
          <p>projectTitle suggestions</p>
        </div>
        <div className={styles.scrollBar}>
          {projectTitleSuggestion.map((data, index) => (
            <div
              key={index}
              className={styles.suggestion_inner_div}
              onClick={(e) => {
                handleProjectTitleChange(e, data);
              }}
            >
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          isClientSuggestionSgowing ? styles.suggestion : styles.suggestion1
        }
      >
        <div className={styles.suggestion_option}>
          <FaArrowRight
            className={styles.arrow_back}
            onClick={() => {
              setIsSuggestionShowing(false);
              setIsClientSuggestionSgowing(false);
              setIsDescriptionSuggestionSgowing(false);
            }}
          />
          <p>client suggestions</p>
        </div>
        <div className={styles.scrollBar}>
          {clientSuggestion.map((data, index) => (
            <div
              key={index}
              className={styles.suggestion_inner_div}
              onClick={(e) => {
                handleClientChange(e, data);
              }}
            >
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          isDescriptionSuggestionSgowing
            ? styles.suggestion
            : styles.suggestion1
        }
      >
        <div className={styles.suggestion_option}>
          <FaArrowRight
            className={styles.arrow_back}
            onClick={() => {
              setIsSuggestionShowing(false);
              setIsClientSuggestionSgowing(false);
              setIsDescriptionSuggestionSgowing(false);
            }}
          />
          <p>Doc Reference suggestions</p>
        </div>
        <div className={styles.scrollBar}>
          {projectDescriptionSuggestion.map((data, index) => (
            <div
              key={index}
              className={styles.suggestion_inner_div}
              onClick={(e) => {
                handleProjectDescriptionChange(e, data);
              }}
            >
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
