// import { Button } from "bootstrap";
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="section bg-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">
                  Information
                </h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/AboutUs">About us</a>
                  </li>
                  <li>
                    <a href="/Services">Our Services</a>
                  </li>
                  <li>
                    <a href="/Contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">
                  Packages
                </h6>

                <ul className="list-unstyled footer-link mt-4">
                  <li></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">
                  Help
                </h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li>
                    <a href="/Appointment">Make Appointment </a>
                  </li>
                  <li>
                    <a href="/Contact">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">
                  Contact Us
                </h6>
                <p className="contact-info mt-4">
                  Contact us if need help with anything
                </p>
                <p className="contact-info">Email : info@yitalife.com</p>
                <p className="contact-info">+256 777 114 327</p>
                <div className="mt-5"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="footer-alt mb-0 f-14">
            {new Date().getFullYear()} &copy; Yita,All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
