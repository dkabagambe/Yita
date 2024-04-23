import React from "react";
import "./Partner.css";

import demoPartner from "../../../images/partners/pp.png";

export default function Partner() {
  return (
    <div className="partner" style={{ background: "white" }}>
      <div className="container">
        <h4 className="Rcolor">Our Partners</h4>
        <br />
        <p>
          Partnerships make our services more equitable & accesible. We thank
          our current partners & invite more new credible partnerships on board
        </p>

        <img src={demoPartner} />
      </div>
    </div>
  );
}
