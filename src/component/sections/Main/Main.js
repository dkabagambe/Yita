import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
export default function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="topBig">
          {/* <img src={hero} alt="hero-img" /> */}
          <br />
          <br />
          <h1>
            <span>Mobile & Home Doctors</span> <br></br>
            <span>Provider</span>
          </h1>
        </div>
        <div className="mindDiv">
          <h4 data-aos="fade-right">Welcome </h4>
          <h3 data-aos="fade-right">
            Equitable access to quality healthcare services with key attention
            to remote communities
          </h3>
          <p data-aos="fade-right" className="basicdesc">
            Yita Life uses part of it’s income to support humanitarian causes.
          </p>
          <div className="btns">
            <Link to="/Appointment">
              <button>MAKE AN APPOINTMENT</button>
            </Link>
            <Link to="/Contact">
              <button style={{ background: "#ec0002", marginLeft: "10px" }}>
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
