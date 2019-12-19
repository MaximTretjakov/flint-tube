import React, { Component } from "react";
import { MDBBtn, MDBContainer } from "mdbreact";

import axios from 'axios';

class Key extends Component {
state = {
  token: ''
}


getToken = () => {
    if (this.state.token) {
        this.setState({token: ''});
    } else {
        axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: "Token " + this.props.token
        }
    
        axios.get('http://127.0.0.1:8000/api/key/')
        .then(function (response) {
            if (response.status === 200) {
                this.setState({
                token: response.data['stream_key']
                })
            }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }
}

render() {
  return (
    <div>
    <MDBBtn
      color="primary"
      onClick={this.getToken}
      style={{ marginBottom: "1rem" }}
    >
      Получить ключ
    </MDBBtn>
    <MDBContainer>
        <h5><strong>{this.state.token}</strong></h5>
    </MDBContainer>
    </div>
    );
  }
}

export default Key;

