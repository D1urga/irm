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
  FaArrowRight,
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
  const lossSuggestion = [
    "Based on the provision of the Fire Insurance Policy held by Insured, there is no cover for malicious damages caused with intention to steal from the insured property. We additionally believe that this claim cannot be considered under the burglary clause –given there has not been any forced entry/ exit from Insured premises.We thus believe this claim is not admissible.",
    `Based on the provision of the Fire Insurance Policy held by Insured, there is no cover 
for malicious damages caused with intention to steal from the insured property. We 
additionally believe that this claim cannot be considered under the burglary clause –
given there has not been any forced entry/ exit from Insured premises.
We thus believe this claim is not admissible`,
    `Assessment of loss is based on declaration of insured, in line with the provisions of 
insurance policy.
`,
    `Below tables details our observations and assessment to restore surveyed premises 
to the condition before incidence. Our assessment is based on our survey, the 
quantities measured on site and as per current market rates for the required repairs/ 
replacement Insured provided overall cost of re-instatement. Our assessment, as presented in 
below table, details all losses encountered at Chebel Kosovo cloakroom.
We are of opinion that damaged fixtures/ fittings and appliances, remaining electrical 
wires do not have any salvage value.`,
    `Below tables details our observations and assessment to restore surveyed premises 
to the condition before incidence. Our assessment is based on our survey, the 
quantities measured on site and as per current market rates for the required repairs/ 
replacement Insured provided overall cost of re-instatement. Our assessment, as presented in 
below table, details all losses encountered at Chebel Kosovo cloakroom.
We are of opinion that damaged fixtures/ fittings and appliances, remaining electrical 
wires do not have any salvage value`,
    `Based on our observations and declarations of Insured – we are of opinion the claim 
is admissible under CAR held by Insured for the Villa at Anahita Project Assessment is based on repair basis as per quotes supplied to us, presented in 
appendix 2. 
Details of our assessment is presented in table below – which is exclusive of VAT`,
    `Based on our survey and observations made during our visit, we believe there is 
adequacy of sum insured.
Our assessment of loss is presented in table below`,
    `In line with above information, our finding on site at time of survey and the clauses 
within Policy held by Insured – we believe this claim admissible. There has been no 
violation to warranties under the concerned policy, as we found properly maintained 
portable fire extinguishers installed within the premises and those which have been 
used to extinguish the fire.
Below table presents our assessment of losses encountered by Insured`,
    `In line with above information, our finding on site at time of survey and the clauses 
within Policy held by Insured – we believe this claim admissible. There has been no 
violation to warranties under the concerned policy, as we found properly maintained 
portable fire extinguishers installed within the premises and those which have been 
used to extinguish the fire.
Below table presents our assessment of losses encountered by Insured`,
    `Assessment is based on declaration of Insured and in light of submitted documents, 
considering losses encountered following malicious damage to insured’s property by 
unidentified individuals.
Assessment is exclusive of VAT as Insured is VAT registered under VAT20002581. 
Policy excess applied as provisions of the Policy Documents.
Based on survey conducted, we cannot assess adequacy of sum insured for interest 
1 (Furniture, Fixtures & Fittings, Equipment, Slot Machines)
From the policy documents, no exclusion applicable with regards to availability of 
Security guard/ Guarding Services and/or Intruder alarm and/ or CCTV system on 
site. No breach of warranties were observed in relation to the reported incidence.
Assessment is based on repairs basis to re-instate Insured’s equipment and 
installation at condition prior to incidence, as per the requirement under current 
policy held by Insured`,
  ];
  const desSuggestion = [
    "Replacement of damaged water filterItem not covered under current policy held by Insured (repairs of water apparatus",
    `Replacement of damaged water filter
Item not covered under current policy held by Insured (repairs 
of water apparatus)`,
    `Replacement of TV cabinet
Unit was found damaged, and we believe that the damages are 
irreversible, thus requires systematic replacement.
Replacement unit proposed by Insured is acceptable and 
considered adequate replacement – refer to Annex 2.`,
    `Making good of wall finishes.
Not considered, as we are of opinion the wall finishes were not 
damaged during reported incidence but due to gradual 
deterioration following some other root cause.`,
    `Doors with burglar proof, cut and carried away.
Assessment based on replacement basis, 
including labour & transport.
`,
    `A metal door double swing + burglar proof cut and 
carried away + three glass (30cm*33cm) broken. 
Assessment based on repairs basis, including 
labour and material. Transport assigned to above 
item.`,
    `Replacement of kitchen hood ventilation duct
Not admissible as not considered damaged. Proper 
cleaning required `,
    `Cleaning & Paint (labour and material) – chemical cleaning of wall 
surfaces, prepare surfaces to receive fresh layers of water-based 
emulsion paint, clearing of debris and application of three layers of 
water-based emulsion paint.
Rate includes labour, tools, material, and consumables required for 
the indicated making good works. This includes the therapy room 
and corridor area.
Refer to Annex 1 - Quote supplied by Insured was considered and 
found to be fair and reasonable for the required remedial works`,
  ];
  const noteSuggestion = [
    "Insured mentioned their intention to claim for damages to kitchen cabinets as and when this may appear – at time of survey, Insured was clearly mentioned that there are no chances for damages to kitchen cabinet following water accumulation reported on 04th August 2022, since there is no visible sign of damages one month later to incidence. Insured was explained that water damages to wood would have shown in days, ad if it did not show after one month of incidence, it clearly means that the wood has not suffered anydamages due to water Thus, no claim with regards to damages kitchen cabinet will be considered been cause by water accumulation during the incidence recorded on 04th August 2022.",

    `Damages (scratches to the appliances) were visible to the naked eyes and might 
not be clear on pictures shown in this report.`,
    `Assessment of damages is based on our observations made on site at time of 
survey`,
    `All prices are from quotes from appliances supplier`,
    `Fortress is the sole distributor and dealer for appliances found damaged on site 
– thus no counter quotes for required repairs were sought.`,
    `Additionally, repairs by any other service provider may void appliances 
warrantee, thus repairs only from Fortress recommended and considered in this 
case`,
    `Quotes supplied by Fortress appear to be fair and reasonable.`,
    `Assessment is exclusive of VAT, as Insured has not claimed VAT.`,
    `We cannot access adequacy of sum insured`,
    `We cannot ascertain the condition of declared damaged appliances prior to 
incidence. However, we reply on commissioning details to understand that 
appliances were delivered and installed on site without reported damage`,
    `Our assessment is based on market rates for required making good works / 
replacement of damaged fixtures – as assessed at time of survey. Quotes 
submitted by Insured appears higher than market rates, thus not considered for 
our assessment`,
    `Assessment is based on all required works for making good/ replacement of 
Insured’s property – which have been declared and found damaged in the reported 
incidence.`,
    `Our assessment is based on inspection carried out post the incidence, we can
neither affirm the state of polycarbonate sheets prior to the incident nor if these 
are covered/ or being claimed under any other insurance that Insured may have.
`,
  ];
  const [tablePage, setTablePage] = useState(0);
  const [islossSuggestionShowing, setIslossSuggestionShowing] = useState(false);
  const [isdesSuggestionShowing, setIsdesSuggestionShowing] = useState(false);
  const [isnoteSuggestionShowing, setIsnoteSuggestionShowing] = useState(false);
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
  const handleDesChange = (event, val) => {
    setAssessmentLossDes({
      ...assessmentLossDes,
      des: val,
    });
  };
  const handleChange1 = (event) => {
    setDes({
      ...des,
      [event.target.name]: event.target.value,
    });
  };
  const handleDescriptionChange = (event, val) => {
    setDes({
      ...des,
      des: val,
    });
  };
  const handleAddChange = (event) => {
    setAddField({
      ...addField,
      [event.target.name]: event.target.value,
    });
  };
  const [ref, setRef] = useState({
    ref: "",
    note: "",
  });
  const handleRefChange = (event) => {
    setRef({
      ...ref,
      [event.target.name]: event.target.value,
    });
  };
  const handleRefSuggChange = (event, val) => {
    setRef({
      ...ref,
      note: val,
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
                    <p>assessment {index + 1}</p>
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
          <p
            style={{ cursor: "pointer" }}
            className={styles.des}
            onClick={() => {
              setIslossSuggestionShowing(true);
              setIsdesSuggestionShowing(false);
              setIsnoteSuggestionShowing(false);
            }}
          >
            Assessment of Loss Description{" "}
            <span style={{ fontSize: "12px", color: "blue" }}>
              (see suggestions)
            </span>
          </p>
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
          <p
            style={{ cursor: "pointer" }}
            className={styles.des_title}
            onClick={() => {
              setIslossSuggestionShowing(false);
              setIsdesSuggestionShowing(true);
              setIsnoteSuggestionShowing(false);
            }}
          >
            Description{" "}
            <span style={{ fontSize: "12px", color: "blue" }}>
              (see suggestions)
            </span>
          </p>
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
        <div className={styles.outer_div4}>
          <p className={styles.des}>Add Note</p>
          <p className={styles.des_title}>Ref</p>
          <input
            className={styles.claim_input}
            value={ref.ref}
            name="ref"
            onChange={handleRefChange}
            placeholder="ref..."
          ></input>
          <p
            style={{ cursor: "pointer" }}
            className={styles.des_title}
            onClick={() => {
              setIslossSuggestionShowing(false);
              setIsdesSuggestionShowing(false);
              setIsnoteSuggestionShowing(true);
            }}
          >
            Note{" "}
            <span style={{ fontSize: "12px", color: "blue" }}>
              (see suggestions)
            </span>
          </p>
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
              {/* <button className={styles.delete_btn}>Delete</button> */}
            </div>
          </div>
        </div>
      ) : null}
      <div
        className={
          islossSuggestionShowing ? styles.suggestion : styles.suggestion1
        }
      >
        <div className={styles.suggestion_option}>
          <FaArrowRight
            className={styles.arrow_back}
            onClick={() => {
              setIslossSuggestionShowing(false);
              setIsdesSuggestionShowing(false);
              setIsnoteSuggestionShowing(false);
            }}
          />
          <p>reason suggestions</p>
        </div>
        <div className={styles.scrollBar}>
          {lossSuggestion.map((data, index) => (
            <div
              key={index}
              className={styles.suggestion_inner_div}
              onClick={(e) => {
                handleDesChange(e, data);
              }}
            >
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          isdesSuggestionShowing ? styles.suggestion : styles.suggestion1
        }
      >
        <div className={styles.suggestion_option}>
          <FaArrowRight
            className={styles.arrow_back}
            onClick={() => {
              setIslossSuggestionShowing(false);
              setIsdesSuggestionShowing(false);
              setIsnoteSuggestionShowing(false);
            }}
          />
          <p>reason suggestions</p>
        </div>
        <div className={styles.scrollBar}>
          {desSuggestion.map((data, index) => (
            <div
              key={index}
              className={styles.suggestion_inner_div}
              onClick={(e) => {
                handleDescriptionChange(e, data);
              }}
            >
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          isnoteSuggestionShowing ? styles.suggestion : styles.suggestion1
        }
      >
        <div className={styles.suggestion_option}>
          <FaArrowRight
            className={styles.arrow_back}
            onClick={() => {
              setIslossSuggestionShowing(false);
              setIsdesSuggestionShowing(false);
              setIsnoteSuggestionShowing(false);
            }}
          />
          <p>reason suggestions</p>
        </div>
        <div className={styles.scrollBar}>
          {noteSuggestion.map((data, index) => (
            <div
              key={index}
              className={styles.suggestion_inner_div}
              onClick={(e) => {
                handleRefSuggChange(e, data);
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
