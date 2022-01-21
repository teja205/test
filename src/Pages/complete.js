import React, { Component } from "react";
import Completedtable from "../Component/completedtable"
import Footer from "../Component/Layout/Footer";
import Header from "../Component/Layout/Header"



export class complete extends Component {
  render() {
    return (
      <>
        <Header />
        <Completedtable />
        <Footer /> 
      </>
    );
  }
}

export default complete;
