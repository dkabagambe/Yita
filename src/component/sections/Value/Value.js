import React from "react";
import "./Value.css";
import Logo02 from "../../../images/logo.jpg";

export default function Value() {
  return (
    <div className="Value">
      <div className="container">
        <div align="center">
          <h4 align="center" style={{ fontWeight: "bold" }} className="Rcolor">
            The good news about Yita Life Services & products.
          </h4>

          <br />

          <p align="center" style={{ fontWeight: "bold" }} className="para1">
            We sort the queue, travel-hospital congestion,excess waiting
            <br /> time & pressure at an affordable cost.
          </p>
        </div>

        <div className="valuetab">
          <div className="row">
            <div
              className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12"
              data-aos="fade-left"
              align="center"
            >
              <img src={Logo02} width="100%" alt="imab" />
            </div>
            <div
              className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12"
              data-aos="fade-left"
              style={{ background: "#d7e0ef", fontSize: "19px" }}
            >
              <ul>
                <li>
                  Transition from non-critical unnecessary hospital visits to
                  access to expert doctor and all healthcare services from the
                  comfort of your home, market place and work environment.
                </li>
                <li>
                  Our services save you from excessive financial costs resulting
                  from unnecessary admissions, transport, and traffic jam and
                  waiting time stress, among others.
                </li>
                <li>
                  Our Preventive healthcare promotion packages offer screening
                  services which enable early diagnosis of several diseases both
                  communicable and non-communicable.
                </li>
                <li>
                  Very affordable accessible services compared to the hospital
                  based care services. You pay for only direct costs like
                  doctor, nurses, laboratory, pharmacy services etc.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
