import React, { Component } from 'react';

import './userdetails.css'
class UsersDet extends Component {  
    constructor(props) {
        super(props)
        this.state = {isLoading: true,
                      showPopup: false};
                    };
        componentDidMount() {
        fetch(`http://localhost:3001/userdetails/${this.props.iduser}`)
          .then(response => response.json())
          .then(data =>
            this.setState({
              users: data,
              isLoading: false,
            })
          )
          .catch(error => this.setState({ error, isLoading: false }));
          }
        render() {  
            if(this.state.isLoading){
                return (
                <p>Data is loading...</p>
                )
                }
            return (
                <div className='popup'>
                    <h3 className="card text-white bg-primary text-center">User Details</h3>
                    <div className="popup\_inner" align="left">
                            <p><b>Name: </b>{this.state.users.name}</p>
                            <p><b>Email: </b>{this.state.users.email}</p>
                            <p><b>Relationship: </b>{this.state.users.relationship}</p>
                            <p><b>Profession: </b>{this.state.users.profession}</p>
                            <p><b>Country: </b>{this.state.users.country}</p>
                            <p><button className="btn btn-primary" onClick={this.props.closePopup}>Back to User List</button></p>
                    </div>
                </div>
    );
    }
  }
  
  export default UsersDet;