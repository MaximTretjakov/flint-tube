import React from 'react';
import { Route } from 'react-router-dom'
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, 
         MDBCollapse, MDBNavItem, MDBNavLink, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import axios from 'axios';

import Login from '../components/forms/Login'
import Register from '../components/forms/Registration'
import Content from '../containers/Content'
import Personal from '../components/personal/Personal'

class NavbarContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        modalLogin: false,
        modalRegistration: false,
        isLogin: false,
        token: ''
      };
      this.onClick = this.onToggleLogin.bind(this);
      this.onClick = this.onToggleRegistration.bind(this);
      this.updState = this.updState.bind(this);
      this.onLogout = this.onLogout.bind(this);
  }

  onToggleLogin = () => {
    this.setState({
      modalLogin: !this.state.modalLogin
    });
  }

  onToggleRegistration = () => {
    this.setState({
      modalRegistration: !this.state.modalRegistration
    });
  }

  onLogout = () => {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: "Token " + this.state.token
      }

      axios.post('http://127.0.0.1:8000/rest-auth/logout/')
      .then(function (response) {
          if (response.status === 200) {
              console.log('LOGOUT ' + response);
              this.setState({
                isLogin: false,
                token: ''
              })
          }
      }.bind(this))
      .catch(function (error) {
          console.log(error);
      });
  }

  updState = (token) => {
    this.setState({
      isLogin: !this.state.isLogin,
      token: token
    });
  }

  render() {
    const bgPink = {backgroundColor: 'black'}
    return(
      <div>
          <header>
            <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                <strong>Flint - tube</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen = {this.state.collapse} navbar>
                
                  {this.state.isLogin ? 
                  ( 
                    <MDBNavbarNav right>
                      <MDBNavItem>
                        <MDBNavLink to="/personal/">
                          <strong>Enter</strong>
                        </MDBNavLink>
                        {/* <MDBNavLink to="/">
                          <strong>Enter</strong>
                        </MDBNavLink> */}
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#" onClick={this.onLogout}>
                          <strong>Logout</strong>
                        </MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>      
                  ) :
                  (
                    <MDBNavbarNav right>        
                    <MDBNavItem>
                      <MDBNavLink to="#" onClick={this.onToggleLogin}>
                        <strong>Sign in</strong>
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" onClick={this.onToggleRegistration}>
                        <strong>Sign up</strong>
                      </MDBNavLink>
                    </MDBNavItem>
                    </MDBNavbarNav>
                  )}
                
              </MDBCollapse>
            </MDBNavbar>
          </header>

          {this.state.isLogin ?
            (
              <MDBContainer className="text-center mt-5 pt-5">
                <Route exact path='/' component={() => <Content token={this.state.token} />}/>
                <Route exact path='/personal/' component={Personal}/>
              </MDBContainer>
            ):
            (
              <MDBContainer className="text-center mt-5 pt-5">
                <h2>Authtorize please.</h2>
              </MDBContainer>
            )
          }

        {/* Modal login form */}
        <MDBContainer>
        <MDBModal isOpen={this.state.modalLogin} toggle={this.onToggleLogin}>
          <MDBModalHeader toggle={this.onToggleLogin}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            <Login value={this.onToggleLogin} updState={this.updState}/>
          </MDBModalBody>
        </MDBModal>
        </MDBContainer>

        {/* Modal registration form */}
        <MDBContainer>
        <MDBModal isOpen={this.state.modalRegistration} toggle={this.onToggleRegistration}>
          <MDBModalHeader toggle={this.onToggleRegistration}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            <Register value={this.onToggleRegistration}/>
          </MDBModalBody>
        </MDBModal>
        </MDBContainer>
        
      </div>
    );
  }
}

export default NavbarContainer;
