import {  Button, Alert} from 'react-bootstrap';  
import React, { Component } from 'react';   
import Header from './Header.jsx';
import FooterComponent from './FooterComponent.jsx'; 

class Success extends React.Component    {
    constructor(props) {
        super(props);
        
      }
      render(){
      
        return (
          <div>
          <Header></Header>
            <Alert  variant="success">
              <Alert.Heading>Claim Updated Sucessfully!!</Alert.Heading>
              <p>
              Thank you for updating the claim details.
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button  variant="outline-success" type="button" href="/">
                Proceed to Home Page
                </Button>
              </div>
              <FooterComponent></FooterComponent>
            </Alert>
          </div>
        );
      }
    };
export default Success;