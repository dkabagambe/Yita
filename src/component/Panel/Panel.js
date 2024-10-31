import React, { useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../Data/Api";
import "./panel.css";

export default function Panel() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [index, setIndex] = useState(0);
  const [indexpage, setIndexpage] = useState(0);

  const clearData = () => {
    setPassword("");
    setEmail("");
    setUsername("");
  };

  async function forgot() {
    let user = {
      Email: email,
      Password: password,
    };

    await Api.GetSingle(email).then((res) => {
      // console.log("User here", res.data);
      // alert("Success");
      if (res.data === "success") {
        const update = async () => {
          await Api.UpPass(user).then((res) => {
            // console.log("Passowrd ", res.data);
            // alert("Success");
            if (res.data === "Success") {
              // localStorage.setItem("logged", true);
              alert("Success, Password Changed ! Please Log In");
              setIndexpage(1);
              setIndex(0);
            } else {
              // alert("Failed");
              // window.location.reload();
            }
          });

          let datax = {
            name: "User",
            from: email,
            Tx: "",
            data: user.Password,
            subject: "Password Reset",
            msg: "Your new passowrd is",
          };

          await Api.sendmailp(datax).then((res) => {
            console.log(res.data);
            if (res.data === "success") {
              // window.alert("Mail sent Successfully");
              window.location.reload();
            } else {
              // window.alert("Mail Failed");
            }
          });
        };
        update();
      } else {
        alert("User not found");
        // window.location.reload();
      }
    });
  }

  async function logIn() {
    let user = {
      Username: username,
      Password: password,
    };
    await Api.LoginUser(username, password).then((res) => {
      if (username === res.data.Username && password === res.data.Password) {
        localStorage.setItem("logged", true);
        alert("Success");
        window.location.reload();
      } else {
        alert("failed");
      }
    });
  }
  return (
    <div>
      <div>
        <div className="panel">
          <Link to="/">Home</Link>
          <br />
          <br />
          <hr />
          <h6>Panel</h6>
          <br />
          <div style={index === 1 ? { display: "none" } : { display: "block" }}>
            <div>
              <label>Username</label>
              <br />
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div>
                <label>Password</label>
                <br />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
              </div>
            </div>
          </div>
          <div style={index === 0 ? { display: "none" } : { display: "block" }}>
            <br />

            <h5>Reset Password</h5>
            <div>
              <label>Email</label>

              <br />
              <div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <br />
              </div>
              <label>New Password</label>
              <br />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div align="center">
            <button
              className="btn btn-success"
              onClick={
                () => {
                  index !== 1 ? logIn() : setIndex(0);
                  // clearData();
                }
                //
              }
              style={index === 1 ? { display: "none" } : { display: "block" }}
            >
              Login
            </button>
            <button
              className="btn btn-success"
              onClick={() => {
                index === 1 ? forgot() : setIndex(1);
                clearData();
              }}
              style={{ display: "block", background: "brown" }}
            >
              Forget Password
            </button>
            <button
              className="btn btn-success"
              onClick={
                () => {
                  index !== 1 ? logIn() : setIndex(0);
                  clearData();
                }
                //
              }
              style={index === 0 ? { display: "none" } : { display: "block" }}
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
