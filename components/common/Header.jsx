import React from 'react';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';


class HeaderLogin extends React.Component {
   render() {
           
			
         return (   
         
         <header>
        <Navbar expand="lg" variant="dark" bg="dark">
        <div className="col-4"></div>
        <div className="col-6">
        <Navbar.Brand >Claims Managment System</Navbar.Brand>
        </div>
        <div >
        <div id="loggedInUser" className="text-success">Logged In:Jim John</div>
        <div id="datetime"    className="text-success">Date :08/19/2020</div>
        </div>
        </Navbar>
      </header>
      );
   }
}

export default HeaderLogin; 




