import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Navbar, Nav, NavDropdown, Form,  FormControl,Footer,Table  } from 'react-bootstrap';
import ClaimsViewList from './ClaimsViewList.jsx';
import Navigation from './../common/Navigation.jsx';
class ClaimsView extends React.Component {

    constructor(props) {
        super(props);
        
      }
      render() {
        return (
            <Fragment>
            <Navigation></Navigation>
            <div className="container-fluid">
            <div className="row mt-3"></div>
            <div className="row mb-4">
                <div className="col-sm-12 grid-margin">
                    <div className="card h-100">
                        <h4 className="card-header">Claim Details</h4>
                        <div className="card-body">
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Employee ID</th>
                                        <th>Employee Name</th>
                                        <th>Claim Number</th>
                                        <th>Claim Type</th>
                                        <th>Claim Programs</th>
                                        <th>Claim Start Date</th>
                                        <th>Claim End Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ClaimsViewList></ClaimsViewList>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
        );
      }
    };
    export default ClaimsView;

