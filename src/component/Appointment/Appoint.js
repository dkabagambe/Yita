import { useState } from "react";
import "./Appoint.css";
import logo from "../../images/logo.png";
// import Api from "../../Data/Api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

export default function Appoint() {
  const navigate = useNavigate();
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

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setData({ ...appoints, [name]: value });
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
      return;
    }

    try {
      let datax = {
        name: appoints.name,
        age: appoints.age,
        gender: appoints.gender,
        address: appoints.address,
        tribe: appoints.tribe,
        occupation: appoints.occupation,
        religion: appoints.religion,
        level: appoints.level,
        phone: appoints.phone,
        email: appoints.email,
        weight: appoints.weight,
        height: appoints.height,
        mass: appoints.mass,
        smoke: appoints.smoke,
        alcohol: appoints.alcohol,
        concern: appoints.concern, // Ensure concern is included
        package: appoints.package, // Ensure package is included
        otherconcern: appoints.otherconcern,
        visittime: appoints.visittime,
        visitdate: appoints.visitdate,
        paymentmode: appoints.paymentmode, // Ensure paymentmode is included
        ref: appoints.ref,
        feedback: appoints.feedback,
        udrug: appoints.udrug, // Ensure udrug is included
        anymedi: appoints.anymedi,
        unknowndrug: appoints.unknowndrug,
        anypastsurvery: appoints.anypastsurvery, // Ensure anypastsurvery is included
        unknownfamily: appoints.unknownfamily,
        unknownchronic: appoints.unknownchronic,
        data:
          "Get your Receipt here: Receipt https://yitalife.com/Receipt?" +
          appoints.Tx,
        subject: "New Appointment Created",
        msg: "We have received your appointment request. You will receive a mail when your appointment is confirmed.",
      };

      console.log(datax); // Log data to ensure all fields are present

      const res = await emailjs.send(
        "service_u3hyuoi",
        "template_5cg11g6",
        datax,
        "JSRSaOcgOlLRsjIRO"
      );

      if (res.status === 200) {
        Swal.fire("Success!", "Mail sent successfully", "success");
      } else {
        Swal.fire("Error!", "Failed to send mail", "error");
      }

      navigate(`/`);
      window.location.reload();
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire("Error!", "Failed to send mail", "error");
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
