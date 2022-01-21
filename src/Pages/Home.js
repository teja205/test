import React, { Component } from "react";
import Homebanner from "../Component/Homebanner";
import Footer from "../Component/Layout/Footer";
import Header from "../Component/Layout/Header";


export class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Homebanner />
        <Footer /> 
      </>
    );
  }
}

export default Home;
