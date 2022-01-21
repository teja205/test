import React, { Component } from "react";
import Pendingtable from "../Component/pendingtable"
import Footer from "../Component/Layout/Footer";
import Header from "../Component/Layout/Header"



export class pending extends Component {
  render() {
    return (
      <>
        <Header />
        <Pendingtable />
        <Footer /> 
      </>
    );
  }
}

export default pending;
