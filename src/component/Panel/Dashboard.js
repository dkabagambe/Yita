import React, { useEffect, useState } from "react";
import Api from "../../Data/Api";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [id, setId] = useState(0);
  const [REf, setRef] = useState(0);
  const [data, setData] = useState([]);
  const [view, setView] = useState(0);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    let view = window.location.href.split("?")[1];
    setId(view);
    getAppoitDate(view);
  }, []);

  const handleFormChange = (event, index) => {
    // console.log("Dat1", data);
    let datat = [...data];
    data[index]["cost"] = event.target.value;
    setData(datat);
    // console.log("Dat3", data);
  };

  const getAppoitDate = async (e) => {
    await Api.getAppointments(e).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  const dataDivRow =
    data.length > 0 ? (
      data.map((b, a) => (
        <tr>
          <td>{b.Id}</td>
          <td>
            <b>
              <span style={{ color: "brown" }}>{b.action}</span>
            </b>
          </td>
          <td>{b.package}</td>
          <td>{1}</td>
          <td>
            <input
              type="number"
              name="cost"
              onChange={(e) => handleFormChange(e, a)}
              value={data[a].cost}
              style={{ border: "1px solid lightgrey" }}
            />
          </td>

          <td align="center">
            <button
              style={{ background: "lightblue" }}
              onClick={() => setView(b.Id)}
            >
              View
            </button>
            <button onClick={() => paynow(a, "Approved")}>Approve</button>
            <button
              style={{ background: "brown" }}
              onClick={() => paynow(a, "Confirmed")}
            >
              Confirm
            </button>
            <button
              style={{ background: "green" }}
              onClick={() => paynow(a, "Pending")}
            >
              Pending
            </button>

            <div
              id="myModal"
              className="modal"
              style={b.Id == view ? { display: "block" } : { display: "none" }}
            >
              <div className="modal-content">
                <span className="close" onClick={() => setView(0)}>
                  &times;
                </span>

                <div className="appontTabX viewtbb">
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
                            //  placeholder="Name"
                            required
                            autoFocus
                            autoComplete="on"
                            name="name"
                            disabled
                            value={b.name}
                          />
                          <span className="help-block"></span>
                        </div>
                        <div className="form-group">
                          <label for="last_name">Age</label>
                          <input
                            type="text"
                            className="form-control"
                            id="last_name"
                            //  placeholder="Age"
                            required
                            autoFocus
                            autoComplete="on"
                            name="age"
                            disabled
                            value={b.age}
                          />
                          <span className="help-block"></span>
                        </div>
                        <div className="form-group">
                          <label for="email_address">Sex / Gender</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email_addr"
                            //  placeholder="Gender"
                            required
                            name="gender"
                            disabled
                            value={b.gender}
                          />
                          <span className="help-block"></span>
                        </div>

                        <div className="form-group">
                          <label for="phone_number">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            id="age"
                            //  placeholder="Address"
                            min="1"
                            max="110"
                            name="address"
                            disabled
                            value={b.address}
                          />
                          <span className="help-block"></span>
                        </div>
                        <div className="form-group">
                          <label for="dob">Tribe</label>
                          <input
                            type="text"
                            className="form-control"
                            id="age"
                            //  placeholder="Tribe"
                            min="1"
                            max="110"
                            name="tribe"
                            disabled
                            value={b.tribe}
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
                            //  placeholder="Occupation / Work"
                            min="1"
                            max="110"
                            name="occupation"
                            disabled
                            value={b.occupation}
                          />
                          <span className="help-block"></span>
                        </div>
                        <div className="form-group">
                          <label for="age">Religion</label>
                          <input
                            type="text"
                            className="form-control"
                            id="age"
                            //  placeholder="Religion"
                            min="1"
                            max="110"
                            name="religion"
                            disabled
                            value={b.religion}
                          />
                          <span className="help-block"></span>
                        </div>
                        <div className="form-group">
                          <label for="age">Education Level</label>
                          <input
                            type="text"
                            className="form-control"
                            id="age"
                            //  placeholder="Education Level"
                            min="1"
                            max="110"
                            name="level"
                            disabled
                            value={b.level}
                          />
                          <span className="help-block"></span>
                        </div>
                        <div className="form-group">
                          <label for="age">Mobile Contact</label>
                          <input
                            type="number"
                            className="form-control"
                            id="age"
                            //  placeholder="Mobile Contact"
                            min="1"
                            max="110"
                            name="phone"
                            disabled
                            value={b.phone}
                          />
                          <span className="help-block"></span>
                        </div>
                        <div className="form-group">
                          <label for="age">Email Address</label>
                          <input
                            type="text"
                            className="form-control"
                            id="age"
                            //  placeholder="Email Address"
                            min="1"
                            max="110"
                            name="email"
                            disabled
                            value={b.email}
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
                            //  placeholder="Body Weight"
                            required
                            autoFocus
                            autoComplete="on"
                            name="weight"
                            disabled
                            value={b.weight}
                          />
                          <span className="help-block"></span>
                        </div>
                        <div className="form-group">
                          <label for="body_weight">Body Height</label>
                          <input
                            type="text"
                            className="form-control"
                            id="last_name"
                            ////  placeholder="Body Height"
                            required
                            autoFocus
                            autoComplete="on"
                            name="height"
                            disabled
                            value={b.height}
                          />
                          <span className="help-block"></span>
                        </div>
                        <div className="form-group">
                          <label for="body_weight">Body Mass Index (BMI)</label>
                          <input
                            type="text"
                            className="form-control"
                            id="last_name"
                            ////  placeholder="Body Mass Index (BMI)"
                            required
                            autoFocus
                            autoComplete="on"
                            name="mass"
                            disabled
                            value={b.mass}
                          />
                          <span className="help-block"></span>
                        </div>
                        <div className="form-group">
                          <label for="body_weight">Do you smoke ?</label>
                          <input
                            type="text"
                            className="form-control"
                            id="last_name"
                            ////  placeholder="Yes / No"
                            required
                            autoFocus
                            autoComplete="on"
                            name="smoke"
                            disabled
                            value={b.smoke}
                          />
                          <span className="help-block"></span>
                        </div>
                        <br />
                        <div className="form-group">
                          <label for="body_weight">Do take Alcohol ?</label>

                          <input
                            type="text"
                            className="form-control"
                            id="last_name"
                            ////  placeholder="Yes / No"
                            required
                            autoFocus
                            autoComplete="on"
                            name="alcohol"
                            disabled
                            value={b.alcohol}
                          />

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
                          <input
                            type="text"
                            className="form-control"
                            id="last_name"
                            //  placeholder=""
                            required
                            autoFocus
                            autoComplete="on"
                            name="package"
                            disabled
                            value={b.package}
                          />

                          <span className="help-block"></span>
                        </div>
                        <br />
                        <br />
                        <div className="form-group">
                          <label for="body_weight">
                            What is your concern today?
                          </label>
                          <textarea
                            type="text"
                            className="form-control"
                            id="last_name"
                            //  placeholder="Type your Concern"
                            required
                            autoFocus
                            autoComplete="on"
                            name="concern"
                            disabled
                            value={b.concern}
                          />

                          <span className="help-block"></span>
                        </div>
                        <br />
                        <div className="form-group">
                          <label for="body_weight">
                            Any other concern you would like the doctor to know
                            today?
                          </label>
                          <textarea
                            type="text"
                            className="form-control"
                            id="last_name"
                            //  placeholder="Yes / No"
                            required
                            autoFocus
                            autoComplete="on"
                            name="otherconcern"
                            disabled
                            value={b.otherconcern}
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
                            Any drugs/medicines you currently taking? If yes,
                            list them down where possible
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="first_name"
                            //  placeholder="Any drugs"
                            required
                            autoFocus
                            autoComplete="on"
                            name="udrug"
                            disabled
                            value={b.udrug}
                          />
                          <span className="help-block"></span>
                        </div>
                        <div className="form-group">
                          <label for="last_name">
                            Any medicines/drugs/treatment taken earlier? If yes,
                            list them where possible
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="last_name"
                            //  placeholder="Any Medicine"
                            required
                            autoFocus
                            autoComplete="on"
                            name="anymedi"
                            vlaue={b.anymedi}
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
                            //  placeholder="Unknown Drug"
                            required
                            name="unknowndrug"
                            disabled
                            value={b.unknowndrug}
                          />
                          <span className="help-block"></span>
                        </div>

                        <div className="form-group">
                          <label for="phone_number">
                            Any past surgery/blood transfusion/major accident?
                            If yes, list them
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone_number"
                            //  placeholder="Any Survery or Other"
                            name="anypastsurvery"
                            disabled
                            value={b.anypastsurvery}
                          />
                          <span className="help-block"></span>
                        </div>
                        <div className="form-group">
                          <label for="phone_number">
                            Any known family or inherited diseases? Like
                            diabetes, high blood pressure, sickle cell etc
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone_number"
                            //  placeholder="Family Disease"
                            name="unknownfamily"
                            value={b.unknownfamily}
                            disabled
                          />
                          <span className="help-block"></span>
                        </div>
                        <div className="form-group">
                          <label for="phone_number">
                            Any known chronic disease? Like HIV/AIDS and if yes,
                            list them
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone_number"
                            //  placeholder="Any known chronic disease"
                            name="unknownchronic"
                            disabled
                            value={b.unknownchronic}
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
                          <label for="first_name">
                            Doctor Visit time of choice
                          </label>
                          <input
                            className="form-control"
                            id="first_name"
                            //  placeholder="Visit time"
                            required
                            autoFocus
                            autoComplete="on"
                            name="visittime"
                            disabled
                            value={b.visittime}
                          />
                          <span className="help-block"></span>
                        </div>
                        <div className="form-group">
                          <label for="last_name">
                            Doctor Visit Date of choice
                          </label>
                          <input
                            type="datetime-local"
                            className="form-control"
                            id="last_name"
                            //  placeholder="Visit Date"
                            required
                            autoFocus
                            autoComplete="on"
                            name="visidate"
                            disabled
                            value={b.visidate}
                          />
                          <span className="help-block"></span>
                        </div>

                        <div className="form-group">
                          <label for="phone_number">Feedback</label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone_number"
                            //  placeholder="Feedback"
                            name="feedback"
                            feedback={b.feedback}
                          />
                          <span className="help-block"></span>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </td>
        </tr>
      ))
    ) : (
      <div style={{ padding: "20px" }}>No Record</div>
    );

  const paynow = async (a, b) => {
    const datab = {
      Tx: data[a].Tx,
      cost: data[a].cost,
      action: b,
    };

    console.log("datab", datab);

    await Api.updateAction(datab).then((res) => {
      console.log(res);
      Swal.fire("Success!", "Wait to be confirmed", "success");
      getAppoitDate();
    });

    let datax = {
      name: data[a].name,
      from: data[a].email,
      Tx: data[a].Tx,
      subject: "Appointment Created was" + " " + b,
      msg: "We have " + b + " your appointment request. ",
    };

    await Api.sendmail(datax).then((res) => {
      console.log(res.data);
      if (res.data == "success") {
        window.alert("Mail sent Successfully");
      } else {
        window.alert("Mail Failed");
      }
    });
  };

  const logout = () => {
    localStorage.setItem("logged", false);
    window.location.reload();
  };
  return (
    <div className="container">
      <div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col">
            <Link to="/">Back to Home</Link>
          </div>
          <div className="col" align="right">
            <span onClick={() => logout()}>Log Out</span>
          </div>
        </div>
        <div>
          <h3 align="center">DASHBOARD</h3>
        </div>

        <div align="center">
          <Link to="Up">Manage Images</Link>
        </div>

        <br />
        <br />

        <div>
          <div className="table tbtab" align="center">
            <table>
              <tr>
                <th>No</th>
                <th>Remark</th>
                <th>Item description</th>
                <th>QTY</th>

                <th>Cost</th>

                <th>
                  <div align="center">Action</div>
                </th>
              </tr>

              {data.length == 0 ? <div>No record</div> : dataDivRow}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
