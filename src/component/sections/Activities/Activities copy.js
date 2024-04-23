import React, { useEffect, useState } from "react";
import Api from "../../../Data/Api";
import "./Activities.css";

export default function Activities() {
  const [imagesList, setimagesList] = useState([]);
  useEffect(() => {
    getAppoitDate();
  });
  async function getAppoitDate() {
    await Api.getImage().then((res) => {
      console.log("res.data ", res.data);
      if (res.data == "No data") {
        setimagesList();
      } else {
        // this.setState({ imagesList:  });
        setimagesList(res.data);
      }
    });
  }
  return (
    <div className="activities" style={{ background: "white" }}>
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
      <div align="center">
        Yita Life Community outreach & Social Corporate Responsibility.
      </div>
      <br />
      <br />

      <div className="row">
        <div className="col-8"></div>
        <div className="col-2"></div>
      </div>

      <div className="row">
        <div className="column">
          <img
            src="https://yitalife.com/images/1.jpg"
            style={{ width: "100%" }}
            data-aos="zoom-in"
          />
          <img
            src="https://yitalife.com/images/9.jpg"
            style={{ width: "100%" }}
            data-aos="zoom-in"
          />
        </div>

        <div className="column">
          <img
            src="https://yitalife.com/images/5.jpg"
            style={{ width: "100%" }}
            data-aos="zoom-in"
          />
          <img
            src="https://yitalife.com/images/2.jpg"
            // src="https://images.unsplash.com/photo-1533713692156-f70938dc0d54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            style={{ width: "100%" }}
            data-aos="zoom-in"
          />
        </div>

        <div className="column">
          <img
            src="https://yitalife.com/images/4.jpg"
            // src="https://images.unsplash.com/photo-1644483878407-f05ff59c8a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            style={{ width: "100%" }}
            data-aos="zoom-in"
          />
        </div>

        <div className="column">
          <img
            src="https://yitalife.com/images/9.jpg"
            // src="https://images.unsplash.com/photo-1670659556763-33c046412a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1108&q=80"
            style={{ width: "100%" }}
            data-aos="zoom-in"
          />
          <img
            src="https://yitalife.com/images/11.jpg"
            // src="https://images.unsplash.com/photo-1670614300606-eda33e2146be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            style={{ width: "100%" }}
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  );
}
