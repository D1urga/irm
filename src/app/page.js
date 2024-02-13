"use client";
import Image from "next/image";
import { Margin, Resolution, usePDF } from "react-to-pdf";
import styles from "./page.module.css";
import { FaAngleDown, FaArrowLeft } from "react-icons/fa";
import HeaderSection from "./components/headerSection.js";
import { useEffect, useState } from "react";
import ProjectDescription from "./components/projectDescription.js";
import PolicyParticulars from "./components/policyParticulars.js";
import ObservationsAndVerifications from "./components/observationsAndVerifications.js";
import CauseOfLoss from "./components/causeOfLoss";
import AssessmentOfLoss from "./components/assessmentOfLoss";
import Conclusion from "./components/conclusion";

export default function Home() {
  const [list, setList] = useState(["anoop"]);
  const [list1, setList1] = useState(0);
  const { toPDF, targetRef } = usePDF({
    method: "save",
    filename: "multipage-example.pdf",
    resolution: Resolution.LOW,
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
        <div className={styles.btn_div}>
          <button className={styles.btn1}>Save</button>
          <button className={styles.btn2}>Delete</button>
          <button className={styles.btn3}>Download</button>
        </div>
      </div>
      {currentSection === 0 ? (
        <div>
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
          <p className={styles.preview}>Preview</p>
          {/* <p>{list.lenght}</p>
          {list &&
            list.map((val, index) => (
              <p
                key={index}
                onClick={() => {
                  const data = list.concat("kumar");
                  setList(data);
                  console.log(list);
                }}
              >
                {val}
              </p>
            ))} */}

          {/* <button onClick={toPDF}>Download PDF</button>
          <div ref={targetRef} className={styles.test_div}>
            <img
              src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSb5YTP_Zfb9Aj9h3n79iDjofIAWbIRCn2mbRxjP04h8I7nDF1tj5DP_oCVy4xqRAyd5fxaiA9eZGJ0W4I"
              height={200}
              width={300}
            ></img>
            <img
              src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSb5YTP_Zfb9Aj9h3n79iDjofIAWbIRCn2mbRxjP04h8I7nDF1tj5DP_oCVy4xqRAyd5fxaiA9eZGJ0W4I"
              height={200}
              width={300}
            ></img>
            <img
              src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSb5YTP_Zfb9Aj9h3n79iDjofIAWbIRCn2mbRxjP04h8I7nDF1tj5DP_oCVy4xqRAyd5fxaiA9eZGJ0W4I"
              height={200}
              width={300}
            ></img>
            <img
              src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSb5YTP_Zfb9Aj9h3n79iDjofIAWbIRCn2mbRxjP04h8I7nDF1tj5DP_oCVy4xqRAyd5fxaiA9eZGJ0W4I"
              height={200}
              width={300}
            ></img>
            <img
              src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSb5YTP_Zfb9Aj9h3n79iDjofIAWbIRCn2mbRxjP04h8I7nDF1tj5DP_oCVy4xqRAyd5fxaiA9eZGJ0W4I"
              height={200}
              width={300}
            ></img>
            <img
              src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSb5YTP_Zfb9Aj9h3n79iDjofIAWbIRCn2mbRxjP04h8I7nDF1tj5DP_oCVy4xqRAyd5fxaiA9eZGJ0W4I"
              height={200}
              width={300}
            ></img>

            <p className={styles.test}>
              Paragraphs are the building blocks of papers. Many students define
              paragraphs in terms of length: a paragraph is a group of at least
              five sentences, a paragraph is half a page long, etc. In reality,
              though, the unity and coherence of ideas among sentences is what
              constitutes a paragraph. A paragraph is defined as “a group of
              sentences or a single sentence that forms a unit” (Lunsford and
              Connors 116). Length and appearance do not determine whether a
              section in a paper is a paragraph. For instance, in some styles of
              writing, particularly journalistic styles, a paragraph can be just
              one sentence long. Ultimately, a paragraph is a sentence or group
              of sentences that support one main idea. In this handout, we will
              refer to this as the “controlling idea,” because it controls what
              happens in the rest of the paragraph. How do I decide what to put
              in a paragraph? Before you can begin to determine what the
              composition of a particular paragraph will be, you must first
              decide on an argument and a working thesis statement for your
              paper. What is the most important idea that you are trying to
              convey to your reader? The information in each paragraph must be
              related to that idea. In other words, your paragraphs should
              remind your reader that there is a recurrent relationship between
              your thesis and the information in each paragraph. A working
              thesis functions like a seed from which your paper, and your
              ideas, will grow. The whole process is an organic one—a natural
              progression from a seed to a full-blown paper where there are
              direct, familial relationships between all of the ideas in the
              paper. The decision about what to put into your paragraphs begins
              with the germination of a seed of ideas; this “germination
              process” is better known as brainstorming. There are many
              techniques for brainstorming; whichever one you choose, this stage
              of paragraph development cannot be skipped. Building paragraphs
              can be like building a skyscraper: there must be a well-planned
              foundation that supports what you are building. Any cracks,
              inconsistencies, or other corruptions of the foundation can cause
              your whole paper to crumble.
            </p>
          </div> */}
        </div>
      ) : currentSection === 1 ? (
        <HeaderSection
          onClickFun={() => {
            setCurrentState(0);
          }}
        />
      ) : currentSection == 2 ? (
        <ProjectDescription
          onClickFun={() => {
            setCurrentState(0);
          }}
        />
      ) : currentSection == 3 ? (
        <PolicyParticulars
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
    </div>
  );
}
