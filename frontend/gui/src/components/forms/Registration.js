import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import axios from 'axios';


const initialState = {
  login: "",
  email: "",
  password1: "",
  password2: "",
  loginError: "",
  emailError: "",
  passwordError1: "",
  passwordError2: ""
};

class Register extends Component {

  state = initialState;

    handleInputChange = inputName => value => {
      const nextValue = value;
      this.setState({
        [inputName]: nextValue
      });
    };


    validate = () => {
      let loginError = "";
      let emailError = "";
      let passwordError1 = "";
      let passwordError2 = "";
  
      if (!this.state.login) {
        loginError = "login field cannot be blank";
      }

      if (!this.state.email.includes("@")) {
        emailError = "email field cannot be blank";
      }

      if (!this.state.password1) {
        passwordError1 = "password field cannot be blank";
      }

      if (!this.state.password2) {
        passwordError2 = "repeat password field cannot be blank";
      }
  
      if (loginError || emailError || passwordError1 || passwordError2) {
        this.setState({ loginError, emailError, passwordError1, passwordError2 });
        return false;
      }
      return true;
    };


    handleSubmit = event => {
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
        console.log(this.state);
        // clear form
        this.setState(initialState);
        this.sender();
      }
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
                <form        
                  noValidate 
                  onSubmit={this.handleSubmit}
                >
                  <div className="grey-text">
                    <MDBInput
                      name='login'
                      label="Your name"
                      icon="user"
                      type="text"
                      value={this.state.login}
                      getValue={this.handleInputChange("login")}
                    >
                      <div style={{ fontSize: 12, color: "red" }}>
                          {this.state.loginError}
                      </div>
                    </MDBInput>
                    <MDBInput
                      name='email'
                      label="Your email"
                      icon="envelope"
                      type="email"
                      value={this.state.email}
                      getValue={this.handleInputChange("email")}
                    >
                      <div style={{ fontSize: 12, color: "red" }}>
                          {this.state.emailError}
                      </div>
                    </MDBInput>
                    <MDBInput
                      name="password1"
                      label="Your password"
                      icon="lock"
                      type="password"
                      value={this.state.password1}
                      getValue={this.handleInputChange("password1")}
                    >
                      <div style={{ fontSize: 12, color: "red" }}>
                          {this.state.passwordError1}
                      </div>
                    </MDBInput>
                    <MDBInput
                      name="password2"
                      label="Repeat password"
                      icon="lock"
                      type="password"
                      value={this.state.password2}
                      getValue={this.handleInputChange("password2")}
                    >
                      <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.passwordError2}
                      </div>
                    </MDBInput>
                  </div>
                  <div className="text-center">
                    <MDBBtn type="submit">Register</MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        );
    };
};

export default Register;