import React from "react";
import "./sub.css";

export default function Subscribe() {
  return (
    <div classNameName="subTab1">
      <section className="newsletter">
        <div className="row">
          <div className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
            <div className="newsText">
              <h1>Join our newsletter!</h1>
              <p>For exciting health and lifestyle education tips.</p>
              <img
                src="https://images2.imgbox.com/22/73/1f6acDGg_o.png"
                alt="sub-img"
              />
            </div>
          </div>
          <div className="col">
            <div className="newsSign">
              <form>
                <div className="input-field">
                  <label for="exampleInputName">Name</label> <br />
                  <input type="text" name="name" />
                </div>
                <div className="input-field">
                  <label for="exampleInputEmail">E-mail</label>
                  <br />
                  <input type="email" name="email" />
                  <br />
                  <br />
                  <label for="exampleInputEmail">Phone Number</label>
                  <br />
                  <input type="number" name="Mobile Number" />
                </div>
                <button type="submit" name="submit">
                  sign
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
