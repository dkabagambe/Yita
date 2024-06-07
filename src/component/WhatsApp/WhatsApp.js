import React from "react";
import ReactWhatsapp from "react-whatsapp";
import "./WhatsApp.css";

import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div>
      <ReactWhatsapp
        number="2-567-771-14327"
        message="Hello i got this number from Yita Medical Services !!!"
        className="whatsapp_float"
      >
        <FaWhatsapp className="whatsapp" />
      </ReactWhatsapp>
    </div>
  );
};
export default WhatsApp;
