"use client";
import React, { useState, useEffect } from "react";
import styles from "./allreports.module.css";
import Link from "next/link";
import moment from "moment";
import { FaArrowRight } from "react-icons/fa";
export default function AllReports() {
  const [data, setData] = useState([]);
  const fetchInfo = async () => {
    const res = await fetch(
      "https://irmbackend.onrender.com/api/v1/reports/getReport",
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    return setData(d.data.reverse());
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.heading}>
          <p>All reports TypeA</p>
        </div>
        <div className={styles.grids}>
          {" "}
          {data.length != 0 ? (
            data &&
            data.map((data, index) => (
              <div key={index} className={styles.grid}>
                <Link href={`/allReports/${data._id}`}>
                  {" "}
                  <div className={styles.div1}>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: "550",
                      }}
                    >
                      <span style={{ color: "blue", fontWeight: "600" }}>
                        ProjectTitle
                      </span>{" "}
                      : {data.projectDescriptionData[0].projectTitle}
                    </p>{" "}
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: "550",
                        paddingTop: "8px",
                      }}
                    >
                      <span style={{ color: "blue", fontWeight: "600" }}>
                        Client
                      </span>{" "}
                      : {data.projectDescriptionData[0].client}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: "550",
                        paddingTop: "8px",
                      }}
                    >
                      <span style={{ color: "blue", fontWeight: "600" }}>
                        Time
                      </span>{" "}
                      :{" "}
                      {moment(data.createdAt).format(
                        "dddd, MMMM Do YYYY, h:mm:ss a"
                      )}
                    </p>
                    <div className={styles.icon}>
                      <p>View report</p>
                      <FaArrowRight className={styles.logo} />
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className={styles.indicator}>
              {" "}
              <p>loading reports ....</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
