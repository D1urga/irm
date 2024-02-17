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

  const handleAvatarchange = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
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
          {conclusionTable.map((data, index) => (
            <div
              className={isShowingAttachement ? styles.tables : styles.tables1}
              onClick={() => {
                setIsShowingConclusion(false);
                setIsShowingAttachement(true);
                setUploadingAttachement(false);
                setPage(index);
              }}
            >
              <p>item {index}</p>
              <div className={styles.logos}>
                <FaPlusCircle className={styles.logo1} />
                <FaEdit className={styles.logo2} />
                <FaTrash className={styles.logo3} />
              </div>
            </div>
          ))}
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
            className={styles.intro_textarea}
            placeholder="conclusion description ..."
          ></textarea>
        </div>
      ) : isShowingAttachement ? (
        <div className={styles.items}>
          <p className={styles.add_attach_title}>Add Attachment (1)</p>
          <p className={styles.des}>Title</p>
          <input
            className={styles.client_input}
            placeholder="title ..."
          ></input>
          <p className={styles.des}>Attachment</p>
          <div className={styles.img}>
            <img
              src={conclusionTable[page].attachmentUrl}
              className={styles.images}
            ></img>
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
          <p className={styles.add_attach_title}>Add Attachment (2)</p>
          <p className={styles.des}>Title</p>
          <input
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
                  const obj = { title: "abdasd", attachmentUrl: avatar };
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
