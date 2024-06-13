import React from "react";
import "./Partner.css";

import demoPartner from "../../../images/partners/pp.png";

export default function Partner() {
  return (
    <div className="partner">
      <div className="container">
        <h4 className="Rcolor">Our Partners</h4>
        <br />
        <p className="partn">
          Partnerships make our services more equitable & accesible. We thank
          our current partners & invite more new credible partnerships on board
        </p>

        <img src={demoPartner} alt="partners" />
      </div>
    </div>
  );
}
