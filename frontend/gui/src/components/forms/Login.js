import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBInput, MDBBtn } from 'mdbreact';
import axios from 'axios';

const initialState = {
  login: "",
  password: "",
  loginError: "",
  passwordError: ""
};

class Login extends Component {

  state = initialState;

    handleInputChange = inputName => value => {
        const nextValue = value;
        this.setState({
          [inputName]: nextValue
        });
        console.log(this.state);
      };


    validate = () => {
      let loginError = "";
      let passwordError = "";
  
      if (!this.state.login) {
        loginError = "login field cannot be blank";
      }

      if (!this.state.password) {
        passwordError = "password field cannot be blank";
      }
  
      if (loginError || passwordError) {
        this.setState({ loginError, passwordError });
        return false;
      }
      return true;
    };


    handleSubmit = event => {
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
        // clear form
        this.setState(initialState);
        // send form data
        this.sender();
      }
    };


    sender = () => {
      let closeModal = this.props.value;
      let updState = this.props.updState;
        axios.post('http://127.0.0.1:8000/rest-auth/login/', {
            username: this.state.login,
            email: '',
            password: this.state.password
          })
          .then(function (response) {
            console.log(response);
            if(response.status === 200){
              closeModal();
              updState();
            }
          })
          .catch(function (error) {
            console.log(error);
          });     
    };


    render(){
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
                        name="login"
                        label="Type your login"
                        icon="envelope"
                        type="text"
                        value={this.state.login}
                        getValue={this.handleInputChange("login")}
                      >
                        <div style={{ fontSize: 12, color: "red" }}>
                          {this.state.loginError}
                        </div>
                      </MDBInput>
                      <MDBInput
                        name="password"
                        label="Type your password"
                        icon="lock"
                        type="password"
                        value={this.state.password}
                        getValue={this.handleInputChange("password")}
                      >
                        <div style={{ fontSize: 12, color: "red" }}>
                          {this.state.passwordError}
                        </div>
                      </MDBInput>
                    </div>
                    <div className="text-center">
                      <MDBBtn type="submit">Login</MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          );
    }; 
};

export default Login;