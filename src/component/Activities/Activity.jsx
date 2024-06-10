import React from "react";
import "./Activity.css";
import taxi from "../../images/taxi.jpeg";
import taxi1 from "../../images/taxi2.jpg";
import taxi2 from "../../images/taxi3.jpg";
import taxi3 from "../../images/taxi4.jpg";
import kawempe from "../../images/photo_5976566633449243966_y.jpg";
import kawempe1 from "../../images/photo_5976566633449243972_y.jpg";
import kawempe2 from "../../images/photo_5976566633449243973_y.jpg";
import kawempe3 from "../../images/photo_5976566633449243974_y.jpg";
import kawempe4 from "../../images/photo_5976566633449243979_y.jpg";
import kawempe5 from "../../images/photo_5976566633449243977_y.jpg";

function Activity() {
  return (
    <div className="activity-page">
      <h1>Recent Activities</h1>
      <div className="activity-container">
        <div className="activity-card">
          <h2>Activity 1</h2>
          <p>
            The MoU and working relationship with taxi drivers (UTOF) is taking
            shape and our doctors, nurses, lab team among other staff did a
            launch with partners like Harvey Institute of health Nkozi, and over
            80 taxi drivers received free healthcare screening, consultation,
            health education, treatment , etc We are dedicatee to revolutionise
            doctor led healthcare services to remote & mass communities.
          </p>
          <div className="image-gallery">
            <img src={taxi} alt="Activity 1" />
            <img src={taxi2} alt="Activity 1" />
            <img src={taxi3} alt="Activity 1" />
            <img src={taxi1} alt="Activity 1" />
          </div>
        </div>
        <div className="activity-card">
          <h2>Activity 2</h2>
          <p>
            We joined the team mobilized by Uganda Medical Association & Radio
            Maria to offer free outdoor healthcare services (Medical camp) to
            God's people of Kawempe Jinja Karoli and sorounding areas in
            Kampala. Specialists physicians, general practitioners and ENT
            surgeons aided the volunteer work. As Yita Life out focus is to
            bridge the gap between the patient and the doctor, to roll out cost
            effective health promotion programs through outdoor healthcare and
            to ensure accessibility of doctors across the continent starting
            from Uganda
          </p>
          <div className="image-gallery">
            <img src={kawempe} alt="Activity 2" />
            <img src={kawempe1} alt="Activity 2" />
            <img src={kawempe2} alt="Activity 2" />
            <img src={kawempe3} alt="Activity 2" />
            <img src={kawempe4} alt="Activity 2" />
            <img src={kawempe5} alt="Activity 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
