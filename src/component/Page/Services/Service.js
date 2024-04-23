import React, { useState } from "react";
import Subscribe from "../../sections/Subscribe/Subscribe";
import "./Service.css";

export default function Service() {
  const [Service, setService] = useState([
    {
      name: "school student medical examination",
      icon: <ion-icon name="bookmark-outline"></ion-icon>,
    },
    {
      name: "Institutional Staff Medical Assesssment",
      icon: <ion-icon name="git-merge-outline"></ion-icon>,
    },
    {
      name: "Hospital at Home Care ( HOME CARE )",
      icon: <ion-icon name="barcode-outline"></ion-icon>,
    },
    {
      name: "Nursing and Bedside Medical Care",
      icon: <ion-icon name="color-fill-outline"></ion-icon>,
    },
    {
      name: "Antenantal Care",
      icon: <ion-icon name="color-fill-outline"></ion-icon>,
    },
    {
      name: "Family Doctors’ Packages ",
      icon: <ion-icon name="color-fill-outline"></ion-icon>,
    },
    {
      name: "Remote Patient Monitoring",
      icon: <ion-icon name="color-fill-outline"></ion-icon>,
    },
    {
      name: "Virtual Doctor and Midwife Consultations",
      icon: <ion-icon name="storefront-outline"></ion-icon>,
    },
    {
      name: "Referral & link to tertiary Care ",
      icon: <ion-icon name="storefront-outline"></ion-icon>,
    },
    {
      name: "Patient follow up and chronic Medicare",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Visiting Doctors ( Institution and Individual )",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Ambulance Services",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Elective Surgical Services",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Doctor Consult",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Mid wife consult",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Medicine delivery",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Pharmacy",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Medicine Refill",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Laboratory sample pick",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Peadiatrician",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Gynecologist",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "General Doctor",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Surgeon",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Equipment Purchase",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "  Family planning",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Dental Care services",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Community Outreach",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Healthcare Campaign",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Environmental Healthcare Consultancy",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Medical camp",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Mental Health",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Psychiatric Healthcare",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Psychologist Services",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Radiology & Imaging",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Ultrasound scan",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "X-ray",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "CT scan",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "MRI",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Angiogram",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
  ]);

  const Display = Service.map((_b) => (
    <div className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
      <div className="services" data-aos="zoom-in">
        <div className="icon" style={{ color: "#ec0002" }}>
          {_b.icon}
        </div>
        <div>
          <h5
            style={{
              textTransform: "capitalize",
            }}
          >
            {_b.name}{" "}
          </h5>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="servicepx">
      <section className="section_all" id="about">
        <div className="container">
          <div className="heading" align="center">
            <br />
            <br />
            <label style={{ marginRight: "30px" }}></label>
            <span>Service</span>
            <label style={{ marginLeft: "30px" }}></label>
          </div>
          {/* <div className="backLetter">SERVICES</div> */}
          <br />
          <br />
          <div className="row" data-aos="zoom-in" align="center">
            <p></p>
          </div>
          <div className="serviceTab">
            <div className="row">{Display}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
