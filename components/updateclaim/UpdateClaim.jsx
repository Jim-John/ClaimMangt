import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

import {  browserHistory } from 'react-router';
class UpdateClaim extends React.Component {

  constructor(props) {
    console.log('update claim');
    super(props);
    this.state = {
        showUpdate: this.props.showUpdate,
    }
    this.cancelUpdate = this.cancelUpdate.bind(this);
    this.submitClaim = this.submitClaim.bind(this);
}

componentDidMount() {
    console.log('claim id ', this.props.params.claimId);
    axios.get(`http://localhost:7000/claims/${this.props.params.claimId}`)
    .then(res => {
      const claim = res.data;
      console.log(claim);
      this.setState({ claim });
    })
    .catch(error => {
       this.setState({claim:null})
       console.log('error', error);
    })
 }

cancelUpdate() {        
    console.log('cancelling..');
    this.setState({showUpdate: false});
    browserHistory.push('claim');
}

submitClaim(e) {

    e.preventDefault();
    console.log('Updating claim', this.refs);
    let putJson = '';
    let claimObj = {
        id: this.refs['id'].value,
        empId: this.refs['empId'].value,
        empName: this.refs['empName'].value,
        claimNumber: this.refs['claimNumber'].value,
        claimType: this.refs['claimType'].value,
        claimProgram: this.refs['claimProgram'].value,
        claimStartDate: this.refs['claimStartDate'].value,
        claimEndDate: this.refs['claimEndDate'].value
    };
    for (const field in this.refs) {
        console.log(field);
        putJson +=  field + ':"' + this.refs[field].value + '"';            
        if(field !== 'claimEndDate') {
            putJson += ",";
        }
    }
    console.log('claimObj', claimObj);
    putJson += ''        
    console.log(putJson);
    
    axios.put('http://localhost:7000/claims/' + this.refs['id'].value, claimObj)
    .then(res => {
        console.log('res.status', res.status);
        browserHistory.push('claim/true');
    });        
}

  render() {
    if(this.state.claim) {
      const {id, empId, empName, claim_number, claimType, claimProgram, claimStartDate, claimEndDate} = this.state.claim;
    return (

      <Container className="align-items-center">
         
        <Form>
          <Row className="justify-content-md-center">
            <Col >
              <Form.Group>
                <Form.Label>Employee ID</Form.Label>
                <Form.Control type="text" value="" disabled />
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Employee Name</Form.Label>
                <Form.Control type="text" value="" disabled />
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Claim Number</Form.Label>
                <input type="text" placeholder="Claim Number" defaultValue={claim_number} ref="claimNumber"
                            required={true} id="claimNumber" pattern="[a-zA-Z0-9]{3}-[a-zA-Z0-9]{3}-[a-zA-Z0-9]{3}" maxLength="11"/>
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Claim Type</Form.Label>
                <Form.Control as="select">
                  <option>Submitted</option>
                  <option>Received</option>
                  <option>Pending</option>
                  <option>Paid</option>
                  <option>More Info Required</option>
                  <option>Denied</option>
                  <option>Rejected</option>
                </Form.Control>
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Claim Programs</Form.Label>
                <Form.Control type="text" value="" />
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Claim Start Date</Form.Label>
                <Form.Control type="text" value="" />
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Claim End Date</Form.Label>
                <Form.Control type="text" value="" />
              </Form.Group>
            </Col>

          </Row>
          <Row className="mx-auto">
            <Col md={{ span: 3, offset: 3 }}>
              <Form.Row md="2">
                <Button variant="primary" type="reset">
                  Cancel
                </Button>

                <Button variant="primary" type="submit">
                  Update Claim
                </Button>
              </Form.Row>
            </Col>
          </Row>
        </Form>
      </Container>

    );
    }
    return null;
  }
}
export default UpdateClaim;