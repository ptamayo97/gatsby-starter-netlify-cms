import React from "react";
import "./style.css";
import Sponsors from "../templates/sponsors";

const Footer = class extends React.Component {
  state = {
    sponsors: []
  };

  render() {
    return (
      <footer className="section footer">
        {/* <h2>Our Sponsors</h2>
        <div className=" container">
          <div className="row">
            <div className="col-md-3">
              <figure>
                <img src="https://i.imgur.com/7OHTxeo.png" alt="" />
              </figure>
            </div>
            <div className="col-md-3">
              <figure>
                <img src="https://i.imgur.com/nAzTFP2.png" alt="" />
              </figure>
            </div>
            <div className="col-md-3">
              <figure>
                <img src="https://i.imgur.com/r1bi3aX.png" alt="" />
              </figure>
            </div>
            <div className="col-md-3">
              <figure>
                <img src="https://i.imgur.com/QoAYFlq.png" alt="" />
              </figure>
            </div>
            <div className="col-md-3">
              <figure>
                <img src="https://i.imgur.com/YIqjvqA.png" alt="" />
              </figure>
            </div>
            <div className="col-md-3">
              <figure>
                <img src="https://i.imgur.com/7ddRs4V.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div> */}
        <Sponsors />

        <nav>
          <a href="mailto:swe@eng.ucsd.edu">Email</a>
          <a href="https://www.instagram.com/swe.ucsd/">Instagram</a>
          <a href="https://www.facebook.com/sweucsd/">Facebook</a>
        </nav>
      </footer>
    );
  }
};

export default Footer;
