import React from "react";
import styles from "./landingPage.module.css";
import {
  FaBinoculars,
  FaCity,
  FaHotel,
  FaTaxi,
  FaUtensils,
} from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className={styles.main}>
      <div className={styles.topbar}>
        <div className={styles.title}>
          <h1 className={styles.name}>irm</h1>
          <div className={styles.tagline}>
            <p>innovative thinking</p>
            <p>creative solutions</p>
          </div>
        </div>
        <ul className={styles.list}>
          <li>
            <p>09817501500</p>
          </li>
          <li>
            <p>088945-50050</p>
          </li>
        </ul>
      </div>
      <div className={styles.body}>
        <div className={styles.div1}>
          <h2>SHIMLA-MANALI BEST DEALS - CALL:098175-01500</h2>
          <div className={styles.icons}>
            <FaCity className={styles.icon} />
            <FaBinoculars className={styles.icon} />
            <FaUtensils className={styles.icon} />
            <FaTaxi className={styles.icon} />
          </div>
          <h2>25% Off Winter Special - Enquire Now</h2>
          <h1>BEST DEALS</h1>
        </div>
        <div className={styles.div2}>
          <h2
            style={{
              marginBottom: "20px",
              fontWeight: "500",
              fontSize: "21px",
            }}
          >
            Fill The Details
          </h2>
          <input className={styles.input} placeholder="Full Name"></input>
          <input className={styles.input} placeholder="Full Name"></input>
          <input className={styles.input} placeholder="Full Name"></input>
          <button className={styles.btn}>Call back request</button>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Mysterious Himachal Offers Best Deals for Winter Packages</p>
      </div>
    </div>
  );
}
