import React from "react";
import "./Activity.css";
import taxi from "../../../images/taxi.jpeg";
import taxi1 from "../../../images/taxi2.jpg";
import taxi2 from "../../../images/taxi3.jpg";
import taxi3 from "../../../images/taxi4.jpg";
import kawempe from "../../../images/photo_5976566633449243966_y.jpg";
import kawempe1 from "../../../images/photo_5976566633449243972_y.jpg";
import kawempe2 from "../../../images/photo_5976566633449243973_y.jpg";
import kawempe3 from "../../../images/photo_5976566633449243974_y.jpg";
import kawempe4 from "../../../images/photo_5976566633449243979_y.jpg";
import kawempe5 from "../../../images/photo_5976566633449243977_y.jpg";
import naguru from "../../../images/photo_5976566633449243960_y.jpg";
import naguru1 from "../../../images/photo_5976566633449243963_y.jpg";
import naguru2 from "../../../images/photo_5976566633449243957_y.jpg";
import naguru3 from "../../../images/photo_5976566633449243964_y.jpg";
import talkshow3 from "../../../images/WhatsApp Image 2024-07-02 at 11.02.46 PM (2).jpeg";
import talkshow from "../../../images/WhatsApp Image 2024-07-02 at 11.02.47 PM.jpeg";
import talkshow1 from "../../../images/photo_5976566633449244005_y.jpg";
import talkshow2 from "../../../images/WhatsApp Image 2024-07-02 at 11.06.17 PM (2).jpeg";

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
            launch with partners like Kommute, Harvey Institute of health Nkozi,
            and over 150 taxi drivers received free healthcare
            screening,consultation, health education, treatment , etc We are
            dedicated to revolutionise doctor led healthcare services to
            individuals, remote areas & mass communities.
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
        <div className="activity-card">
          <h2>Health Awareness Event at Naguru Go Down</h2>
          <p>
            our team organized a successful health awareness event at Naguru Go
            Down, a vibrant community hub in the heart of the city. The event
            aimed to educate and sensitize the public on the importance of
            prioritizing health and wellness in their daily lives.
          </p>
          <div className="image-gallery">
            <img src={naguru} alt="naguru" />
            <img src={naguru1} alt="naguru2" />
            <img src={naguru2} alt="naguru 3" />
            <img src={naguru3} alt="naguru 4" />
          </div>
        </div>
        <div className="activity-card">
          <h2>Talk shows </h2>
          <p>
            Our team actively engages in health talk shows across multiple
            platforms, including radio stations, television channels, online
            platforms, and community events, sharing expert insights and advice
            on various health topics, addressing audience questions and
            concerns, and providing in-depth information and expert opinions. We
            utilize social media, podcasts, and webinars to reach a wider
            audience, organize and participate in health fairs, workshops, and
            seminars, and engage with the public to provide personalized
            guidance. By broadening our reach, we aim to educate people on
            health and wellness, empower individuals to take control of their
            health, inspire healthy lifestyle choices, and provide resources and
            support for overall well-being, making a positive impact on the
            health and lives of individuals in our community and beyond.
          </p>
          <div className="image-gallery">
            <img src={talkshow} alt="talkshow" />
            <img src={talkshow1} alt="talkshow2" />
            <img src={talkshow2} alt="talkshow3" />
            <img src={talkshow3} alt="talkshow 4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
