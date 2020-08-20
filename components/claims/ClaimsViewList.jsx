import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import axios from 'axios';


class ClaimsViewList extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      claims: [],
      showUpdate: false
    }
    this.showUpdate = this.showUpdate.bind(this);
  }
  componentDidMount() {
    axios.get(`http://localhost:7000/claims`)
      .then(res => {       
        const claims = res.data;        
        this.setState({ claims });
      })
  }

  showUpdate(currentClaim) {
    console.log('updating claim', currentClaim.emp_id);
    browserHistory.push('updateclaim/'+currentClaim.emp_id);
  }

  render() {
       
    let myTr="";
    let showUpdateContent = this.showUpdate;
    myTr= this.state.claims.map(function(claim, index){
      return (<tr><td><a className="updateTdBut" href="#" onClick={() => showUpdateContent(claim)}>{claim.emp_id}</a></td>
             <td>{claim.emp_name}</td>
             <td>{claim.claim_number}</td>
             <td>{claim.claim_type}</td>
             <td>{claim.claim_program}</td>
             <td>{claim.start_date}</td>
             <td>{claim.end_date}</td>
             </tr>)
});

   return myTr;
       

 }    
  
}

export default ClaimsViewList;