import React, { Component } from 'react';
import { render } from 'react-dom';
import { Navbar, Nav, NavDropdown, Form,  FormControl,Footer  } from 'react-bootstrap';
class FooterComponent extends React.Component {

    constructor(props) {
        super(props);
        
      }
      render() {
        return (
          <div>
           <nav className="navbar navbar-light">
          <div className="row col-12 bg-secondary justify-content-center text-black footer fixed-bottom">
            <span className="h6">Copyright reserved @ Claim Management</span>
          </div>
        </nav>
            </div>
        );
      }
    };
    export default FooterComponent;