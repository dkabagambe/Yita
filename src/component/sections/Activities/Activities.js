import React, { useEffect, useState } from "react";
import Api, { USER_API_URL } from "../../../Data/Api";
import "./Activities.css";

export default function Activities() {
  const [imagesList, setimagesList] = useState([]);
  useEffect(() => {
    getAppoitDate();
  });
  async function getAppoitDate() {
    await Api.getImage().then((res) => {
      console.log("res.data ", res.data);
      if (res.data === "No data") {
      } else {
        // this.setState({ imagesList:  });
        setimagesList(res.data);
      }
    });
  }

  const imageDiv = imagesList.map((a, index) => (
    <div className="column">
      <div className="im">
        <img
          src={`${USER_API_URL}/` + a.Link}
          style={{ width: "100%" }}
          data-aos="zoom-in"
          alt="activities"
        />

        <div className="float">{a.caption}</div>
      </div>
    </div>
  ));
  return (
    <div className="activities">
      <br />
      <br />
      <br />
      <br />
      <div align="center">
        <h4 align="center" style={{ fontWeight: "bold" }} className="Rcolor">
          Yita Life Activites
        </h4>
      </div>
      <br />
      <div align="center" style={{ fontWeight: "normal" }} className="Rcolor1">
        Yita Life Community outreach & Social Corporate Responsibility.
      </div>
      <br />
      <br />

      <div className="row">
        <div className="col-8"></div>
        <div className="col-2"></div>
      </div>

      <div className="row">
        {imagesList.length === 0 ? (
          <div align="center">
            <span style={{ textDecoration: "line-through" }}>No activites</span>
          </div>
        ) : (
          imageDiv
        )}
      </div>
    </div>
  );
}
