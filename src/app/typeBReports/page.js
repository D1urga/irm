"use client";
import React, { useState, useEffect } from "react";
import styles from "./typeBReports.module.css";
import Link from "next/link";
import moment from "moment";
import { FaArrowRight } from "react-icons/fa";

export default function TypeBReports() {
  const [data, setData] = useState([]);
  const fetchInfo = async () => {
    const res = await fetch(
      "https://irmbackend.onrender.com/api/v1/reports/getReportTypeB",
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
          <p>All reports TypeB</p>
        </div>
        <div className={styles.grids}>
          {" "}
          {data.length != 0 ? (
            data &&
            data.map((data, index) => (
              <div key={index} className={styles.grid}>
                <Link href={`/typeBReports/${data._id}`}>
                  {" "}
                  <div className={styles.div1}>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        paddingBottom: "8px",
                      }}
                    >
                      <span style={{ color: "blue", fontWeight: "600" }}>
                        DraftName
                      </span>{" "}
                      : {data.headerSectionData[0].DraftName}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      <span style={{ color: "blue", fontWeight: "600" }}>
                        DamagesTo
                      </span>{" "}
                      : {data.headerSectionData[0].DamagesTo}
                    </p>{" "}
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
                      <p
                        style={{
                          color: " rgb(47, 47, 228)",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        visit
                      </p>
                      <FaArrowRight
                        style={{
                          fontSize: "14px",
                          margin: "0 20px",
                          color: "rgb(47, 47, 228)",
                        }}
                      />
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
