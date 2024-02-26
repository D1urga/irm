"use client";
import React from "react";
import styles from "./page.module.css";
import { useState } from "react";
import { FaArrowLeft, FaAngleDown } from "react-icons/fa";
import HeaderSection from "../components2/headerSection";
import ReportSection from "../components2/reportSection";
import NotesSection from "../components2/notesSection";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import AttachmentSection from "../components2/attachmentSection";
import irmLogo from "../images/irm_logo.jpg";
import Image from "next/image";

export default function TypeB() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // //////////////////////////////////////////////////////////////////////////////////
  const [currentSection, setCurrentState] = useState(0);
  const [headerSectionData, setHeaderSectionData] = useState({
    DraftName: "a",
    DamagesTo: "b",
    DraftHeadingAndAddress: "c",
    DateOfIncident: "d",
    DateOfSurvey: "r",
  });
  const [assessmentLossDes, setAssessmentLossDes] = useState("dskhda");
  const [assessmentLossTable, setAssessmentLossTable] = useState([]);
  const [assessmentLossNotes, setAssessmentLossNotes] = useState([]);
  const [notesSection, setNotesSection] = useState([]);
  const [assessmentLossFields, setAssessmentLossFields] = useState([]);
  const [conclusionTable, setConclusionTable] = useState([]);
  const [conclusionDes, setConclusionDes] = useState({ conclusionDes: "" });
  const [addFieldData, setAddFieldData] = useState({
    field0: "",
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });

  //  ///////////////////////////////////////////////////////////////////
  return (
    <div className={styles.outer_div}>
      <div className={styles.topbar}>
        <p>Dashboard</p>

        <div className={styles.btn_div}>
          <button className={styles.btn1}>Save</button>
          <button className={styles.btn2}>Delete</button>
          <button className={styles.btn3} onClick={handlePrint}>
            Download
          </button>
        </div>
      </div>
      {currentSection === 0 ? (
        <div className={styles.allPages}>
          <div className={styles.report}>
            <FaArrowLeft className={styles.arrow_left} />
            <p>Mr John report</p>
          </div>
          <div className={styles.option_outer_div}>
            <div
              className={styles.option}
              onClick={() => {
                setCurrentState(1);
              }}
            >
              <p>Header Section</p>
              <FaAngleDown className={styles.angle_down} />
            </div>
          </div>
          <div className={styles.option_outer_div}>
            <div
              className={styles.option}
              onClick={() => {
                setCurrentState(2);
              }}
            >
              <p>Report Section </p>
              <FaAngleDown className={styles.angle_down} />
            </div>
          </div>
          <div className={styles.option_outer_div}>
            <div
              className={styles.option}
              onClick={() => {
                setCurrentState(3);
              }}
            >
              <p>Notes Section</p>
              <FaAngleDown className={styles.angle_down} />
            </div>
          </div>

          <div className={styles.option_outer_div}>
            <div
              className={styles.option}
              onClick={() => {
                setCurrentState(4);
              }}
            >
              <p>Attachment Section</p>
              <FaAngleDown className={styles.angle_down} />
            </div>
          </div>
        </div>
      ) : currentSection === 1 ? (
        <HeaderSection
          headerSectionData={headerSectionData}
          setHeaderSectionData={setHeaderSectionData}
          onClickFun={() => {
            setCurrentState(0);
          }}
        />
      ) : currentSection === 2 ? (
        <ReportSection
          assessmentLossDes={assessmentLossDes}
          setAssessmentLossDes={setAssessmentLossDes}
          assessmentLossTable={assessmentLossTable}
          setAssessmentLossTable={setAssessmentLossTable}
          assessmentLossNotes={assessmentLossNotes}
          setAssessmentLossNotes={setAssessmentLossNotes}
          assessmentLossFields={assessmentLossFields}
          setAssessmentLossFields={setAssessmentLossFields}
          onClickFun={() => {
            setCurrentState(0);
          }}
        />
      ) : currentSection === 3 ? (
        <NotesSection
          assessmentLossDes={assessmentLossDes}
          setAssessmentLossDes={setAssessmentLossDes}
          assessmentLossTable={assessmentLossTable}
          setAssessmentLossTable={setAssessmentLossTable}
          assessmentLossNotes={notesSection}
          setAssessmentLossNotes={setNotesSection}
          assessmentLossFields={assessmentLossFields}
          setAssessmentLossFields={setAssessmentLossFields}
          onClickFun={() => {
            setCurrentState(0);
          }}
        />
      ) : currentSection === 4 ? (
        <AttachmentSection
          conclusionDes={conclusionDes}
          setConclusionDes={setConclusionDes}
          conclusionTable={conclusionTable}
          setConclusionTable={setConclusionTable}
          onClickFun={() => {
            setCurrentState(0);
          }}
        />
      ) : null}

      <div
        style={{
          display: "none",
        }}
      >
        <div
          ref={componentRef}
          className={styles.print_pdf}
          style={{
            width: "100vw",
            paddingLeft: "40px",
            paddingRight: "40px",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <Image
              src={irmLogo}
              className={styles.irm_logo}
              style={{ height: "190px", width: "600px" }}
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "stretch",
              justifyContent: "center",
              backgroundColor: "gray",
              color: "white",
            }}
          >
            <div
              style={{
                width: "20%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                padding: "2px 2px",
                justifyContent: "center",
                border: "0.5px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                item
              </p>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                padding: "2px 2px",
                justifyContent: "center",
                border: "0.1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                description
              </p>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                padding: "2px 2px",
                justifyContent: "center",
                border: "0.1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                report
              </p>
            </div>{" "}
            <div
              style={{
                width: "40%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                padding: "2px 2px",
                justifyContent: "center",
                border: "0.1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                action
              </p>
            </div>{" "}
            <div
              style={{
                width: "40%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                padding: "2px 2px",
                justifyContent: "center",
                border: "0.1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                replacement cost
              </p>
            </div>{" "}
            <div
              style={{
                width: "40%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                padding: "2px 2px",
                justifyContent: "center",
                border: "0.1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                depreciation cost
              </p>
            </div>{" "}
            <div
              style={{
                width: "40%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                padding: "2px 2px",
                justifyContent: "center",
                border: "0.1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                assessment cost
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {assessmentLossTable.map((data, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "20%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    padding: "2px 2px",
                    justifyContent: "center",
                    border: "0.1px solid black",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    {index + 1}
                  </p>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    padding: "2px 2px",
                    justifyContent: "center",
                    border: "0.1px solid black",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    {data.description}
                  </p>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    padding: "2px 2px",
                    justifyContent: "center",
                    border: "0.1px solid black",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    {data.report}
                  </p>
                </div>{" "}
                <div
                  style={{
                    width: "40%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    padding: "2px 2px",
                    justifyContent: "center",
                    border: "0.1px solid black",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    {data.action}
                  </p>
                </div>{" "}
                <div
                  style={{
                    width: "40%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    padding: "2px 2px",
                    justifyContent: "center",
                    border: "0.1px solid black",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    {data.replacement}
                  </p>
                </div>{" "}
                <div
                  style={{
                    width: "40%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    padding: "2px 2px",
                    justifyContent: "center",
                    border: "0.1px solid black",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    {data.depreciation}
                  </p>
                </div>{" "}
                <div
                  style={{
                    width: "40%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    padding: "2px 2px",
                    justifyContent: "center",
                    border: "0.1px solid black",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    {data.assessment}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "stretch",
              justifyContent: "center",
              backgroundColor: "gray",
              color: "white",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "20%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                padding: "2px 2px",
                justifyContent: "center",
                border: "0.5px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                Ref
              </p>
            </div>
            <div
              style={{
                width: "80%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                padding: "2px 2px",
                justifyContent: "center",
                border: "0.5px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                Notes
              </p>
            </div>
          </div>
          {notesSection.map((data, index) => (
            <div key={index}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "20%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    padding: "2px 2px",
                    justifyContent: "center",
                    border: "0.5px solid black",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    {data.ref}
                  </p>
                </div>
                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    padding: "2px 2px",
                    justifyContent: "center",
                    border: "0.5px solid black",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    {data.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              alignItems: "stretch",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {conclusionTable &&
              conclusionTable.map((data, index) => (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2,1fr)",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={data.attachmentUrl}
                      style={{
                        height: "330px",
                        width: "350px",
                        objectFit: "contain",
                        display: "grid",
                        gridTemplateColumns: "repeat(2,1fr)",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "2px",
                        backgroundColor: "rgb(230 , 230 , 230)",
                      }}
                    ></img>
                    <p
                      style={{
                        fontSize: "13px",
                        marginTop: "5px",
                      }}
                    >
                      {data.title}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
