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
import coverpage from "./images/irmCoverImage.jpeg";
import irmPng from "./images/irmPng.png";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";
import { Currency } from "react-intl-number-format";
import Intl from "intl";
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
    name: "Loss Adjustment Report_draf",
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
  const [policyParticularsFields, setPolicyParticularsFields] = useState([]);
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
  const [assessmentLossDes, setAssessmentLossDes] = useState({ des: "" });
  const [assessmentLossDescription, setAssessmentLossDescription] = useState({
    description: "adad",
  });
  const [addFieldData, setAddFieldData] = useState({
    field0: "",
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });
  const [assessmentLossTable, setAssessmentLossTable] = useState([]);
  const [assessmentLossNotes, setAssessmentLossNotes] = useState([]);
  const [assessmentLossFields, setAssessmentLossFields] = useState([]);
  const [conclusionDes, setConclusionDes] = useState({ conclusionDes: "" });
  const [conclusionTable, setConclusionTable] = useState([]);
  const [totalClaimAm, setTotalClaimAm] = useState(0);
  const [totalAssessmentAm, setTotalAssessmentAm] = useState(0);

  const countClaimAm = () => {
    let value = 0;
    for (let i = 0; i < assessmentLossTable.length; i++) {
      value = value + Number(assessmentLossTable[i].claimAmout);
    }
    setTotalClaimAm(value);
  };
  const countAssessAm = () => {
    let value = 0;
    for (let i = 0; i < assessmentLossTable.length; i++) {
      value = value + Number(assessmentLossTable[i].assessmentAmount);
    }
    setTotalAssessmentAm(value);
  };

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
  useEffect(() => {
    // const unloadCallback = (event) => {
    //   event.preventDefault();
    //   event.returnValue = "";
    //   return "";
    // };

    // window.addEventListener("beforeunload", unloadCallback);
    // return () => window.removeEventListener("beforeunload", unloadCallback);
    countClaimAm();
    countAssessAm();
  }, [assessmentLossTable]);

  return (
    <div className={styles.outer_div}>
      <div className={styles.topbar}>
        <p>Dashboard</p>
        {/* <p>
          {(assessmentLossTable[0] &&
            typeof Number(assessmentLossTable[0].claimAmout)) ||
            "ghvh"}
        </p> */}
        {/* <p>{totalClaimAm}</p> */}
        {/* <p>{Intl.NumberFormat("en-IN").format(1000)}</p> */}

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
            {/* <p>{totalClaimAm}</p>
            <p>
              {assessmentLossTable.reduce((a, v) => (a = a + v.claimAmout), 0)}
            </p> */}
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
              <p>Project Description</p>
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
              <p>Policy Particulars</p>
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
              <p>Observations and Verifications</p>
              <FaAngleDown className={styles.angle_down} />
            </div>
          </div>
          <div className={styles.option_outer_div}>
            <div
              className={styles.option}
              onClick={() => {
                setCurrentState(5);
              }}
            >
              <p>Cause of Loss</p>
              <FaAngleDown className={styles.angle_down} />
            </div>
          </div>
          <div className={styles.option_outer_div}>
            <div
              className={styles.option}
              onClick={() => {
                setCurrentState(6);
              }}
            >
              <p>Assessment of Loss</p>
              <FaAngleDown className={styles.angle_down} />
            </div>
          </div>
          <div className={styles.option_outer_div}>
            <div
              className={styles.option}
              onClick={() => {
                setCurrentState(7);
              }}
            >
              <p>Conclusion</p>
              <FaAngleDown className={styles.angle_down} />
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
          addFieldData={addFieldData}
          setAddFieldData={setAddFieldData}
          policyParticularsFields={policyParticularsFields}
          setPolicyParticularsFields={setPolicyParticularsFields}
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
          assessmentLossDescription={assessmentLossDescription}
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
            width: "100vw !important",
            paddingLeft: "40px",
            paddingRight: "40px",
            // backgroundColor: "white",
            pageBreakAfter: "always",

            backgroundImage: "url(/cover.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            paddingBottom: "0px",
            paddingTop: "0px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              height: "1000px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                // backgroundColor: "green",
              }}
            >
              <Image
                src={irmPng}
                className={styles.irm_logo}
                style={{
                  height: "90px",
                  width: "640px",
                  objectFit: "cover",
                  marginBottom: "250px",
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                paddingLeft: "25vw",
                // backgroundColor: "pink",
              }}
            >
              <p
                style={{
                  fontSize: "27px",
                  marginBottom: "20px",
                  color: "blue",
                  textAlign: "center",
                  fontWeight: "300",
                }}
              >
                {headerSectionData.name}
              </p>
              <br></br>
              <p
                style={{
                  fontSize: "27px",
                  textAlign: "center",
                  lineHeight: "1.5",
                }}
              >
                {headerSectionData.reason}
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              paddingTop: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "70px",
            }}
          >
            <Image
              src={irmPng}
              className={styles.irm_logo}
              style={{
                height: "70px",
                width: "500px",
                objectFit: "cover",
                margin: "50px 0",
              }}
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
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
                justifyContent: "center",
                fontWeight: "600",
                border: "0.5px solid black",
                backgroundColor: "rgb(128, 177, 128)",
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
                  padding: "10px 10px",
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
                  border: "0.5px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                  }}
                >
                  Project
                </p>
              </div>
              <div
                style={{
                  width: "75%",
                  display: "flex",

                  padding: "10px 10px",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "0.5px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "580",
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
                  padding: "10px 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "0.5px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
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
                  padding: "10px 10px",
                  justifyContent: "center",
                  border: "0.5px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "580",
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
                  padding: "10px 10px",
                  justifyContent: "center",
                  textAlign: "center",
                  border: "1pt solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
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
                  padding: "10px 10px",
                  justifyContent: "center",
                  border: "0.1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "580",
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
                  fontSize: "14px",
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
                  fontSize: "14px",
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
                  fontSize: "14px",
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
                  fontSize: "14px",
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
                  fontSize: "14px",
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
                  fontSize: "14px",
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
                  fontSize: "14px",
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
                      fontSize: "14px",
                      fontWeight: "540",
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
                      fontSize: "14px",
                      fontWeight: "540",
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
                      fontSize: "14px",
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
                      fontSize: "14px",
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
                      fontSize: "14px",
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
                      fontSize: "14px",
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
                      fontSize: "14px",
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
              fontSize: "17px",
              fontWeight: "600",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            1.0 INTRODUCTION
          </p>
          <p
            style={{
              fontSize: "14px",
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
              fontSize: "12px",
              marginTop: "20px",
            }}
          >
            We now submit our report as follows:
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "600",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            2.0 POLICY PARTICULARS
          </p>
          <div
            style={{
              display: "flex",
              textAlign: "stretch",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "30%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                THE INSURED
              </p>
              <p
                style={{
                  fontSize: "11px",
                }}
              >
                :
              </p>
            </div>
            <div
              style={{
                width: "70%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 20px",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
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
                width: "30%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                THE INSURER
              </p>
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                :
              </p>
            </div>
            <div
              style={{
                width: "70%",
                display: "flex",
                textAlign: "center",
                padding: "10px 20px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
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
                width: "30%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                TYPE OF POLICY
              </p>
              <p
                style={{
                  fontSize: "11px",
                }}
              >
                :
              </p>
            </div>
            <div
              style={{
                width: "70%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 20px",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
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
                width: "30%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                POLICY NUMBER
              </p>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "5px",
                }}
              >
                :
              </p>
            </div>
            <div
              style={{
                width: "70%",
                display: "flex",
                textAlign: "center",
                padding: "10px 20px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
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
                width: "30%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                PERIOD OF INSURANCE
              </p>
              <p
                style={{
                  fontSize: "11px",
                }}
              >
                :
              </p>
            </div>
            <div
              style={{
                width: "70%",
                display: "flex",
                textAlign: "center",
                padding: "10px 20px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
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
                width: "30%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                POLICY EXCESS
              </p>
              <p
                style={{
                  fontSize: "11px",
                }}
              >
                :
              </p>
            </div>
            <div
              style={{
                width: "70%",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                padding: "10px 20px",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                {policyParticularsData.policyExcess}
              </p>
            </div>
          </div>
          {policyParticularsFields[0] &&
          policyParticularsFields[0].name != "" ? (
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
                  width: "30%",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {policyParticularsFields[0].name.toUpperCase()}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                  }}
                >
                  :
                </p>
              </div>
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  padding: "10px 20px",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {addFieldData.field0}
                </p>
              </div>
            </div>
          ) : null}
          {policyParticularsFields[1] &&
          policyParticularsFields[1].name != "" ? (
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
                  width: "30%",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {policyParticularsFields[1].name.toUpperCase()}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                  }}
                >
                  :
                </p>
              </div>
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  padding: "10px 20px",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {addFieldData.field1}
                </p>
              </div>
            </div>
          ) : null}
          {policyParticularsFields[2] &&
          policyParticularsFields[2].name != "" ? (
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
                  width: "30%",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {policyParticularsFields[2].name.toUpperCase()}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                  }}
                >
                  :
                </p>
              </div>
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  padding: "10px 20px",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {addFieldData.field2}
                </p>
              </div>
            </div>
          ) : null}
          {policyParticularsFields[3] &&
          policyParticularsFields[3].name != "" ? (
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
                  width: "30%",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {policyParticularsFields[3].name.toUpperCase()}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                  }}
                >
                  :
                </p>
              </div>
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  padding: "10px 20px",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {addFieldData.field3}
                </p>
              </div>
            </div>
          ) : null}
          {policyParticularsFields[4] &&
          policyParticularsFields[4].name != "" ? (
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
                  width: "30%",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {policyParticularsFields[4].name.toUpperCase()}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                  }}
                >
                  :
                </p>
              </div>
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  padding: "10px 20px",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {addFieldData.field4}
                </p>
              </div>
            </div>
          ) : null}
          <p
            style={{
              fontSize: "17px",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            3.0 INSPECTION AND VERFICATIONS
          </p>
          <p
            style={{
              fontSize: "14px",
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
              marginTop: "30px",
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
              fontSize: "14px",
              marginTop: "20px",
            }}
          >
            {observationsAndVerificationsData[0].conclusion}
          </p>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            4.0 CAUSE OF LOSS
          </p>
          <p
            style={{
              fontSize: "14px",
              marginTop: "20px",
            }}
          >
            {causeOfLoss.causeOfLoss}
          </p>
          <p
            style={{
              fontSize: "17px",
              marginTop: "20px",
              fontWeight: "600",
            }}
          >
            5.0 ASSESSMENT
          </p>
          <p
            style={{
              fontSize: "14px",
              marginTop: "20px",
            }}
          >
            {assessmentLossDes.des}
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
                fontSize: "13px",
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
              marginTop: "20px",
              // border: "1px solid black",
            }}
          >
            {assessmentLossFields[0] && assessmentLossFields[0].name != "" ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "7px",
                  border: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {assessmentLossFields[0].name}
                </p>
              </div>
            ) : null}
            {assessmentLossFields[1] && assessmentLossFields[1].name != "" ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  padding: "7px",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {assessmentLossFields[1].name}
                </p>
              </div>
            ) : null}
            {assessmentLossFields[2] && assessmentLossFields[2].name != "" ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid black",
                  padding: "7px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {assessmentLossFields[2].name}
                </p>
              </div>
            ) : null}
            {assessmentLossFields[3] && assessmentLossFields[3].name != "" ? (
              <div
                style={{
                  width: "100%",
                  padding: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {assessmentLossFields[3].name}
                </p>
              </div>
            ) : null}
            {assessmentLossFields[4] && assessmentLossFields[4].name != "" ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: "7px",
                  justifyContent: "center",
                  border: "1px solid black",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {assessmentLossFields[4].name}
                </p>
              </div>
            ) : null}
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding: "7px",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                Description
              </p>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "7px",
                border: "1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                Claim, Rs
              </p>
            </div>
            <div
              style={{
                width: "100%",
                padding: "7px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                Asse, Rs
              </p>
            </div>
          </div>
          <div>
            {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
            {assessmentLossTable &&
              assessmentLossTable.map((data, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "stretch",
                    // justifyContent: "inherit",
                    // marginTop: "20px",
                    // border: "1px solid black",
                  }}
                >
                  {assessmentLossFields[0] &&
                  assessmentLossFields[0].name != "" ? (
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        padding: "5px",
                        justifyContent: "center",
                        border: "1px solid black",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        {data[`field${0}`]}
                      </p>
                    </div>
                  ) : null}
                  {assessmentLossFields[1] &&
                  assessmentLossFields[1].name != "" ? (
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "7px",
                        border: "1px solid black",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        {data[`field${1}`]}
                      </p>
                    </div>
                  ) : null}
                  {assessmentLossFields[2] &&
                  assessmentLossFields[2].name != "" ? (
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        padding: "7px",
                        justifyContent: "center",
                        border: "1px solid black",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        {data[`field${2}`]}
                      </p>
                    </div>
                  ) : null}
                  {assessmentLossFields[3] &&
                  assessmentLossFields[3].name != "" ? (
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        padding: "7px",
                        justifyContent: "center",
                        border: "1px solid black",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        {data[`field${3}`]}
                      </p>
                    </div>
                  ) : null}
                  {assessmentLossFields[4] &&
                  assessmentLossFields[4].name != "" ? (
                    <div
                      style={{
                        width: "100%",
                        padding: "7px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid black",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        {data[`field${4}`]}
                      </p>
                    </div>
                  ) : null}
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "7px",
                      border: "1px solid black",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      {data.description}
                    </p>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid black",
                      padding: "5px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      <Currency locale="en-IN" currency="INR">
                        {Number(data.claimAmout)}
                      </Currency>
                    </p>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "7px",
                      border: "1px solid black",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      <Currency locale="en-IN" currency="INR">
                        {Number(data.assessmentAmount)}
                      </Currency>
                    </p>
                  </div>
                </div>
              ))}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginTop: "10px",
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "15px",
                  justifyContent: "center",
                  width: "238px",
                  padding: "7px 3px",
                  border: "1px solid black",
                }}
              >
                total claim Amount
              </p>
              <p
                style={{
                  width: "238px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "7px 3px",
                  fontSize: "15px",
                  border: "1px solid black",
                }}
              >
                <Currency locale="en-IN" currency="INR">
                  {Number(totalClaimAm)}
                </Currency>
              </p>
            </div>{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                margin: "0 0",
              }}
            >
              <p
                style={{
                  width: "238px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  padding: "7px 3px",
                  border: "1px solid black",
                }}
              >
                total assessment Amount
              </p>
              <p
                style={{
                  width: "238px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  padding: "7px 3px",
                  border: "1px solid black",
                }}
              >
                <Currency locale="en-IN" currency="INR">
                  {Number(totalAssessmentAm)}
                </Currency>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginTop: "0",
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "238px",
                  fontSize: "15px",
                  padding: "7px 3px",
                  border: "1px solid black",
                }}
              >
                ratio
              </p>
              <p
                style={{
                  width: "238px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "15px",
                  justifyContent: "center",
                  padding: "7px 3px",
                  border: "1px solid black",
                }}
              >
                {(totalClaimAm * 100) / totalAssessmentAm} %
              </p>
            </div>
            <p
              style={{
                fontSize: "16px",
                marginTop: "20px",
                marginBottom: "20px",
                fontWeight: "600",
              }}
            >
              Notes
            </p>
            <div style={{ width: "100%" }}>
              {assessmentLossNotes.map((data, index) => (
                <div key={index} style={{ display: "flex" }}>
                  <p
                    style={{
                      width: "10%",
                      padding: "7px 5px",
                      display: "flex",
                      fontSize: "15px",
                      alignItems: "center",
                    }}
                  >
                    {index + 1} ){" "}
                  </p>
                  <p
                    style={{
                      width: "90%",
                      padding: "7px 5px",
                      display: "flex",
                      fontSize: "15px",
                      alignItems: "center",
                    }}
                  >
                    {data.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p
            style={{
              fontSize: "17px",
              marginTop: "20px",
              fontWeight: "600",
            }}
          >
            6.0 CONCLUSION
          </p>
          <p
            style={{
              fontSize: "13px",
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
              marginTop: "30px",
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
