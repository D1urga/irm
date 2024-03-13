import React, { useState } from "react";
import styles from "./styles/observationsAndVerifications.module.css";
import {
  FaAngleUp,
  FaPlusCircle,
  FaEdit,
  FaTrash,
  FaArrowRight,
} from "react-icons/fa";

export default function ObservationsAndVerifications({
  observationsAndVerificationsData,
  setObservationsAndVerificationsData,
  observationsAndVerificationsAttach,
  setObservationsAndVerificationsAttach,
  onClickFun,
}) {
  const introSuggestion = [
    "Survey was carried out in the presence of Insured at Jade House Building, Port Louis. As mentioned by Mr Voon Chong Fon Sing, on Monday 20.03.2023 they noticed that air conditioning units in the building was not operational. Upon inspection it was it was fond tat mlicius dmage hav been cause to the eight (8) air conditioning units in Insured’s premises. At time of survey, we found clear signs of malicious damages to the air conditioning installation – which in our opinion was made to steal copper pipes, copper pipe fittings and electrical cables.The theft is suspected to have been committed on the 19.03.2023 and same has been reported to the police for investigation. The matter has been reported to the police station of Fanfaron for investigation and recorded under OB No 927/2023 as per Annex 1.Based on information supplied to us, it appears that the damages were caused by unidentified individual(s), who might have gained access in the property by crossing over the rear side wall. CCTV camera present on the premises could capturemovement of any intruder, as the point of entry might have been different from theview of the camera.  The premises are rented and occupied by Insured’s tenant. Upon query, Insured confirmed that the offices were not locked at time of incidence, thus intruder(s) did not have to force open any opening to obtain access within the offices to steal/ damagethe mentioned items. No means of forcible entry/ exit was observed or shown to us at time of survey",

    "Survey was conducted in presence of Mrs. Joumont.At time of survey, burst apparatus was already repaired and accumulated water was already cleaned from the premises.Concerned apparatus is the potable water filter installed underneath the sink in kitchen, as shown in below picture.Annex 1 – refers to the service provider’s report and image of damaged filter Insured shared pictures of the time of incidence – which clearly showed the premises encountered accumulation of water following the apparatus burst and arepresented below:",
    `Inspection of site which is situated at Chebel was carried out in the presence of 
Insured’s representative Messrs Adrien Diolle, Welfare Officer and S.Botte Assistant 
Inspector of Work.
Insured’s premises is enclosed and sufficiently secured with a boundary wall. The 
building is neither equipped with any CCTV surveyance SYSTEM nor with any 
electronic intruder detection and alarm system. Further, the building was equipped 
with burglar bars Mr A. Diolle mentioned that the cloakroom was closed with access gates closed and 
maintained under lock. The keys kept at the Municipal Council of Beau Bassin/ Rose 
Hill. He also stated that the metal gate found at the front and rear of the cloakroom 
had been cut and taken away by unidentified individual(s). Same was not mentioned 
in the claim and he was informed to have same added in the claim.
As declared, the incidence date is believed to be during the last week of December 
2022. However, Insured representative stated that the said cloakroom was visited by 
officer from his office one week before 28.12.2022 , exact date could not be mentioned 
and had nothing untoward to report. 
Incidence was discovered on 28.12.2022 during a site visit, hence considered as date 
of incidence. After inventory of losses, the matter was notified to Coromandel Police 
on same date, which was recorded under OB167/2023.
At the time of survey, it was noticed that the metal gates found at the front and rear of 
the cloakroom had been cut and carried away. According to Insured representative, 
culprit/s got access from the rear of the cloakroom through the two mentioned stolen 
gates.
Below pictures show missing gates which clearly indicate forcible entry into insured 
premises by unidentified individual(s) with malicious intentions to steal fixtures , 
fittings and contents within the premises`,
    `Our survey was conducted in presence of Insured’s representative. The latter 
showed us Insured property, which appeared to be under renovations as we found 
scaffoldings installed on façade of the building.
Insured’s equipment, the generator set, which was affected in reported incidence is 
located on roof of the building. Access to this part of the property is restricted and not 
allowed to unauthorised person. 
Based on declaration of Insured, unidentified individual(s) obtained access to the 
roof and the generator set by climbing on the scaffolding present on site.
Insured’s representative mentioned that this might have happened at night, while the 
site is not occupied and guarded.
There is neither CCTV surveillance on the roof, nor monitoring access to the 
scaffolding, thus intrusion was not detected.`,
    "Inspection of site which is situated at Chebel was carried out in the presence of Insured’s representative Messrs Adrien Diolle, Welfare Officer and S.Botte Assistant Inspector of Work.Insured’s premises is enclosed and sufficiently secured with a boundary wall. The building is neither equipped with any CCTV surveyance SYSTEM nor with any electronic intruder detection and alarm system. Further, the building was equipped with burglar bars Mr A. Diolle mentioned that the cloakroom was closed with access gates closed and maintained under lock. The keys kept at the Municipal Council of Beau Bassin/ Rose Hill. He also stated that the metal gate found at the front and rear of the cloakroom  been cut and taken away by unidentified individual(s). Same was not mentioned in the claim and he was informed to have same added in the claim.As declared, the incidence date is believed to be during the last week of December 2022. However, Insured representative stated that the said cloakroom was visited by officer from his office one week before 28.12.2022 , exact date could not be mentioned and had nothing untoward to report. Incidence was discovered on 28.12.2022 during a site visit, hence considered as date of incidence. After inventory of losses, the matter was notified to Coromandel Police onsame date, which was recorded under OB167/2023At the time of survey, it was noticed that the metal gates found at the front and rear of the cloakroom had been cut and carried away. According to Insured representative, culprit/s got access from the rear of the cloakroom through the two mentioned stolen gates.Below pictures show missing gates which clearly indicate forcible entry into insured premises by unidentified individual(s) with malicious intentions to steal fixtures , fittings and contents within the premise As mentioned by Mr Diolle, intruder(s) cut three metal door together with burglar barsand got access in the cloakroom. Intruder(s) took along the three mentioned metal doors, six metal windows, five metal burglar proofing from windows, three timberdoors, one tropical metal door, three manhole covers from the compound, alsodamaged electrical installations, glass from openings, plumbing works and furniture.Below pictures show damaged electrical installation, plumbing works, furniture as well as metal openings/ glass panes – which clearly indicate forcible entry into Insured’s premises by unidentified individual/s, with malicious intentions to steal contents within the premises We do not have any information on progress of Police’s inquiry at time of reporting and if any of the stolen items could have been recuperated.We were further made to understand that no offender(s) was identified at time of reporting",
  ];
  const concSuggestion = [
    "At time of survey, the site was clean, and no water accumulation was found.Insured mentioned that the water filter was repaired by its service provider and services restored.Incidence occurred on 04th August 2022. Our survey was conducted on 02ndSeptember 2022 – nearly one month after incidence. Water related damages were noticed to the tv cabinet only.None of the other furniture in contact with accumulated water, from the apparatus burst, were found to present water related damagesAdditionally, Insured mentioned that water accumulated during incidence caused damages to the wall finishes as shown to us and presented in pictures below: Damages to the wall finishes is not due to water accumulation following water apparatus burst (the incidence) but appears to be a gradual deterioration of the finishes. This gradual deterioration might be due to water ingress inside the wall/ or any chased pipe leakage in the premises",
    "None of the other furniture in contact with accumulated water, from the apparatus burst, were found to present water related damages.Additionally, Insured mentioned that water accumulated during incidence caused damages to the wall finishes as shown to us and presented in pictures below Damages to the wall finishes is not due to water accumulation following water apparatus burst (the incidence) but appears to be a gradual deterioration of the finishes. This grdual deterioration might be due to water ingress inside the wall/ or any chased pipe leakage in the premises.",
    `As mentioned by Mr Diolle, intruder(s) cut three metal door together with burglar bars
and got access in the cloakroom. Intruder(s) took along the three mentioned metal 
doors, six metal windows, five metal burglar proofing from windows, three timber
doors, one tropical metal door, three manhole covers from the compound, also
damaged electrical installations, glass from openings, plumbing works and furniture.
Below pictures show damaged electrical installation, plumbing works, furniture as well 
as metal openings/ glass panes – which clearly indicate forcible entry into Insured’s 
premises by unidentified individual/s, with malicious intentions to steal contents within 
the premises We do not have any information on progress of Police’s inquiry at time of reporting 
and if any of the stolen items could have been recuperated.
We were further made to understand that no offender(s) was identified at time of 
reporting.
`,
    `It is understood that the unauthorised individual(s) broke the viewing panel of the 
generator set, to then force open the generator door and its distribution panel to steal 
copper cables and electrical protection devices (breakers). By doing so, the 
burglar(s) damaged the generator’s controller. Below survey pictures refer: As mentioned by Insured, the matter was reported to Rose Hill police station on 
04.11.2022 and recorded under OB 7127/2022.
No other damages were noted or reported on the site.`,
  ];

  const handleSuggestionChange1 = (event, val, id) => {
    const clone = [...observationsAndVerificationsData];
    const obj = clone[id];

    obj["introduction"] = val;
    clone[id] = obj;
    setObservationsAndVerificationsData([...clone]);
  };
  const handleSuggestionChange2 = (event, val, id) => {
    const clone = [...observationsAndVerificationsData];
    const obj = clone[id];

    obj["conclusion"] = val;
    clone[id] = obj;
    setObservationsAndVerificationsData([...clone]);
  };
  const [isIntroSuggestionShowing, setIsIntroSuggestionShowing] =
    useState(false);
  const [isConcSuggestionShowing, setIsConcSuggestionShowing] = useState(false);
  const [page, setPage] = useState(0);
  const [isShowing, setIsShowing] = useState(false);
  const [intro, setIntro] = useState(true);
  const [conc, setConc] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const handleChange = (event, id) => {
    const clone = [...observationsAndVerificationsData];
    const obj = clone[id];

    obj[`${event.target.name}`] = event.target.value;
    clone[id] = obj;
    setObservationsAndVerificationsData([...clone]);
  };
  const handleAttachmentChange = (event) => {
    setItemsData({
      ...itemsData,
      [event.target.name]: event.target.value,
    });
  };

  const handleShowingChange = (event, id) => {
    const clone = [...observationsAndVerificationsAttach];
    const obj = clone[id];

    obj[`${event.target.name}`] = event.target.value;
    clone[id] = obj;
    setObservationsAndVerificationsAttach([...clone]);
  };
  const handleShowingImageChange = (event, id) => {
    const clone = [...observationsAndVerificationsAttach];
    const obj = clone[id];

    // obj[`${event.target.name}`] = avatar;
    clone[id] = {
      description: itemsData.description,
      title: itemsData.title,
      attachmentUrl: avatar,
    };
    setObservationsAndVerificationsAttach([...clone]);
  };
  const addAttachments = () => {
    const obj = {
      description: itemsData.description,
      title: itemsData.title,
      attachmentUrl: avatar,
    };
    const newData = observationsAndVerificationsAttach.concat(obj);
    console.log(newData);
    setObservationsAndVerificationsAttach(newData);
  };

  const [avatar, setAvatar] = useState(null);

  const handleAvatarchange = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const [image, setImage] = useState("ghvgh");
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const [itemsData, setItemsData] = useState({
    description: "",
    title: "",
    attachmentUrl: "",
  });
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.title}>
          <p>Observation and Verification</p>
          <FaAngleUp className={styles.angle_up} onClick={onClickFun} />
        </div>
        <button
          className={intro ? styles.intro_btn : styles.intro_btn1}
          onClick={() => {
            setConc(false);
            setIntro(true);
            setIsShowing(false);
            setIsUploading(true);
          }}
        >
          Introduction
        </button>
        <button
          className={conc ? styles.conc_btn : styles.conc_btn1}
          onClick={() => {
            setConc(true);
            setIntro(false);
            setIsShowing(false);
            setIsUploading(true);
          }}
        >
          Conclusion
        </button>
        <p className={styles.add_attach}>Add Attachments</p>
        <div className={styles.add_attachment_div}>
          {observationsAndVerificationsAttach.length != 0 ? (
            <div>
              {observationsAndVerificationsAttach.map((data, index) => (
                <div
                  className={page === page ? styles.tables : styles.tables1}
                  key={index}
                  onClick={() => {
                    setIntro(false);
                    setConc(false);
                    setIsShowing(true);
                    setIsUploading(false);
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
                        const subarr1 =
                          observationsAndVerificationsAttach.slice(0, index);
                        const subarr2 =
                          observationsAndVerificationsAttach.slice(
                            index + 1,
                            observationsAndVerificationsAttach.length
                          );
                        const newData = [...subarr1, ...subarr2];
                        setObservationsAndVerificationsAttach(newData);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ fontSize: "12.2px", marginTop: "5px", color: "gray" }}>
              no data available click button to fill
            </p>
          )}
        </div>
        <button
          className={styles.add_attach_button}
          onClick={() => {
            setConc(false);
            setIntro(false);
            setIsShowing(false);
            setIsUploading(true);
          }}
        >
          Add Attachment
        </button>
      </div>
      {intro ? (
        <div className={styles.outer_div2}>
          <p
            style={{ cursor: "pointer" }}
            className={styles.introduction}
            onClick={() => {
              setIsIntroSuggestionShowing(true);
              setIsConcSuggestionShowing(false);
            }}
          >
            Introduction{" "}
            <span style={{ fontSize: "12px", color: "blue" }}>
              (see suggestions)
            </span>
          </p>
          <textarea
            value={observationsAndVerificationsData[0].introduction}
            name="introduction"
            onChange={(e) => {
              handleChange(e, 0);
            }}
            className={styles.intro_textarea}
            placeholder="introduction ..."
          ></textarea>
        </div>
      ) : conc ? (
        <div className={styles.outer_div4}>
          <p
            style={{ cursor: "pointer" }}
            className={styles.introduction}
            onClick={() => {
              setIsIntroSuggestionShowing(false);
              setIsConcSuggestionShowing(true);
            }}
          >
            Conclusion{" "}
            <span style={{ fontSize: "12px", color: "blue" }}>
              (see suggestions)
            </span>
          </p>
          <textarea
            value={observationsAndVerificationsData[0].conclusion}
            name="conclusion"
            onChange={(e) => {
              handleChange(e, 0);
            }}
            className={styles.intro_textarea}
            placeholder="ionclusion ..."
          ></textarea>
        </div>
      ) : isUploading ? (
        <div className={styles.items}>
          <p className={styles.add_attach_title}>Add Attachment </p>
          <p className={styles.des}>Description</p>
          <input
            value={itemsData.description}
            name="description"
            onChange={handleAttachmentChange}
            className={styles.client_input}
            placeholder="description ..."
          ></input>
          <p className={styles.des}>Title</p>
          <input
            value={itemsData.title}
            name="title"
            onChange={handleAttachmentChange}
            className={styles.client_input}
            placeholder="title ..."
          ></input>
          <p className={styles.des}>Attachment</p>
          <div className={styles.img}>
            <img className={styles.avatar} src={avatar}></img>
          </div>
          <div>
            <input
              className={styles.input2}
              type="file"
              name="avatar"
              id="avatar"
              placeholder="avatar"
              // value={registerData.avatar}
              onChange={handleAvatarchange}
              autoComplete="true"
            ></input>
            <div>
              <button className={styles.add_btn} onClick={addAttachments}>
                Add
              </button>
              {/* <input
                type="file"
                name="image"
                autoComplete="true"
                onChange={handleImageChange}
              ></input> */}

              {/* <button className={styles.delete_btn}>Delete</button> */}
            </div>
          </div>
        </div>
      ) : isShowing ? (
        <div className={styles.items}>
          <p className={styles.add_attach_title}>Attachment {page + 1}</p>
          <p className={styles.des}>Description</p>
          <input
            value={
              observationsAndVerificationsAttach.length != 0
                ? observationsAndVerificationsAttach[page] &&
                  observationsAndVerificationsAttach[page].description
                : ""
            }
            onChange={(e) => {
              handleShowingChange(e, page);
            }}
            name="description"
            className={styles.client_input}
            placeholder="description ..."
          ></input>
          <p className={styles.des}>Title</p>
          <input
            value={
              observationsAndVerificationsAttach.length != 0
                ? observationsAndVerificationsAttach[page] &&
                  observationsAndVerificationsAttach[page].title
                : ""
            }
            onChange={(e) => {
              handleShowingChange(e, page);
            }}
            name="title"
            className={styles.client_input}
            placeholder="title ..."
          ></input>
          <p className={styles.des}>Attachment</p>
          <div className={styles.img}>
            <img
              className={styles.prev_image}
              src={
                observationsAndVerificationsAttach.length != 0
                  ? observationsAndVerificationsAttach[page] &&
                    observationsAndVerificationsAttach[page].attachmentUrl
                  : ""
              }
            ></img>
          </div>
          <div>
            <input
              className={styles.input2}
              type="file"
              name="avatar"
              id="avatar"
              placeholder="avatar"
              // value={registerData.avatar}
              onChange={handleAvatarchange}
              autoComplete="true"
            ></input>
            <div>
              <button
                className={styles.add_btn}
                onClick={(e) => {
                  handleShowingImageChange(e, page);
                }}
              >
                Update
              </button>
              {/* <input
                type="file"
                name="image"
                autoComplete="true"
                onChange={handleImageChange}
              ></input> */}

              {/* <button className={styles.delete_btn}>Delete</button> */}
            </div>
          </div>
        </div>
      ) : null}
      <div
        className={
          isIntroSuggestionShowing ? styles.suggestion : styles.suggestion1
        }
      >
        <div className={styles.suggestion_option}>
          <FaArrowRight
            className={styles.arrow_back}
            onClick={() => {
              setIsIntroSuggestionShowing(false);
              setIsConcSuggestionShowing(false);
            }}
          />
          <p>introduction suggestions</p>
        </div>
        <div className={styles.scrollBar}>
          {introSuggestion.map((data, index) => (
            <div
              key={index}
              className={styles.suggestion_inner_div}
              onClick={(e) => {
                handleSuggestionChange1(e, data, 0);
              }}
            >
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          isConcSuggestionShowing ? styles.suggestion : styles.suggestion1
        }
      >
        <div className={styles.suggestion_option}>
          <FaArrowRight
            className={styles.arrow_back}
            onClick={() => {
              setIsIntroSuggestionShowing(false);
              setIsConcSuggestionShowing(false);
            }}
          />
          <p>conclusion suggestions</p>
        </div>
        <div className={styles.scrollBar}>
          {concSuggestion.map((data, index) => (
            <div
              key={index}
              className={styles.suggestion_inner_div}
              onClick={(e) => {
                handleSuggestionChange2(e, data, 0);
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
