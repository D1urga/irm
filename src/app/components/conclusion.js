import React, { useState } from "react";
import styles from "./styles/conclusion.module.css";
import axios from "axios";
import {
  FaAngleUp,
  FaTrash,
  FaEdit,
  FaPlusCircle,
  FaArrowRight,
} from "react-icons/fa";

export default function Conclusion({
  conclusionDes,
  setConclusionDes,
  conclusionTable,
  setConclusionTable,
  conImageUrl,
  setConImageUrl,
  ismain,
  setIsmain,
  onClickFun,
}) {
  const suggestions = [
    "Assessment of the losses encountered by Mrs. Marie Jessica Nathalie Joumont is estimated at Rs 1,999.00, inclusive of VAT and after applicable policy excesses.Under the FIRE AND ALLIED PERILS, it is commonly understood that repairs/ making good of damaged pipework and any associative civil and/ or fitout work is not covered, thus not considered under this claim.This is a draft report and may require review/ revision/ amendment based on receipt of updated invoices/ quotes or claims or any other reason that may be duly justified.This report is made for loss adjustment purposes only.Statements in this report are fair representation of our findings at time of survey, declarations made by Insured and our interpretation of the policy documents.Facts and assumptions presented in this report cannot be used for any other loss adjustment exercise.This report is issued in electronic format and without any prejudice.",
    `No settlement is proposed for the claim initiated by Insured following malicious 
damages to insured property.
Based on our survey, we cannot confirm adequacy of sum insured covered under 
current policy.
In event Insurer would like to consider a settlement against losses encountered by 
Insured as a commercial gesture, below table may be used. This assessment is based 
on the detailed quote submitted by Insured, presented in Annex 2. The rates are 
acceptable and VAT inclusive`,
    `Assessment of the losses encountered by Mrs. Marie Jessica Nathalie Joumont is 
estimated at Rs 1,999.00, inclusive of VAT and after applicable policy excesses.
Under the FIRE AND ALLIED PERILS, it is commonly understood that repairs/ 
making good of damaged pipework and any associative civil and/ or fitout work is 
not covered, thus not considered under this claim.
This is a draft report and may require review/ revision/ amendment based on receipt 
of updated invoices/ quotes or claims or any other reason that may be duly justified.
This report is made for loss adjustment purposes only.
Statements in this report are fair representation of our findings at time of survey, 
declarations made by Insured and our interpretation of the policy documents.
Facts and assumptions presented in this report cannot be used for any other loss 
adjustment exercise.
This report is issued in electronic format and without any prejudice`,
    `In line with above information, our finding on site at time of survey and the clauses of 
Policy held by Insured – we believe the claim is admissible for the location surveyed.
We cannot confirm adequacy of sum insured. We assume surveyed location in 
covered under present policy as part of Insured’s properties within the Beau Bassin/ 
Rose Hill jurisdiction.
Best settlement for losses encountered by Municipal council of Beau Bassin/ Rose 
Hill following act of malicious damages and burglary at Chebel Sports Complex 
Kosovo Cloakroom stands at Rs 425,115.00 – after applicable policy excess and 
inclusive of VAT.
This is a draft report and may require review/ revision/ amendment based on receipt
of updated invoices/ quotes or claims or any other reason that may be duly justified.
This report is issued in electronic format and without any prejudice.
This report is made for loss adjustment purposes only. Statements in this report are 
fair representation of our findings at time of survey, declarations made by Insured and 
our interpretation of the policy documents. Facts and assumptions presented in this 
report cannot be used for any other loss adjustment exercise.
`,
    `In line with above information, our finding on site at time of survey and the clauses of 
Policy held by Insured – we believe the claim is admissible for the location surveyed.
We cannot confirm adequacy of sum insured. We assume surveyed location in 
covered under present policy as part of Insured’s properties within the Beau Bassin/ 
Rose Hill jurisdiction.
Best settlement for losses encountered by Municipal council of Beau Bassin/ Rose 
Hill following act of malicious damages and burglary at Chebel Sports Complex 
Kosovo Cloakroom stands at Rs 425,115.00 – after applicable policy excess and 
inclusive of VAT.
This is a draft report and may require review/ revision/ amendment based on receipt
of updated invoices/ quotes or claims or any other reason that may be duly justified.
This report is issued in electronic format and without any prejudice.
This report is made for loss adjustment purposes only. Statements in this report are 
fair representation of our findings at time of survey, declarations made by Insured and 
our interpretation of the policy documents. Facts and assumptions presented in this 
report cannot be used for any other loss adjustment exercise.`,
    `Assessment of the loss is estimated at Rs 8,500.00 after applicable policy excess as 
per CAR schedule.
This is a draft report and may require review/ revision/ amendment based on receipt 
on updated invoices/ quotes or claims or any other reason that may be duly justified.
This report is made for loss adjustment purposes only. Statements in this report are 
fair representation of our findings at time of survey, declarations made by Insured 
and our interpretation of the policy documents.
Facts and assumptions presented in this report cannot be used for any other loss 
adjustment exercise.
IRM has assumed all information received from Insured in the preparation of the 
Report to be correct. While IRM has exercised a customary level of judgment or due 
diligence in the use of such information, IRM assumes no responsibility for the 
consequences of any error or omission contained therein.`,
    `Adjustment of losses encountered by MR PADIACHY, following damage caused by 
cyclone BATISIRAI at his residence, is estimated at Rs 18,200.00 - including VAT, 
excluding any loss of use and after policy excess.
This is a draft report and may require review/ revision/ amendment based on receipt 
of updated information/ invoices/ quotes or claims or any other reason that may be 
duly justified.
This report is issued in electronic format and without any prejudice.`,
    `Assessment of the loss encountered by FONDATION POUR L'ENFANCE TERRE DE 
PAIX following fire outbreak within the therapy room of Insured’s premises at Albion 
is estimated at Rs 137,110.00, inclusive of VAT and after applicable Policy excess.
Based on our survey, we cannot confirm adequacy of sum insured.
This is a draft report and may require review/ revision/ amendment based on receipt 
of updated invoices/ quotes or claims or any other reason that may be duly justified.
This report is made for loss adjustment purposes only. Statements in this report are 
fair representation of our findings at time of survey, declarations made by Insured and 
our interpretation of the policy documents.
Facts and assumptions presented in this report cannot be used for any other loss 
adjustment exercise.
This report is issued in electronic format and without any prejudice`,
    `Assessment of the losses encountered by Centre Gaming House Ltd., following 
malicious damage to equipment and installation at Insured premises in Rose Hill is 
estimated at Rs 148,000.00, after applicable policy excess and exclusive of VAT.
This is a draft report and may require review/ revision/ amendment based on receipt 
of updated invoices/ quotes or claims or any other reason that may be duly justified This report is made for loss adjustment purposes only.
Statements in this report are fair representation of our findings at time of survey, 
declarations made by Insured and our interpretation of the policy documents.
Facts and assumptions presented in this report cannot be used for any other loss 
adjustment exercise.
IRM has assumed all information received from Insured and its contractor (Rey & 
Lenferna) in the preparation of the Report to be correct. While IRM has exercised a 
customary level of judgment or due diligence in the use of such information, IRM
assumes no responsibility for the consequences of any error or omission contained 
therein.
This report is issued in electronic format and without any prejudice.
`,
  ];
  const [page, setPage] = useState(0);
  const [isSuggestionShowing, setIsSuggestionShowing] = useState(false);
  const [isShowingConclusion, setIsShowingConclusion] = useState(true);
  const [isShowingAttachement, setIsShowingAttachement] = useState(false);
  const [isuploadingAttachement, setUploadingAttachement] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [cuurent, setCurrentImage] = useState(null);

  const [title, setTitle] = useState({ title: "" });

  const [newtitle, setnewTitle] = useState({ title: "" });

  const handleChangeTitle = (event) => {
    setTitle({
      ...title,
      [event.target.name]: event.target.value,
    });
  };
  const handleChangenewTitle = (event) => {
    setnewTitle({
      ...newtitle,
      [event.target.name]: event.target.value,
    });
  };

  const [isGenerating, setIsGenerating] = useState(false);

  const generateSuggestion = async () => {
    setIsGenerating(true);
    try {
      const response = await axios.post(
        "https://irmbackend.onrender.com/api/v1/reports/generate",
        { input: conclusionDes.conclusionDes }
      );
      setConclusionDes({
        ...conclusionDes,
        conclusionDes: response.data.data,
      });
    } catch (error) {
      console.error("Error posting data", error);
      throw error;
    }
    setIsGenerating(false);
  };

  const handleAvatarchange = (e) => {
    setAvatar(e.target.files[0]);
    setCurrentImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (event) => {
    setConclusionDes({
      ...conclusionDes,
      [event.target.name]: event.target.value,
    });
  };
  const handleSuggestionChange = (event, val) => {
    setConclusionDes({
      ...conclusionDes,
      conclusionDes: val,
    });
  };

  const handleShowingImageChange = (event, id) => {
    const clone = [...conclusionTable];
    const obj = clone[id];
    const clone2 = [...conImageUrl];
    clone[id] = {
      title: title.title,
      attachmentUrl: cuurent,
    };
    clone2[id] = {
      url: avatar,
    };
    setConImageUrl([...clone2]);
    setConclusionTable([...clone]);
  };
  const handleShowingImageTitleChange = (event, id) => {
    const clone = [...conclusionTable];
    const obj = clone[id];
    clone[id] = {
      title: title.title,
      attachmentUrl: avatar,
    };
    setConclusionTable([...clone]);
  };
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.title}>
          <p>Conclusion</p>
          {/* <p>{conImageUrl[0].imgurl}</p> */}
          <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
        </div>
        <button
          className={isShowingConclusion ? styles.intro_btn : styles.intro_btn1}
          onClick={() => {
            setIsShowingConclusion(true);
            setIsShowingAttachement(false);
            setUploadingAttachement(false);
          }}
        >
          Conclusion Description
        </button>
        <p className={styles.add_attach}>Attachments</p>
        <div className={styles.conclusion_table_div}>
          {conclusionTable.length != 0 ? (
            <div>
              {" "}
              {conclusionTable.map((data, index) => (
                <div
                  key={index}
                  className={
                    isShowingAttachement ? styles.tables : styles.tables1
                  }
                  onClick={() => {
                    setIsShowingConclusion(false);
                    setIsShowingAttachement(true);
                    setUploadingAttachement(false);
                    setPage(index);
                  }}
                >
                  <p>attachment {index + 1}</p>
                  <div className={styles.logos}>
                    {/* <FaPlusCircle className={styles.logo1} />
                <FaEdit className={styles.logo2} /> */}
                    <FaTrash
                      className={styles.logo3}
                      onClick={() => {
                        const subarr1 = conclusionTable.slice(0, index);
                        const subarr2 = conclusionTable.slice(
                          index + 1,
                          conclusionTable.length
                        );
                        const sb1 = conImageUrl.slice(0, index);
                        const sb2 = conImageUrl.slice(
                          index + 1,
                          conImageUrl.length
                        );
                        const newdata2 = [...sb1, ...sb2];

                        setConImageUrl(newdata2);
                        const newData = [...subarr1, ...subarr2];
                        setConclusionTable(newData);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ fontSize: "12.2px", marginTop: "6px", color: "gray" }}>
              no data available click Add Issue to fill
            </p>
          )}
        </div>
        <button
          className={styles.add_btn1}
          onClick={() => {
            setIsShowingConclusion(false);
            setIsShowingAttachement(false);
            setUploadingAttachement(true);
          }}
        >
          Add Attachment
        </button>
      </div>
      {isShowingConclusion ? (
        <div className={styles.outer_div2}>
          <p
            style={{ cursor: "pointer" }}
            className={styles.des}
            onClick={() => {
              setIsSuggestionShowing(!isSuggestionShowing);
            }}
          >
            Conclusion Description{" "}
            <span style={{ fontSize: "12px", color: "blue" }}>
              (see suggestions)
            </span>
          </p>
          <textarea
            value={
              isGenerating
                ? "loading data please wait .."
                : conclusionDes.conclusionDes
            }
            onChange={handleChange}
            name="conclusionDes"
            className={styles.intro_textarea}
            placeholder="conclusion description ..."
          ></textarea>{" "}
          <p
            onClick={() => {
              generateSuggestion();
            }}
            className={styles.textp}
          >
            Generate Text
          </p>
        </div>
      ) : isShowingAttachement ? (
        <div className={styles.items}>
          <p className={styles.add_attach_title}>Attachment {page + 1}</p>
          <p className={styles.des}>Title</p>
          <input
            value={
              conclusionTable.length != 0
                ? conclusionTable[page] && conclusionTable[page].title
                : ""
            }
            name="title"
            onChange={(e) => {
              handleShowingImageTitleChange(page);
            }}
            className={styles.client_input}
            placeholder="title ..."
          ></input>
          <p className={styles.des}>Attachment</p>
          <div className={styles.img}>
            <img
              src={
                ismain
                  ? conclusionTable[page] && conclusionTable[page].attachmentUrl
                  : conImageUrl[page] && conImageUrl[page].imgurl
              }
              className={styles.images}
            ></img>
          </div>{" "}
          <input
            type="file"
            name="avatar"
            id="avatar"
            onChange={handleAvatarchange}
          ></input>
          <div>
            <div>
              <button
                className={styles.add_btn}
                onClick={(e) => {
                  handleShowingImageChange(e, page);
                }}
              >
                Update
              </button>
              {/* <button className={styles.delete_btn}>Delete</button> */}
            </div>
          </div>
          {/* <div>
            <div>
              <button className={styles.add_btn}>Add</button>
              <button className={styles.delete_btn}>Delete</button>
            </div>
          </div> */}
        </div>
      ) : isuploadingAttachement ? (
        <div className={styles.items}>
          <p className={styles.add_attach_title}>Add Attachment</p>
          <p className={styles.des}>Title</p>
          <input
            value={title.title}
            name="title"
            onChange={handleChangeTitle}
            className={styles.client_input}
            placeholder="title ..."
          ></input>
          <p className={styles.des}>Attachment</p>
          <div className={styles.img}>
            <img src={cuurent} className={styles.images}></img>
          </div>
          <input
            type="file"
            name="avatar"
            id="avatar"
            onChange={handleAvatarchange}
          ></input>
          <div>
            <div>
              <button
                className={styles.add_btn}
                onClick={() => {
                  if (conclusionTable.length < 10) {
                    const obj = {
                      title: title.title,
                      attachmentUrl: cuurent,
                      attachmentImage: "",
                    };
                    let obj2 = {
                      url: avatar,
                    };

                    const newData = conclusionTable.concat(obj);
                    setConclusionTable(newData);

                    const newobj2 = conImageUrl.concat(obj2);
                    setConImageUrl(newobj2);
                  }
                }}
              >
                Add
              </button>
              {/* <button className={styles.delete_btn}>Delete</button> */}
            </div>
          </div>
        </div>
      ) : null}{" "}
      <div
        className={isSuggestionShowing ? styles.suggestion : styles.suggestion1}
      >
        <div className={styles.suggestion_option}>
          <FaArrowRight
            className={styles.arrow_back}
            onClick={() => {
              setIsSuggestionShowing(!isSuggestionShowing);
            }}
          />
          <p>reason suggestions</p>
        </div>
        <div className={styles.scrollBar}>
          {suggestions.map((data, index) => (
            <div
              key={index}
              className={styles.suggestion_inner_div}
              onClick={(e) => {
                handleSuggestionChange(e, data);
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
