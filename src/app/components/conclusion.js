import React, { useState } from "react";
import styles from "./styles/conclusion.module.css";
import { FaAngleUp, FaTrash, FaEdit, FaPlusCircle } from "react-icons/fa";

export default function Conclusion({
  conclusionDes,
  setConclusionDes,
  conclusionTable,
  setConclusionTable,
  onClickFun,
}) {
  const [page, setPage] = useState(0);
  const [isShowingConclusion, setIsShowingConclusion] = useState(true);
  const [isShowingAttachement, setIsShowingAttachement] = useState(false);
  const [isuploadingAttachement, setUploadingAttachement] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const [title, setTitle] = useState({ title: "ahdlvah" });

  const [newtitle, setnewTitle] = useState({ title: "ahdlvah" });

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

  const handleAvatarchange = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (event) => {
    setConclusionDes({
      ...conclusionDes,
      [event.target.name]: event.target.value,
    });
  };

  const handleShowingImageChange = (event, id) => {
    const clone = [...conclusionTable];
    const obj = clone[id];
    clone[id] = {
      title: title.title,
      attachmentUrl: avatar,
    };
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
                  <p>item {index + 1}</p>
                  <div className={styles.logos}>
                    {/* <FaPlusCircle className={styles.logo1} />
                <FaEdit className={styles.logo2} /> */}
                    <FaTrash className={styles.logo3} />
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
          <p className={styles.des}>Conclusion Description</p>
          <textarea
            value={conclusionDes.conclusionDes}
            onChange={handleChange}
            name="conclusionDes"
            className={styles.intro_textarea}
            placeholder="conclusion description ..."
          ></textarea>
        </div>
      ) : isShowingAttachement ? (
        <div className={styles.items}>
          <p className={styles.add_attach_title}>Attachment {page + 1}</p>
          <p className={styles.des}>Title</p>
          <input
            value={conclusionTable[page].title}
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
              src={conclusionTable[page].attachmentUrl}
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
            <img src={avatar} className={styles.images}></img>
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
                  const obj = { title: title.title, attachmentUrl: avatar };
                  const newData = conclusionTable.concat(obj);
                  setConclusionTable(newData);
                }}
              >
                Add
              </button>
              <button className={styles.delete_btn}>Delete</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
