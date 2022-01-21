import React, { Component } from "react";
import { Link } from "react-router-dom";
import { assetsImages } from "../../Constant/enum";

export class Footer extends Component {
  render() {
    return (
      <>
        <section className="footer">
          <div className="container">
            <div className="conditionspolicy d-flex justify-content-center">
              <a>Term of Service</a>
              <a>Privacy Policy</a>
            </div>
            <div className="rights d-flex justify-content-center">
              <p>© 2021 DeliverySynk All Rights Reserved</p>
            </div>
          </div>
        
        </section>
      </>
    );
  }
}

export default Footer;
