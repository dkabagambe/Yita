import React from "react";
import "./Contact.css";

import cont from "../../../images/11.jpg";

export default function Contact() {
  return (
    <div>
      <div
        className="contactPage"
        align="center"
        style={{ background: "#112898", zIndex: -10 }}
      >
        <div>
          <h3>How Can We Help?</h3>
          <br />
          <h4>Send us a message</h4>
        </div>
      </div>
      <div className="container">
        <div className="container">
          <div className="innerwrap">
            <section className="section1 clearfix">
              <div className="textcenter">
                <span className="shtext">Contact Us</span>
                <span className="seperator"></span>
                <h1>Drop Us a Mail</h1>
              </div>
            </section>

            <section className="section2 row">
              <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                <img src={cont} width="80%" alt="img-contact" />
              </div>
              <div className="col column2 last">
                <div className="sec2innercont">
                  <div className="sec2addr">
                    <p>Upper new mulago road , Kampala Uganda.</p>
                    <p>
                      <span className="collig">Phone :</span> +256 777 114 327
                    </p>
                    <p>
                      <span className="collig">Email :</span> info@yitalife.com
                    </p>
                    <p>
                      <span className="collig">Fax :</span> +256 777 114 327
                    </p>
                  </div>
                </div>
                <div className="sec2contactform">
                  <h3 className="sec2frmtitle">
                    Want to Know More? Drop Us a Mail
                  </h3>
                  <form action="">
                    <div className="clearfix">
                      <input
                        className="col2 first"
                        type="text"
                        placeholder="FirstName"
                      />
                      <input
                        className="col2 last"
                        type="text"
                        placeholder="LastName"
                      />
                    </div>
                    <div className="clearfix">
                      <input
                        className="col2 first"
                        type="Email"
                        placeholder="Email"
                      />
                      <input
                        className="col2 last"
                        type="text"
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="clearfix">
                      <textarea name="textarea" id="" cols="30" rows="7">
                        Your message here...
                      </textarea>
                    </div>
                    <div className="clearfix">
                      <input type="submit" value="Send" />
                    </div>
                  </form>
                </div>
              </div>
            </section>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
