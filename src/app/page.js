"use client";
import Image from "next/image";
import { Margin, Resolution, usePDF } from "react-to-pdf";
import styles from "./page.module.css";
import { FaAngleDown, FaAngleUp, FaArrowLeft } from "react-icons/fa";
import HeaderSection from "./components/headerSection.js";
import { useEffect, useState } from "react";
import ProjectDescription from "./components/projectDescription.js";
import PolicyParticulars from "./components/policyParticulars.js";
import ObservationsAndVerifications from "./components/observationsAndVerifications.js";
import CauseOfLoss from "./components/causeOfLoss";
import AssessmentOfLoss from "./components/assessmentOfLoss";
import Conclusion from "./components/conclusion";
import irmLogo from "./images/irm_logo.jpg";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { Table } from "@mui/material";

export default function Home() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // ////////////////////////////
  const [headerSectionData, setHeaderSectionData] = useState({
    reason: "",
    name: "",
  });

  const [causeOfLoss, setCauseOfLoss] = useState({ causeOfLoss: "" });

  const [policyParticularsData, setPolicyParticularsData] = useState({
    insurer: "",
    insured: "",
    typesOfPolicy: "",
    policyNumber: "",
    periodOfInsurance: "",
    policyExcess: "",
  });

  const [projectDescriptionData, setProjectDescriptionData] = useState({
    projectTitle: "",
    client: "",
    documentReference: "",
  });
  const [projectDescriptionTable, setProjectDescriptionTable] = useState([]);

  const [
    observationsAndVerificationsData,
    setObservationsAndVerificationsData,
  ] = useState([{ introduction: "", conclusion: "" }]);
  const [
    observationsAndVerificationsAttach,
    setObservationsAndVerificationsAttach,
  ] = useState([]);

  const [assessmentLossDes, setAssessmentLossDes] = useState("dskhda");
  const [assessmentLossTable, setAssessmentLossTable] = useState([]);
  const [assessmentLossNotes, setAssessmentLossNotes] = useState([]);

  const [conclusionDes, setConclusionDes] = useState({ conclusionDes: "" });
  const [conclusionTable, setConclusionTable] = useState([]);

  // /////////////////////////
  const [list, setList] = useState(["anoop", "kumar"]);
  const [list1, setList1] = useState(0);
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const { toPDF, targetRef } = usePDF({
    method: "save",
    filename: "multipage-example.pdf",
    resolution: Resolution.MEDIUM,
    page: { margin: Margin.MEDIUM },
    overrides: {
      pdf: {
        compress: false,
      },
      canvas: {
        useCORS: true,
      },
    },
  });
  const sections = [];
  const [currentSection, setCurrentState] = useState(0);
  // useEffect(() => {
  //   const unloadCallback = (event) => {
  //     event.preventDefault();
  //     event.returnValue = "";
  //     return "";
  //   };

  //   window.addEventListener("beforeunload", unloadCallback);
  //   return () => window.removeEventListener("beforeunload", unloadCallback);
  // }, []);

  return (
    <div className={styles.outer_div}>
      <div className={styles.topbar}>
        <p>Dashboard</p>
        {/* <p>{headerSectionData.reason}</p> */}
        {/* <p>{headerSectionData.name}</p> */}
        {/* {projectDescriptionData.documentReference} */}
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
            <div className={styles.option}>
              <p>Header Section</p>
              <FaAngleDown
                className={styles.angle_down}
                onClick={() => {
                  setCurrentState(1);
                }}
              />
            </div>
          </div>
          <div className={styles.option_outer_div}>
            <div className={styles.option}>
              <p>Project Description</p>
              <FaAngleDown
                className={styles.angle_down}
                onClick={() => {
                  setCurrentState(2);
                }}
              />
            </div>
          </div>
          <div className={styles.option_outer_div}>
            <div className={styles.option}>
              <p>Policy Particulars</p>
              <FaAngleDown
                className={styles.angle_down}
                onClick={() => {
                  setCurrentState(3);
                }}
              />
            </div>
          </div>
          <div className={styles.option_outer_div}>
            <div className={styles.option}>
              <p>Observations and Verifications</p>
              <FaAngleDown
                className={styles.angle_down}
                onClick={() => {
                  setCurrentState(4);
                }}
              />
            </div>
          </div>
          <div className={styles.option_outer_div}>
            <div className={styles.option}>
              <p>Cause of Loss</p>
              <FaAngleDown
                className={styles.angle_down}
                onClick={() => {
                  setCurrentState(5);
                }}
              />
            </div>
          </div>
          <div className={styles.option_outer_div}>
            <div className={styles.option}>
              <p>Assessment of Loss</p>
              <FaAngleDown
                className={styles.angle_down}
                onClick={() => {
                  setCurrentState(6);
                }}
              />
            </div>
          </div>
          <div className={styles.option_outer_div}>
            <div className={styles.option}>
              <p>Conclusion</p>
              <FaAngleDown
                className={styles.angle_down}
                onClick={() => {
                  setCurrentState(7);
                }}
              />
            </div>
          </div>
          <div className={styles.preview_div}>
            <p
              className={styles.preview}
              onClick={() => {
                setIsPdfOpen(!isPdfOpen);
              }}
            >
              Preview
            </p>
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
      ) : currentSection == 2 ? (
        <ProjectDescription
          projectDescriptionData={projectDescriptionData}
          setProjectDescriptionData={setProjectDescriptionData}
          projectDescriptionTable={projectDescriptionTable}
          setProjectDescriptionTable={setProjectDescriptionTable}
          onClickFun={() => {
            setCurrentState(0);
          }}
        />
      ) : currentSection == 3 ? (
        <PolicyParticulars
          policyParticularsData={policyParticularsData}
          setPolicyParticularsData={setPolicyParticularsData}
          onClickFun={() => {
            setCurrentState(0);
          }}
        />
      ) : currentSection === 4 ? (
        <ObservationsAndVerifications
          observationsAndVerificationsData={observationsAndVerificationsData}
          setObservationsAndVerificationsData={
            setObservationsAndVerificationsData
          }
          observationsAndVerificationsAttach={
            observationsAndVerificationsAttach
          }
          setObservationsAndVerificationsAttach={
            setObservationsAndVerificationsAttach
          }
          onClickFun={() => {
            setCurrentState(0);
          }}
        />
      ) : currentSection === 5 ? (
        <CauseOfLoss
          causeOfLoss={causeOfLoss}
          setCauseOfLoss={setCauseOfLoss}
          onClickFun={() => {
            setCurrentState(0);
          }}
        />
      ) : currentSection === 6 ? (
        <AssessmentOfLoss
          assessmentLossDes={assessmentLossDes}
          setAssessmentLossDes={setAssessmentLossDes}
          assessmentLossTable={assessmentLossTable}
          setAssessmentLossTable={setAssessmentLossTable}
          assessmentLossNotes={assessmentLossNotes}
          setAssessmentLossNotes={setAssessmentLossNotes}
          onClickFun={() => {
            setCurrentState(0);
          }}
        />
      ) : currentSection === 7 ? (
        <Conclusion
          conclusionDes={conclusionDes}
          setConclusionDes={setConclusionDes}
          conclusionTable={conclusionTable}
          setConclusionTable={setConclusionTable}
          onClickFun={() => {
            setCurrentState(0);
          }}
        />
      ) : null}
      {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
      <div
        className={isPdfOpen ? styles.pdf : styles.pdf1}
        onClick={() => {
          setIsPdfOpen(!isPdfOpen);
        }}
      >
        {/* <FaAngleUp
          onClickFun={() => {
            setIsPdfOpen(!isPdfOpen);
          }}
        /> */}
        <div
          ref={targetRef}
          className={isPdfOpen ? styles.pdf_div : styles.pdf_div1}
        >
          <div className={styles.logo_div}>
            <Image src={irmLogo} className={styles.irm_logo} />
          </div>
        </div>
      </div>
      {/*     //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
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
              style={{ height: "100px", width: "400px" }}
            />
          </div>
          <div
            style={{
              width: "100%",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              style={{
                width: "100%",
                fontSize: "8px",
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
                justifyContent: "center",
                border: "0.5px solid black",
                backgroundColor: "lightgreen",
              }}
            >
              DOCUMENT CONTROL SHEET
            </p>
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
                  width: "25%",
                  padding: "7px 10px",
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
                  border: "0.5px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "8px",
                  }}
                >
                  Project
                </p>
              </div>
              <div
                style={{
                  width: "75%",
                  display: "flex",

                  padding: "7px 10px",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "0.5px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "8px",
                  }}
                >
                  {projectDescriptionData.projectTitle}
                </p>
              </div>
            </div>
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
                  width: "25%",
                  padding: "7px 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "0.5px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "8px",
                  }}
                >
                  client
                </p>
              </div>
              <div
                style={{
                  width: "75%",
                  display: "flex",
                  alignItems: "center",
                  padding: "7px 10px",
                  justifyContent: "center",
                  border: "0.5px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "8px",
                  }}
                >
                  {projectDescriptionData.client}
                </p>
              </div>
            </div>
          </div>
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
                width: "100%",
                display: "flex",
                alignItems: "stretch",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "25%",
                  display: "flex",
                  alignItems: "center",
                  padding: "7px 10px",
                  justifyContent: "center",
                  textAlign: "center",
                  border: "1pt solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "8px",
                  }}
                >
                  IRM’s Document Reference
                </p>
              </div>
              <div
                style={{
                  width: "75%",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  padding: "7px 10px",
                  justifyContent: "center",
                  border: "0.1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "8px",
                  }}
                >
                  {projectDescriptionData.documentReference}
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              marginTop: "40px",
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              // border: "0.1px solid black",
            }}
          >
            <div
              style={{
                width: "10%",
                height: "20px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                border: "0.1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                }}
              >
                Issue
              </p>
            </div>
            <div
              style={{
                width: "14%",
                height: "20px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                border: "0.1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                }}
              >
                Status
              </p>
            </div>
            <div
              style={{
                width: "14%",
                height: "20px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                border: "0.1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                }}
              >
                Author
              </p>
            </div>
            <div
              style={{
                width: "15%",
                height: "20px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                border: "0.1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                }}
              >
                Reviwer
              </p>
            </div>
            <div
              style={{
                width: "17%",
                height: "20px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                border: "0.1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                }}
              >
                Distribution
              </p>
            </div>
            <div
              style={{
                width: "15%",
                height: "20px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                border: "0.1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                }}
              >
                Mode
              </p>
            </div>
            <div
              style={{
                width: "15%",
                height: "20px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                border: "0.1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                }}
              >
                Date
              </p>
            </div>
          </div>
          <div>
            {projectDescriptionTable.map((data, index) => (
              <div
                key={index}
                style={{
                  width: "100%",

                  display: "flex",
                  textAlign: "center",

                  alignItems: "stretch",
                  justifyContent: "center",
                  // border: "0.1px solid black",
                }}
              >
                <div
                  style={{
                    width: "10%",

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
                      fontSize: "8px",
                    }}
                  >
                    {index}
                  </p>
                </div>
                <div
                  style={{
                    width: "14%",

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
                      fontSize: "8px",
                    }}
                  >
                    {data.status}
                  </p>
                </div>
                <div
                  style={{
                    width: "14%",

                    display: "flex",
                    textAlign: "center",
                    padding: "2px 2px",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "0.1px solid black",
                  }}
                >
                  <p
                    style={{
                      fontSize: "8px",
                    }}
                  >
                    {data.author}
                  </p>
                </div>
                <div
                  style={{
                    width: "15%",

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
                      fontSize: "8px",
                    }}
                  >
                    {data.reviewer}
                  </p>
                </div>
                <div
                  style={{
                    width: "17%",

                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2px 2px",
                    border: "0.1px solid black",
                  }}
                >
                  <p
                    style={{
                      fontSize: "8px",
                    }}
                  >
                    {data.distribution}
                  </p>
                </div>
                <div
                  style={{
                    width: "15%",

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
                      fontSize: "8px",
                    }}
                  >
                    {data.mode}
                  </p>
                </div>
                <div
                  style={{
                    width: "15%",

                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    padding: "2px 2px",
                    justifyContent: "center",
                    border: "0.01mm solid black",
                  }}
                >
                  <p
                    style={{
                      fontSize: "8px",
                    }}
                  >
                    {data.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: "9px",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            1.0 INTRODUCTION
          </p>
          <p
            style={{
              fontSize: "8px",
              marginTop: "20px",
            }}
          >
            In accordance with instructions received from SICOM on 23.01.2023,
            we inspected the premises of Insured 24.01.2023, in the presence and
            guidance of Insured’s Officials at Chebel Sports Complex (Kosovo
            Cloakroom)
          </p>
          <p
            style={{
              fontSize: "9px",
              marginTop: "20px",
            }}
          >
            We now submit our report as follows:
          </p>
          <p
            style={{
              fontSize: "9px",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            2.0 POLICY PARTICULARS
          </p>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "35%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                  marginTop: "5px",
                }}
              >
                THE INSURED
              </p>
              <p
                style={{
                  fontSize: "11px",
                  marginTop: "5px",
                }}
              >
                :
              </p>
            </div>
            <div
              style={{
                width: "65%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                  marginTop: "5px",
                }}
              >
                {policyParticularsData.insured}
              </p>
            </div>
          </div>{" "}
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "35%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                  marginTop: "5px",
                }}
              >
                THE INSURER
              </p>
              <p
                style={{
                  fontSize: "11px",
                  marginTop: "5px",
                }}
              >
                :
              </p>
            </div>
            <div
              style={{
                width: "65%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                  marginTop: "5px",
                }}
              >
                {policyParticularsData.insurer}
              </p>
            </div>
          </div>{" "}
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "35%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                  marginTop: "5px",
                }}
              >
                TYPE OF POLICY
              </p>
              <p
                style={{
                  fontSize: "11px",
                  marginTop: "5px",
                }}
              >
                :
              </p>
            </div>
            <div
              style={{
                width: "65%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                  marginTop: "5px",
                }}
              >
                {policyParticularsData.typesOfPolicy}
              </p>
            </div>
          </div>{" "}
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "35%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                  marginTop: "5px",
                }}
              >
                POLICY NUMBER
              </p>
              <p
                style={{
                  fontSize: "11px",
                  marginTop: "5px",
                }}
              >
                :
              </p>
            </div>
            <div
              style={{
                width: "65%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                  marginTop: "5px",
                }}
              >
                {policyParticularsData.policyNumber}
              </p>
            </div>
          </div>{" "}
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "35%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                  marginTop: "5px",
                }}
              >
                PERIOD OF INSURANCE
              </p>
              <p
                style={{
                  fontSize: "11px",
                  marginTop: "5px",
                }}
              >
                :
              </p>
            </div>
            <div
              style={{
                width: "65%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                  marginTop: "5px",
                }}
              >
                {policyParticularsData.periodOfInsurance}
              </p>
            </div>
          </div>{" "}
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "35%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                  marginTop: "5px",
                }}
              >
                POLICY EXCESS
              </p>
              <p
                style={{
                  fontSize: "11px",
                  marginTop: "5px",
                }}
              >
                :
              </p>
            </div>
            <div
              style={{
                width: "65%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "8px",
                  marginTop: "5px",
                }}
              >
                {policyParticularsData.policyExcess}
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: "9px",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            3.0 INSPECTION AND VERFICATIONS
          </p>
          <p
            style={{
              fontSize: "8px",
              marginTop: "20px",
            }}
          >
            {observationsAndVerificationsData[0].introduction}
          </p>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              alignItems: "stretch",
              justifyContent: "center",
            }}
          >
            {observationsAndVerificationsAttach &&
              observationsAndVerificationsAttach.map((data, index) => (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2,1fr)",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
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
                        height: "175px",
                        width: "200px",
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
                        fontSize: "8px",
                        marginTop: "5px",
                      }}
                    >
                      {data.title}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <p
            style={{
              fontSize: "8px",
              marginTop: "20px",
            }}
          >
            {observationsAndVerificationsData[0].conclusion}
          </p>
          <p
            style={{
              fontSize: "11px",
              marginTop: "20px",
            }}
          >
            4.0 CAUSE OF LOSS
          </p>
          <p
            style={{
              fontSize: "10px",
              marginTop: "20px",
            }}
          >
            {causeOfLoss.causeOfLoss}
          </p>
          <p
            style={{
              fontSize: "11px",
              marginTop: "20px",
            }}
          >
            5.0 ASSESSMENT
          </p>
          <p
            style={{
              fontSize: "11px",
              marginTop: "20px",
            }}
          >
            Below tables details our observations and assessment to restore
            surveyed premises to the condition before incidence. Our assessment
            is based on our survey, the quantities measured on site and as per
            current market rates for the required repairs/ replacement. Acts of
            Vandalism and Theft Industrial Risk Managers Co. Ltd. 8 Insured
            provided overall cost of re-instatement. Our assessment, as
            presented in below table, details all losses encountered at Chebel
            Kosovo cloakroom
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
              border: "1px solid black",
            }}
          >
            <p
              style={{
                fontSize: "9px",
              }}
            >
              Site : CHEBEL, KOSOVO SPORTS COMPLEX (CLOAKROOM)
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // marginTop: "20px",
              // border: "1px solid black",
            }}
          >
            <div
              style={{
                width: "30%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                }}
              >
                Items
              </p>
            </div>
            <div
              style={{
                width: "30%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                }}
              >
                Description
              </p>
            </div>
            <div
              style={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                }}
              >
                Claim, Rs
              </p>
            </div>
            <div
              style={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                }}
              >
                Asse, Rs
              </p>
            </div>
          </div>
          <div j>
            {assessmentLossTable &&
              assessmentLossTable.map((data, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "stretch",
                    justifyContent: "center",
                    // marginTop: "20px",
                    // border: "1px solid black",
                  }}
                >
                  <div
                    style={{
                      width: "30%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid black",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "8px",
                      }}
                    >
                      ---
                    </p>
                  </div>
                  <div
                    style={{
                      width: "30%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid black",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "8px",
                      }}
                    >
                      {data.description}
                    </p>
                  </div>
                  <div
                    style={{
                      width: "20%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid black",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "8px",
                      }}
                    >
                      {data.claimAmout}
                    </p>
                  </div>
                  <div
                    style={{
                      width: "20%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid black",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "8px",
                      }}
                    >
                      {data.assessmentAmount}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <p
            style={{
              fontSize: "11px",
              marginTop: "20px",
            }}
          >
            6.0 CONCLUSION
          </p>
          <p
            style={{
              fontSize: "8px",
              marginTop: "20px",
            }}
          >
            {conclusionDes.conclusionDes}
          </p>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              alignItems: "stretch",
              justifyContent: "center",
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
                        height: "175px",
                        width: "200px",
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
                        fontSize: "8px",
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
