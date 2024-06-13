import React, { useState } from "react";
import "./About.css";

export default function About() {
  const [index, setIndex] = useState(0);
  return (
    <div className="abt">
      <div className="">
        <div className="heading container" align="center">
          <br />
          <br />
          <label style={{ marginRight: "30px" }}></label>
          <span>About Us</span>
          <label style={{ marginLeft: "30px" }}></label>
        </div>
        {/* <div className="backLetter">SERVICES</div> */}
        <br />
        <br />

        <div>
          <div align="center" className="p_y ">
            <div className="container">
              <h3>About Yita Life</h3>
              <p>
                Yita Medical Services (YMS) is a registered enterprise (Reg NO.
                80020035497111) with an aim of providing equititable access to
                affordable high quality healthcare services with special
                attention to remote communities. YMS uses it’s profits to
                support humanitarian work done under TEC-Uganda and other
                humanitarian causes.
                <br /> <br /> Our story dates back in 2017 but active work and
                services started in 2020 when COVID 19 struck the globe.Our
                doctors and volunteers under TEC-Uganda mobilised relief items
                for vulnerable communities and as well provided COVID 19
                healthcare services remotely, a project we dubbed ‘’ Yita Musawo
                ‘’ where over one thousand (1000) people directly benefited.
                <br /> <br />
                We have since rebranded and diversified our scope of work to
                include income generating services and products for the
                sustainability of our humanitarian work, and maintenance and
                facilitation of our employees, staff and as well extend our
                services across Uganda and Africa.
              </p>
              <p></p>
            </div>
          </div>

          <br />
          <br />
          <br />

          <div align="center" style={{ padding: "30px" }}>
            <h3 data-aos="fade-left">Our Vision</h3>
            <p data-aos="fade-left">
              Communities and institution with high regard and support for good
              health and well-being practices <br />
              including preventive medicine and access to affordable medical
              doctor services at home and workplace continuum.
            </p>
            <p></p>
          </div>
          <br />
          <br />
          <br />

          <div className="container">
            <div align="center">
              <h3 data-aos="fade-left">Our Mission</h3>
              <div className="row s_v">
                <div className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
                  <div>
                    <p data-aos="fade-left">
                      To be the leading providers of outdoor and telemedicine
                      healthcare services in Uganda and Africa.
                    </p>
                  </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
                  <div>
                    <p data-aos="fade-left">
                      To promote and advocate for the growth of home based care,
                      telemedicine and outdoor medical services industry in
                      Africa.
                    </p>
                  </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
                  <div>
                    <p data-aos="fade-left">
                      To advocate for equitable access and affordability of
                      expert and specialised medical services to both urban and
                      rural communities of Uganda/Africa
                    </p>
                  </div>
                </div>
              </div>
              <p></p>
            </div>
          </div>
          <div className="container">
            <div className="navtb">
              <ul data-aos="fade-left">
                <li
                  className={index === 0 ? "active" : ""}
                  onClick={() => setIndex(0)}
                >
                  CORE VALUES
                </li>
                <li
                  className={index === 1 ? "active" : ""}
                  onClick={() => setIndex(1)}
                >
                  VALUE PROPOSITION
                </li>
              </ul>

              <div
                className="listt_b"
                style={index === 0 ? { display: "block" } : { display: "none" }}
              >
                <ul data-aos="fade-left">
                  <li>
                    Respect to the principles of ethics and professionalism
                  </li>
                  <li>Innovation, creativity and technological application</li>
                  <li>Team work , partnership and mutual respect</li>
                  <li>
                    Community and people centered healthcare services and
                    products
                  </li>
                </ul>
              </div>
              <div
                className="listt_b"
                style={index === 1 ? { display: "block" } : { display: "none" }}
              >
                <ul>
                  <li>
                    Transition from non-critical unnecessary hospital visits to
                    access to expert doctor and all healthcare services from the
                    comfort of your home, institution and work environment.
                  </li>
                  <li>
                    Our services save you from excessive financial costs
                    resulting from unnecessary admissions, transport, and
                    traffic jam and waiting time stress.
                  </li>
                  <li>
                    Our Preventive healthcare promotion packages offer screening
                    services which enable early diagnosis of several diseases
                    both communicable and non-communicable.
                  </li>
                  <li>
                    Very affordable accessible services compared to the hospital
                    based care services. You pay for only direct costs like
                    doctor, nurses, laboratory, pharmacy services etc.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
