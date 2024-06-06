import React from "react";
import "./about.css";
import ab from "../../../images/11.jpg";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <div className="about">
      <div className="container">
        <div className=" row">
          <div className="col">
            <div>
              <label className="subabout" data-aos="fade-left">
                Welcome To <br />
                <span className="Rcolor">Yita Life Medical Services</span>
              </label>
              <label data-aos="fade-left" className="about1">
                Yita Medical Services (YMS) is a registered enterprise (Reg NO.
                80020035497111) with an aim of providing equititable access to
                affordable high quality healthcare services with special
                attention to remote communities. We use part of our income to
                support humanitarian work done under TEC-Uganda and other
                humanitarian causes.
              </label>
              <p></p>
              <Link to="/AboutUs">
                <button>Read More</button>
              </Link>
            </div>
          </div>
          <div className="col" align="center" data-aos="fade-left">
            <img src={ab} height="500px" alt="abt-img" />
          </div>
          <div className="col ">
            <div className="aboutTime" data-aos="fade-left">
              <div>
                <h5>
                  <ion-icon name="alarm-outline"></ion-icon> Opening Hours
                </h5>
                <ul>
                  <li>Monday - Friday</li>
                  <li>8:30 am to 11:30 pm</li>
                </ul>
                <ul>
                  <li>Saturday</li>
                  <li>10:00 am to 11:30 pm</li>
                </ul>
                <ul>
                  <li>Sunday</li>
                  <li>10:00 am to 11:30 pm</li>
                </ul>
              </div>

              <div className="abouthelp" align="center">
                <label>
                  <ion-icon name="pricetags-outline"></ion-icon> You Need Help ?
                </label>

                <div className="cIcons">
                  <a
                    href="https://twitter.com/yitamusawo"
                    target="blank"
                    style={{ margin: 0, padding: 0, display: "inline-block" }}
                  >
                    <ion-icon name="location-outline"></ion-icon>
                  </a>
                  <a
                    href="https://twitter.com/yitamusawo"
                    target="blank"
                    style={{ margin: 0, padding: 0, display: "inline-block" }}
                  >
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                  <a
                    href="https://www.facebook.com/yitalife.yms?mibextid=LQQJ4d"
                    target="blank"
                    style={{ margin: 0, padding: 0, display: "inline-block" }}
                  >
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a
                    href="https://twitter.com/yitamusawo"
                    target="blank"
                    style={{ margin: 0, padding: 0, display: "inline-block" }}
                  >
                    <ion-icon name="mail-open-outline"></ion-icon>
                  </a>
                </div>

                <div align="center">
                  <button style={{ width: "80%" }}>Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
