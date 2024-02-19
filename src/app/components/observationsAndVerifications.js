import React, { useState } from "react";
import styles from "./styles/observationsAndVerifications.module.css";
import { FaAngleUp, FaPlusCircle, FaEdit, FaTrash } from "react-icons/fa";

export default function ObservationsAndVerifications({
  observationsAndVerificationsData,
  setObservationsAndVerificationsData,
  observationsAndVerificationsAttach,
  setObservationsAndVerificationsAttach,
  onClickFun,
}) {
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
    description: "decs",
    title: "title",
    attachmentUrl: "attchmen",
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
              <p>item {index}</p>
              <div className={styles.logos}>
                <FaPlusCircle className={styles.logo1} />
                <FaEdit className={styles.logo2} />
                <FaTrash
                  className={styles.logo3}
                  // onClick={() => {
                  //   const newData = observationsAndVerificationsAttach.splice(
                  //     index,
                  //     1
                  //   );
                  //   // setObservationsAndVerificationsAttach(newData);
                  //   console.log(newData);
                  // }}
                />
              </div>
            </div>
          ))}
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
          <p className={styles.introduction}>Introduction</p>
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
        <div className={styles.outer_div2}>
          <p className={styles.introduction}>Conclusion</p>
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
          <p className={styles.add_attach_title}>Add Attachment (1)</p>
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

              <button className={styles.delete_btn}>Delete</button>
            </div>
          </div>
        </div>
      ) : isShowing ? (
        <div className={styles.items}>
          <p className={styles.add_attach_title}>Add Attachment ({page})</p>
          <p className={styles.des}>Description</p>
          <input
            value={observationsAndVerificationsAttach[page].description}
            onChange={(e) => {
              handleShowingChange(e, page);
            }}
            name="description"
            className={styles.client_input}
            placeholder="description ..."
          ></input>
          <p className={styles.des}>Title</p>
          <input
            value={observationsAndVerificationsAttach[page].title}
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
              src={observationsAndVerificationsAttach[page].attachmentUrl}
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
    </div>
  );
}
