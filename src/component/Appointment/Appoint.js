import React, { useState } from "react";
import "./Appoint.css";
import logo from "../../images/logo.png";
import Api from "../../Data/Api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
    visidate: "",
    paymentmode: "",
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

      await Api.sendmail(datax).then((res) => {
        console.log(res.data);
        if (res.data === "success") {
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
          <form className="form-group">
            <div className="row appinttab">
              <div className="col  col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 ">
                <div align="center">
                  <h3>PART A</h3>
                </div>
                <div className="form-group">
                  <label for="first_name">Name of patient</label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    placeholder="Name"
                    required
                    autoFocus
                    autoComplete="on"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="name"
                  />
                  <span className="help-block"></span>
                </div>
                <div className="form-group">
                  <label for="last_name">Age</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    placeholder="Age"
                    required
                    autoFocus
                    autoComplete="on"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="age"
                  />
                  <span className="help-block"></span>
                </div>
                <div className="form-group">
                  <label for="email_address">Sex / Gender</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email_addr"
                    placeholder="Gender"
                    required
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="gender"
                  />
                  <span className="help-block"></span>
                </div>

                <div className="form-group">
                  <label for="phone_number">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="age"
                    placeholder="Address"
                    min="1"
                    max="110"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="address"
                  />
                  <span className="help-block"></span>
                </div>
                <div className="form-group">
                  <label for="dob">Tribe</label>
                  <input
                    type="text"
                    className="form-control"
                    id="age"
                    placeholder="Tribe"
                    min="1"
                    max="110"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="tribe"
                  />
                  {/* <input type="date" className="form-control" id="dob" /> */}
                  <span className="help-block"></span>
                </div>
                <div className="form-group">
                  <label for="age">Occupation / Work</label>
                  <input
                    type="text"
                    className="form-control"
                    id=" "
                    placeholder="Occupation / Work"
                    min="1"
                    max="110"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="occupation"
                  />
                  <span className="help-block"></span>
                </div>
                <div className="form-group">
                  <label for="age">Religion</label>
                  <input
                    type="text"
                    className="form-control"
                    id="age"
                    placeholder="Religion"
                    min="1"
                    max="110"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="religion"
                  />
                  <span className="help-block"></span>
                </div>
                <div className="form-group">
                  <label for="age">Education Level</label>
                  <input
                    type="text"
                    className="form-control"
                    id="age"
                    placeholder="Education Level"
                    min="1"
                    max="110"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="level"
                  />
                  <span className="help-block"></span>
                </div>
                <div className="form-group">
                  <label for="age">Mobile Contact</label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    placeholder="Mobile Contact"
                    min="1"
                    max="110"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="phone"
                  />
                  <span className="help-block"></span>
                </div>
                <div className="form-group">
                  <label for="age">Email Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="age"
                    placeholder="Email Address"
                    min="1"
                    max="110"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="email"
                  />
                  <span className="help-block"></span>
                </div>
                <br />
                <br />
              </div>
              <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 leftb">
                <div align="center">
                  <h3>PART B</h3>
                </div>

                <div className="form-group">
                  <label for="body_weight">Body Weight</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    placeholder="Body Weight"
                    required
                    autoFocus
                    autoComplete="on"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="weight"
                  />
                  <span className="help-block"></span>
                </div>
                <div className="form-group">
                  <label for="body_weight">Body Height</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    placeholder="Body Height"
                    required
                    autoFocus
                    autoComplete="on"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="height"
                  />
                  <span className="help-block"></span>
                </div>
                <div className="form-group">
                  <label for="body_weight">Body Mass Index (BMI)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    placeholder="Body Mass Index (BMI)"
                    required
                    autoFocus
                    autoComplete="on"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="mass"
                  />
                  <span className="help-block"></span>
                </div>
                <div className="form-group">
                  <label for="body_weight">Do you smoke ?</label>
                  <select
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="smoke"
                  >
                    <option value="">YES / NO</option>
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                  </select>
                  <span className="help-block"></span>
                </div>
                <br />
                <div className="form-group">
                  <label for="body_weight">Do take Alcohol ?</label>
                  <select
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="alcohol"
                  >
                    <option value="">YES / NO</option>
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                  </select>
                  <span className="help-block"></span>
                </div>
                <br />

                <hr />
                <div align="center">
                  <h3>PART C</h3>
                </div>
                <br />

                <div className="form-group">
                  <label for="body_weight">Packages?</label>
                  <select
                    type="text"
                    className="form-control"
                    id="last_name"
                    placeholder=""
                    required
                    autoFocus
                    autoComplete="on"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="package"
                  >
                    {Display}
                  </select>

                  <span className="help-block"></span>
                </div>
                <br />
                <br />
                <div className="form-group">
                  <label for="body_weight">What is your concern today?</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="last_name"
                    placeholder="TYpe your Concern"
                    required
                    autoFocus
                    autoComplete="on"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="otherconcern"
                  />

                  <span className="help-block"></span>
                </div>
                <br />
                <div className="form-group">
                  <label for="body_weight">
                    Any other concern you would like the doctor to know today?
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="last_name"
                    placeholder="Yes / No"
                    required
                    autoFocus
                    autoComplete="on"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="otherconcern"
                  />
                  <span className="help-block"></span>
                </div>
              </div>
            </div>
            <br />
            <hr />
            <div className="row" align=" ">
              <div
                className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 uptext"
                style={{
                  borderRight: "1px solid lightgrey",
                  paddingLeft: "10%",
                }}
              >
                <div align=" ">
                  <h3>PART C</h3>
                </div>
                <div className="form-group">
                  <label for="first_name">
                    Any drugs/medicines you currently taking? If yes, list them
                    down where possible
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    placeholder="Any drugs"
                    required
                    autoFocus
                    autoComplete="on"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="udrug"
                  />
                  <span className="help-block"></span>
                </div>
                <div className="form-group">
                  <label for="last_name">
                    Any medicines/drugs/treatment taken earlier? If yes, list
                    them where possible
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    placeholder="Any Medicine"
                    required
                    autoFocus
                    autoComplete="on"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="anymedi"
                  />
                  <span className="help-block"></span>
                </div>
                <div className="form-group">
                  <label for="email_address">
                    Any known drug/medicine allergies? If yes, list them
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email_addr"
                    placeholder="Unknown Drug"
                    required
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="unknowndrug"
                  />
                  <span className="help-block"></span>
                </div>

                <div className="form-group">
                  <label for="phone_number">
                    Any past surgery/blood transfusion/major accident? If yes,
                    list them
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone_number"
                    placeholder="Any Survery or Other"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="anypastsurvery"
                  />
                  <span className="help-block"></span>
                </div>
                <div className="form-group">
                  <label for="phone_number">
                    Any known family or inherited diseases? Like diabetes, high
                    blood pressure, sickle cell etc
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone_number"
                    placeholder="Family Disease"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="unknownfamily"
                  />
                  <span className="help-block"></span>
                </div>
                <div className="form-group">
                  <label for="phone_number">
                    Any known chronic disease? Like HIV/AIDS and if yes, list
                    them
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone_number"
                    placeholder="Any known chronic disease"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="unknownchronic"
                  />
                  <span className="help-block"></span>
                </div>
              </div>
              <div
                className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12 uptext"
                style={{
                  paddingLeft: "10%",
                }}
              >
                <div align=" ">
                  <h3>PART D</h3>
                </div>
                <div className="form-group">
                  <label for="first_name">Doctor Visit time of choice</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="first_name"
                    placeholder="Visit time"
                    required
                    autoFocus
                    autoComplete="on"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="visittime"
                  />
                  <span className="help-block"></span>
                </div>
                <div className="form-group">
                  <label for="last_name">Doctor Visit Date of choice</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="last_name"
                    placeholder="Visit Date"
                    required
                    autoFocus
                    autoComplete="on"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="visidate"
                  />
                  <span className="help-block"></span>
                </div>

                <div className="form-group">
                  <label for="phone_number">Feedback</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone_number"
                    placeholder="Feedback"
                    onChange={(event) => {
                      handleFormChange(event);
                    }}
                    name="feedback"
                  />
                  <span className="help-block"></span>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div align="center">
              <input type="checkbox" className="checkBox" />
              <label>
                I agree the information is correct and am ready to book now
              </label>
            </div>
            <br /> <br />
            <button
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              onClick={() => createAppoint()}
            >
              BOOK NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
