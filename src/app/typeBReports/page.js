"use client";
import React, { useState, useEffect } from "react";
import styles from "./typeBReports.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
export default function TypeBReports() {
  const [data, setData] = useState([]);
  const fetchInfo = async () => {
    const res = await fetch(
      "https://irmbackend-1.onrender.com/api/v1/reports/getReportTypeB",
      {
        credentials: "include",
      }
    );
    const d = await res.json();
    return setData(d.data);
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
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
                        fontSize: "13px",
                        fontWeight: "600",
                      }}
                    >
                      report {index + 1}
                    </p>
                    <div className={styles.icon}>
                      <p
                        style={{
                          color: "blue",
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
                          color: "blue",
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
