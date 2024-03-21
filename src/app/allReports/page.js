"use client";
import React, { useState, useEffect } from "react";
import styles from "./allreports.module.css";
import Link from "next/link";
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
    return setData(d.data);
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.outer_div}>
        <div className={styles.heading}>
          <p>Type-A all reports</p>
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
                        fontWeight: "600",
                      }}
                    >
                      report {index + 1}
                    </p>
                    <div className={styles.icon}>
                      <p>visit</p>
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
