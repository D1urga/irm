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
  ];
  const concSuggestion = [
    "At time of survey, the site was clean, and no water accumulation was found.Insured mentioned that the water filter was repaired by its service provider and services restored.Incidence occurred on 04th August 2022. Our survey was conducted on 02ndSeptember 2022 – nearly one month after incidence. Water related damages were noticed to the tv cabinet only.None of the other furniture in contact with accumulated water, from the apparatus burst, were found to present water related damagesAdditionally, Insured mentioned that water accumulated during incidence caused damages to the wall finishes as shown to us and presented in pictures below: Damages to the wall finishes is not due to water accumulation following water apparatus burst (the incidence) but appears to be a gradual deterioration of the finishes. This gradual deterioration might be due to water ingress inside the wall/ or any chased pipe leakage in the premises",
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
