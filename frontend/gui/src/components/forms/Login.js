import React from "react";
import { MDBContainer, MDBCol, MDBRow, MDBInput, MDBBtn } from 'mdbreact';
import axios from 'axios';

class Login extends React.Component {

    handleInputChange = inputName => value => {
        const nextValue = value;
        this.setState({
          [inputName]: nextValue
        });
        console.log(this.state);
      };


    sender = () => {
        console.log(this.state);
        axios.post('http://127.0.0.1:8000/rest-auth/login/', {
            username: this.state.login,
            email: '',
            password: this.state.password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    render(){
        return (
            <MDBContainer>
              <MDBRow center>
                <MDBCol>
                  <form>
                    <div className="grey-text">
                      <MDBInput
                        name="login"
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        getValue={this.handleInputChange("login")}
                      />
                      <MDBInput
                        name="password"
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        getValue={this.handleInputChange("password")}
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn onClick={this.sender}>Login</MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          );
    }; 
};

export default Login;