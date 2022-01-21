import React, { Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component {
 
 
    render() {
     
        return (
            <>
            <nav className="header-content__navigation col-12 d-flex justify-content-end ">
              <ul className="d-flex justify-content-around col-8">
                <li>
                  <Link to="/">New</Link>
                </li>
             
                <li>
                  <Link to="/pending">In Process</Link>
                </li>
                <li>
                  <Link to="/Complete">Completed</Link>
                </li>
              </ul>
            </nav>
       
          
          
          </>
        );
    }
}

export default Header;
