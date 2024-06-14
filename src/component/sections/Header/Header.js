import React from "react";
import "./Header.css";
import logo from "../../../images/logo.png";
import logo2 from "../../../images/logo2.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="mmivc">
      <div className="smal">
        <div className="floatingdiv"></div>
        <div className="container hidesmall">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col first" data-aos="fade-right">
                  <ion-icon name="call-outline"></ion-icon>{" "}
                  <label>+256 777 114 327</label>
                </div>
                <div className="col first" data-aos="fade-right">
                  <ion-icon name="mail-unread-outline"></ion-icon>
                  info@yitalife.com
                </div>
              </div>
            </div>

            <div className="col" align="right" data-aos="fade-right">
              <Link to="/Appointment">
                <button className="book">BOOK APPOINTMENT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="navtabbg">
        <div className="navtab container">
          <input type="checkbox" id="nav-toggle" style={{ display: "none" }} />
          <a href="/">
            <div className="logo" align="center">
              <img className="limg" alt="logo" src={logo} />
              <img className="wimg" alt="logo1" src={logo2} />
            </div>
          </a>

          <ul class="links">
            <li>
              <Link to="/" data-aos="fade-right">
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" data-aos="fade-right">
                About
              </Link>
            </li>
            <li>
              <Link to="/Services" data-aos="fade-right">
                Services
              </Link>
            </li>
            <li>
              <Link to="/Activity" data-aos="fade-right">
                Activities
              </Link>
            </li>

            <li>
              <Link to="/Contact" data-aos="fade-right">
                Contact
              </Link>
            </li>
            <li className="socialIcons" data-aos="fade-right">
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
            </li>
          </ul>
          <label for="nav-toggle" class="icon-burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </label>
        </div>
        <div className="slogan" data-aos="fade-right">
          "A doctor in comfort of your home "
        </div>
      </div>
      <a className="btn donatebtn" href="#open-modal">
        <button
          className="btn btn-danger"
          style={{ background: "brown", width: "100%" }}
        >
          DONATE
        </button>
      </a>
      <div id="open-modal" className="modal-window">
        <div>
          <a href="#" title="Close" className="modal-close">
            Close
          </a>
          <div className="rcpdonate" align="center">
            <h5>DONATE WITH</h5>

            <ul style={{ width: "100%" }}>
              <li align="center">
                <br />
                <img
                  src={
                    "http://flashugnews.com/wp-content/uploads/2022/07/Airtel-Money-Rates-in-Uganda-2022.jpeg"
                  }
                  width="60px"
                  alt="donate"
                />
                <br />
                <label style={{ fontWeight: "bold" }}>
                  0705920614
                  <br />
                  <p>Mirembe Joel</p>
                </label>
              </li>
              <li align="center">
                <br />
                <img
                  src="https://www.african-markets.com/images/markets/jse/MTN-logo.jpg"
                  alt="sm"
                />
                <br />
                <label style={{ fontWeight: "bold" }}>
                  MOMOPA : 485644
                  <br />
                  <p>Yita life medical sercives</p>
                  <br />
                </label>
              </li>
            </ul>

            <hr />
            <div>
              <img
                src="http://freedomcity.co.ug/wp-content/uploads/2016/08/centenary-bank.png"
                alt="imgs"
              />
              <br />
              <label style={{ fontWeight: "bold" }}>
                CENTENARY BANK
                <br />
                <p>3201730226</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
