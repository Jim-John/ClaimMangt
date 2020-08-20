import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
class UserDetails extends React.Component {

  constructor(props){
   
    super(props);
     this.state= {
    	data:[]
     }
   this.currentTime = this.currentTime.bind(this);
   };
  currentTime(){

     console.log('update the state implemenation');
    
          var item = Date.now(); 
          var myArray = this.state.data;
          myArray.push(item)
          this.setState({data: myArray}) 
    
    }
    

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" className="justify-content-start">
          <Nav>
            <h6>Welcome : <label className="justify-content-center text-dark font-weight-bold">User Name</label></h6>
          </Nav>
          <Nav>
            <h6>Last Login : <label className="text-dark font-weight-bold">12/10/2020 12:34:44</label></h6>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="#login" as={Link} to="login" className="justify-content-end">
              <label className="font-weight-bold">Signout</label>
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default UserDetails;