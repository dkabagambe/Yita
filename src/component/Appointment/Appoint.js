import { useState } from "react";
import "./Appoint.css";
import logo from "../../images/logo.png";
import Api from "../../Data/Api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

export default function Appoint() {
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const rand =
    Math.floor(Math.random() * (500000000 - 100000000 + 1)) + 100000000;
  const [appoints, setData] = useState({
    name: "",
    age: "",
    gender: "",
    address: "",
    tribe: "",
    occupation: "",
    religion: "",
    level: "",
    phone: "",
    email: "",
    weight: "",
    height: "",
    mass: "",
    smoke: "",
    alcohol: "",
    concern: "",
    package: "",
    otherconcern: "",
    visittime: "",
    ref: "",
    feedback: "",
    udrug: "",
    anymedi: "",
    unknowndrug: "",
    anypastsurvery: "",
    unknownfamily: "",
    unknownchronic: "",
    cost: "",
    qty: "",
    action: "Confirming Cost",
    PaidId: "",
    PaidAmount: "",
    Tx: rand,
  });

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
      name: "Doctor home visit &  care",
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
    { name: "Pharmacy", icon: <ion-icon name="pulse-outline"></ion-icon> },
    {
      name: "Medicine Refill",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Laboratory sample pick",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    { name: "Peadiatrician", icon: <ion-icon name="pulse-outline"></ion-icon> },
    { name: "Gynecologist", icon: <ion-icon name="pulse-outline"></ion-icon> },
    {
      name: "General Doctor",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    { name: "Surgeon", icon: <ion-icon name="pulse-outline"></ion-icon> },
    {
      name: "Equipment Purchase",
      icon: <ion-icon name="pulse-outline"></ion-icon>,
    },
    {
      name: "Family planning",
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
    { name: "Medical camp", icon: <ion-icon name="pulse-outline"></ion-icon> },
    { name: "Mental Health", icon: <ion-icon name="pulse-outline"></ion-icon> },
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
    { name: "X-ray", icon: <ion-icon name="pulse-outline"></ion-icon> },
    { name: "CT scan", icon: <ion-icon name="pulse-outline"></ion-icon> },
    { name: "MRI", icon: <ion-icon name="pulse-outline"></ion-icon> },
    { name: "Angiogram", icon: <ion-icon name="pulse-outline"></ion-icon> },
  ]);
  const Display = Service.map((_b, index) => (
    <option
      key={index}
      value={_b.name}
      style={{
        textTransform: "capitalize",
      }}
    >
      {_b.name}
    </option>
  ));

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setData({ ...appoints, [name]: value });
    console.log("appoints", appoints);
  };

  async function createAppoint(event) {
    event.preventDefault();

    if (
      appoints.name.length < 2 ||
      appoints.otherconcern.length < 2 ||
      appoints.phone.length < 2 ||
      appoints.email.length < 2
    ) {
      window.alert("Some fields are required");
    } else {
      await Api.createAppointments(appoints).then((res) => {
        Swal.fire(
          "Success!",
          "New appointment was created please check your mail",
          "success"
        );
      });

      let datax = {
        name: appoints.name,
        from: appoints.email,
        Tx: appoints.Tx,
        data:
          "Get your Reciept here  Reciept https://yitalife.com/Reciept?" +
          appoints.Tx,
        subject: "New Appointment Created",
        msg: "We have received your appointment request. You will receive a mail when your appointment is confirmed.",
      };

      // Send email using EmailJS
      emailjs
        .send(
          "service_u3hyuoi", // replace with your EmailJS service ID
          "template_ebhr6eg", // replace with your EmailJS template ID
          datax,
          "JSRSaOcgOlLRsjIRO" // replace with your EmailJS user ID,this is the public key
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            window.alert("Mail sent successfully");
          } else {
            window.alert("Mail failed");
          }
        });

      navigate(`/`);
      window.location.reload();
    }
  }

  return (
    <div className="apxt">
      <div className="container">
        <div className="logbg" align="center">
          <img src={logo} alt="Logo" />
        </div>
        <div className="heading" align="center">
          <br />
          <br />
          <label style={{ marginRight: "30px" }}></label>
          <span>Appointment form</span>
          <label style={{ marginLeft: "30px" }}></label>
        </div>
        <br />
        <div align="center" className="uptd">
          <h2>
            Please fill out all information,
            <br /> so that we may better serve you.
          </h2>
        </div>
        <br />

        <div className="appontTabX">
          <form className="form" onSubmit={createAppoint}>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  required
                  value={appoints.name}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  placeholder="Age"
                  name="age"
                  required
                  value={appoints.age}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <select
                  name="gender"
                  required
                  value={appoints.gender}
                  onChange={handleFormChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  required
                  value={appoints.address}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  required
                  value={appoints.phone}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  value={appoints.email}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Occupation"
                  name="occupation"
                  required
                  value={appoints.occupation}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Tribe"
                  name="tribe"
                  required
                  value={appoints.tribe}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <select
                  name="religion"
                  required
                  value={appoints.religion}
                  onChange={handleFormChange}
                >
                  <option value="">Select Religion</option>
                  <option value="christianity">Christianity</option>
                  <option value="islam">Islam</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="col-md-6">
                <select
                  name="level"
                  required
                  value={appoints.level}
                  onChange={handleFormChange}
                >
                  <option value="">Select Level</option>
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="tertiary">Tertiary</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="number"
                  placeholder="Weight"
                  name="weight"
                  required
                  value={appoints.weight}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  placeholder="Height"
                  name="height"
                  required
                  value={appoints.height}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="number"
                  placeholder="Body Mass Index"
                  name="mass"
                  required
                  value={appoints.mass}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-md-6">
                <select
                  name="smoke"
                  required
                  value={appoints.smoke}
                  onChange={handleFormChange}
                >
                  <option value="">Do you smoke?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <select
                  name="alcohol"
                  required
                  value={appoints.alcohol}
                  onChange={handleFormChange}
                >
                  <option value="">Do you take alcohol?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="What is your main complaint(s) today"
                  name="otherconcern"
                  required
                  value={appoints.otherconcern}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <select
                  name="ref"
                  required
                  value={appoints.ref}
                  onChange={handleFormChange}
                >
                  <option value="">How did you hear about us?</option>
                  <option value="google">Google</option>
                  <option value="facebook">Facebook</option>
                  <option value="twitter">Twitter</option>
                  <option value="instagram">Instagram</option>
                  <option value="friend">Friend</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="col-md-6">
                <input
                  type="date"
                  placeholder="Visit Date"
                  name="visitdate"
                  required
                  value={appoints.visitdate}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Any Chronic Medication you're currently taking"
                  name="anymedi"
                  required
                  value={appoints.anymedi}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Any known disease in Family History"
                  name="unknownfamily"
                  required
                  value={appoints.unknownfamily}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Any Chronic Disease/Allergy"
                  name="unknownchronic"
                  required
                  value={appoints.unknownchronic}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  placeholder="Quantity"
                  name="qty"
                  required
                  value={appoints.qty}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Feedback"
                  name="feedback"
                  required
                  value={appoints.feedback}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Unknown Drug"
                  name="unknowndrug"
                  required
                  value={appoints.unknowndrug}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ marginTop: "40px", marginBottom: "10px" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
