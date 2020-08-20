import React, { Component } from 'react';
import { render } from 'react-dom';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
import {  Link  } from 'react-router';
import Glyphicon from 'react-bootstrap';
class Navigation extends React.Component 
{
    constructor(props) {
        super(props);
        
      }
      render() {
        return (
            <div>
            
            
            <Navbar bg="light" variant="light">
        <Navbar.Brand >Claims Admin </Navbar.Brand>
        <Nav className="navbar navbar-expand ">
          <Nav.Link href="#home" as={Link} to="home">Home</Nav.Link>
          <Nav.Link href="#claim" as={Link} to="claim">Claim Summary</Nav.Link>
          <Nav.Link eventKey="ilink-3">About</Nav.Link>
          <Nav.Link eventKey="ilink-4">Contact</Nav.Link>
        </Nav>
        <div>
        </div>
    </Navbar>
    
    
            {this.props.children}
          </div>
          
             );
            }
              
              };
          
              


export default Navigation;