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

  const [policyParticularsData, setPolicyParticularsData] = useState({
    insurer: "",
    insured: "",
    typesOfPolicy: "",
    policyNumber: "",
    periodOfInsurance: "",
    policyExcess: "",
  });

  const [projectDescriptionData, setProjectDescriptionData] = useState([
    {
      projectTitle: "",
      client: "",
      documentReference: "",
    },
    {
      status: "",
      author: "",
      reviewer: "",
      distribution: "",
      mode: "",
      date: "",
    },
    {
      status: "",
      author: "",
      reviewer: "",
      distribution: "",
      mode: "",
      date: "",
    },
    {
      status: "",
      author: "",
      reviewer: "",
      distribution: "",
      mode: "",
      date: "",
    },
  ]);
  // /////////////////////////
  const [list, setList] = useState(["anoop"]);
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
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  return (
    <div className={styles.outer_div}>
      <div className={styles.topbar}>
        <p>Dashboard</p>
        <p>{headerSectionData.reason}</p>
        <p>{headerSectionData.name}</p>
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
          onClickFun={() => {
            setCurrentState(0);
          }}
        />
      ) : currentSection === 5 ? (
        <CauseOfLoss
          onClickFun={() => {
            setCurrentState(0);
          }}
        />
      ) : currentSection === 6 ? (
        <AssessmentOfLoss
          onClickFun={() => {
            setCurrentState(0);
          }}
        />
      ) : currentSection === 7 ? (
        <Conclusion
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
      <div>
        <div ref={componentRef} className={styles.print_pdf}>
          <Image src={irmLogo} className={styles.irm_logo} />
          <p className={styles.para}>
            aspbfasjfads;fds daspbfasjfads;fds daspbfasjfads;fds asjfads;fds
            daspbfasjfads;fds daspbfasjfads;fds daspbfasjfads;fds
            daspbfasjfads;fds daspbfasjfads;fds daspbfasjfads;fds
          </p>
          <div className={styles.testing}>anoop kumar</div>

          <h1>bhcsogfbasfipgsbfyds</h1>
        </div>
      </div>
    </div>
  );
}
