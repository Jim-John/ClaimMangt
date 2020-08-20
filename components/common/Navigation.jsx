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
        <Nav className="mr-auto">
          <Nav.Link href="#home" as={Link} to="home">Home</Nav.Link>
          <Nav.Link href="#claim" as={Link} to="claim">Claim Summary</Nav.Link>
          <Nav.Link eventKey="ilink-3">About</Nav.Link>
          <Nav.Link eventKey="ilink-4">Contact</Nav.Link>
        </Nav>
        <Form inline >
        <a href="#" onClick="window.print()" className="mr-sm-2 justify-content-end"><span className="glyphicon glyphicon-print"></span> Print</a>
        <a href="/" className="mr-sm-2 justify-content-end"><span className="glyphicon glyphicon-log-out"></span> LogOut</a>
        
        </Form>
        </Navbar>
            {this.props.children}
        </div>
          
             );
            }
              
              };
          
              


export default Navigation;