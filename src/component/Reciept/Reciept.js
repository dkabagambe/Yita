import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../Data/Api";
import Logo from "../../images/full.png";
import "./Rec.css";
import Swal from "sweetalert2";

export default function Reciept() {
  const [id, setId] = useState(0);
  const [REf, setRef] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    let view = window.location.href.split("?")[1];
    setId(view);
    getAppoitDate(view);
  }, []);
  const getAppoitDate = async (e) => {
    await Api.getAppointOne(e).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  const dataDiv = data.map((b) => (
    <div className="dt">
      <label>
        TIN:<b> {b.Id}</b>
      </label>
      <label>Serial NO 220123843</label>
      <label>Date :</label>
      <b> 25 /02 /2023</b>
    </div>
  ));
  const dataDivDate = data.map((b) => (
    <div>
      <div
        className="desci"
        align="center"
        style={
          b.action === "Confirmed" ? { display: "show" } : { display: "none" }
        }
      >
        Received with thanks sum of
        <div>{b.cost + " Shillings"}</div>
        balance of <div>{0.0 + " Shillings"}</div>
      </div>

      <hr />
      <div
        className=" "
        align="center"
        style={
          b.action === "Confirmed" ? { display: "show" } : { display: "none" }
        }
      >
        Appointment Time
        <h3>{b.visidate}</h3>
      </div>
    </div>
  ));
  const dataDivRow = data.map((b, a) => (
    <tr>
      <td>{a}</td>
      <td>
        <b>
          <span style={{ color: "brown" }}>{b.action}</span>
        </b>
      </td>
      <td>{b.package}</td>
      <td>1</td>
      <td>{b.cost}</td>
      <td>{b.cost}</td>
    </tr>
  ));
  const paynow = async (a, b) => {
    const data = {
      Tx: id,
      PaidAmount: b,
      action: "Waiting to confirm Transaction",
      PaidId: REf,
    };

    await Api.updatePay(data).then((res) => {
      console.log(res);
      Swal.fire("Success!", "Wait to be confirmed", "success");
      getAppoitDate(id);
    });
  };

  const dataDivMM = data.map((b, a) => (
    <div
      className="rcp"
      style={
        b.action === "Approved" ? { display: "block" } : { display: "none" }
      }
    >
      <div className=" " align="center">
        <h5>PAY WITH</h5>

        <ul>
          <li align="center">
            <img
              src={
                "http://flashugnews.com/wp-content/uploads/2022/07/Airtel-Money-Rates-in-Uganda-2022.jpeg"
              }
              alt="imgpay"
            />
            <br />
            <label style={{ fontWeight: "bold" }}>0705920614</label>
          </li>
          <li align="center">
            <img
              src="https://www.african-markets.com/images/markets/jse/MTN-logo.jpg"
              alt="imgpay"
            />
            <br />
            <label style={{ fontWeight: "bold" }}>0777114327</label>
          </li>
        </ul>
      </div>
      <div align="center">
        <b>
          <div>Confirm Payment</div>
        </b>
        <div>
          <input
            placeholder="Confirm Id"
            style={{
              width: "50%",
              height: "40px",
              textAlign: "center",
            }}
            value={REf}
            onChange={(e) => setRef(e.target.value)}
          />
          <br />
          <br />
          <Button className="btn success" onClick={() => paynow(b.Id, b.cost)}>
            CONFIRM
          </Button>
          <br />
          <br />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="rec">
        <div className="logoappointment" align="center">
          <Link to="/Appointment">
            <img src={Logo} alt="logo" />
            YITA MEDICAL SERVICES
          </Link>
        </div>
        <div className="desco">
          MOBILE DOCTORS & OUTDOOR HEALTHCARE PROVIDERS
        </div>
        <div align="center">
          <i>
            Kira Road, before New Mulago Hospital, Nurses and Midwives Union
            Headquarters
          </i>
        </div>
        <br />
        {dataDiv}
        <br />
        <b></b>
        {dataDivDate}
        <br />
        <br />
        {dataDivMM}

        <div className="table" align="center">
          <table>
            <tr>
              <th>No</th>
              <th>Remark</th>
              <th>Item description</th>
              <th>QTY</th>
              <th>Cost</th>
              <th>Amount</th>
            </tr>
            {dataDivRow}
          </table>
        </div>

        <br />
        <br />
        <div align="center">
          <p>
            Call:<b>+256777114327/ +256702945632</b>
            <br />
            Website : https://www.yitalife.com For quick delivery of; drugs, lab
            sample pick up, doctor visit, nurse/midwife care
            <br></br>
            Kindly follow us;
            <br />
            twitter: @yitamusawo <br /> facebook: yita life. <br /> whatsapp:
            +256777114327
          </p>
        </div>
      </div>
    </div>
  );
}
