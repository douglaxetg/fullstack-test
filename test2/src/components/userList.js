import React, { Component } from 'react';

import UsersDet from './usersDet';

class UsersList extends Component {
  constructor(props) {
    super(props)
    this.state = {isLoading: true,
                  showPopup: false,
                  iduser:""};
                };
  togglePopup(myid) {
    this.setState({
      showPopup: !this.state.showPopup,
      iduser: myid
    })
  }
  componentDidMount(){
    return fetch('http://localhost:3001/userlist')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.users 
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
   render() {
    if(this.state.isLoading){
    return (
      <p>Data is loading...</p>
    )
    }
    return(
      <div className="card">
      <h3 className="card text-white bg-primary text-center">Users List</h3>
        <div className="card-body" align="left">
          <ul className="list-unstyled">
            { this.state.dataSource.map(user =>
            <li key={user.id}>
              <button className="btn btn-light btn-block" onClick={this.togglePopup.bind(this,user.id)}> { user.name }</button>
                {this.state.showPopup ? 
                <UsersDet iduser={this.state.iduser} closePopup={this.togglePopup.bind(this)}/>
              :null
            }
            </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default UsersList