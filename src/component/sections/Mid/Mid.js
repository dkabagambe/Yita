import React from "react";
import "./Mid.css";

export default function Mid() {
  return (
    <div className="middle">
      <div className="container">
        <div className="row">
          <div className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12 des1">
            <div>
              <h4 className="Rcolor" data-aos="fade-left">
                Yita life seeks to revolutionalise access to medical doctor
                services through homestead and community based approaches
              </h4>
              {/* <p>
                YMS under Yita Life seeks to revolutionalise access and
                affordability medical doctor services across Africa.
              </p> */}
            </div>
          </div>
          <div className="col" data-aos="fade-left">
            <div className="row iptap">
              <div className="col" align="center">
                <div>
                  <ion-icon name="git-network-outline"></ion-icon>
                </div>
                <h4>Emergency Care</h4>
              </div>
              <div className="col" align="center">
                <div>
                  <ion-icon name="rocket-outline"></ion-icon>
                </div>
                <h4>24 hrs Service</h4>
              </div>
              <div className="col" align="center">
                <div>
                  <ion-icon name="thermometer-outline"></ion-icon>
                </div>
                <h4>qualified doctors</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
