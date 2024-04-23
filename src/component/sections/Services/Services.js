import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

export default function Services() {
  return (
    <div>
      <div className="service">
        <div className="container">
          <div align="center">
            <h4
              align="center"
              style={{ fontWeight: "bold" }}
              className="Rcolor"
            >
              Yita Life Services
            </h4>
            <br />
            <p align="center">
              Holistic & professional equitable home based & market place,
              outdoor healthcare packages await for  you.
            </p>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-3">
              <h3 className="fliptext">guarantee</h3>
            </div>
            <div className="col">
              <div className="row data">
                <div
                  className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12"
                  data-aos="fade-left"
                >
                  <div>
                    <h5>Doctor Home visit</h5>

                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic,
                    </p>
                  </div>
                </div>
                <div
                  className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12 "
                  data-aos="fade-left"
                >
                  <div>
                    <h5>Corporate Staff Medical Assessment</h5>
                    <br />
                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic,
                    </p>
                  </div>
                </div>
                <div
                  className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12"
                  data-aos="fade-left"
                >
                  <div>
                    <h5>Mid Wife Consultation & Antenanatal Care</h5>
                    <br />
                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic,
                    </p>
                  </div>
                </div>
                <div
                  className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12"
                  data-aos="fade-left"
                >
                  <div>
                    <h5>Hosipital At Home Care</h5>
                    <br />
                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic,
                    </p>
                  </div>
                </div>
                <div
                  className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12"
                  data-aos="fade-left"
                >
                  <div>
                    <h5>School Student Medical Examination</h5>

                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic,
                    </p>
                  </div>
                </div>
                <div
                  className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12"
                  data-aos="fade-left"
                >
                  <div>
                    <h5>Nursing and Bedside Medical Care</h5>

                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic,
                    </p>
                  </div>
                </div>
              </div>
              <div className="row data">
                <div
                  className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12"
                  data-aos="fade-left"
                >
                  <div>
                    <h5>Referral & link to tertiary Care</h5>
                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic,
                    </p>
                  </div>
                </div>
                <div
                  className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12"
                  data-aos="fade-left"
                >
                  <div>
                    <h5>Patient Follow Up & chronic disease medicare</h5>

                    <br />
                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic,
                    </p>
                  </div>
                </div>
                <div
                  className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12"
                  data-aos="fade-left"
                >
                  {" "}
                  <div>
                    <h5>Remote Patient Monitoring</h5>

                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic,
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <div align="right" data-aos="fade-bottom">
                <Link to="/Services">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
