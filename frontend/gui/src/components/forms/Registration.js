import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import axios from 'axios';

class Register extends Component {

    handleInputChange = inputName => value => {
      const nextValue = value;
      this.setState({
        [inputName]: nextValue
      });
    };


  sender = () => {
    let closeModal = this.props.value;
      axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
          username: this.state.login,
          email: this.state.email,
          password1: this.state.password1,
          password2: this.state.password2
        })
        .then(function (response) {
          if(response.status === 201){
            closeModal();
          }
        })
        .catch(function (error) {
          console.log(error);
        });     
  };

    render() {
        return (
          <MDBContainer>
            <MDBRow center>
              <MDBCol>
                <form>
                  <div className="grey-text">
                    <MDBInput
                      name='login'
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      getValue={this.handleInputChange("login")}
                    />
                    <MDBInput
                      name='email'
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      getValue={this.handleInputChange("email")}
                    />
                    <MDBInput
                      name="password1"
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      getValue={this.handleInputChange("password1")}
                    />
                    <MDBInput
                      name="password2"
                      label="Repeat password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      getValue={this.handleInputChange("password2")}
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn onClick={this.sender}>Register</MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        );
    };
};

export default Register;