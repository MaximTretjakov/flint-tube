import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, 
         MDBCollapse, MDBNavItem, MDBNavLink, MDBModal, MDBModalBody, MDBModalHeader, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

import Login from '../components/forms/Login'
import Register from '../components/forms/Registration'

class NavbarContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        modalLogin: false,
        modalRegistration: false
      };
      this.onClick = this.onToggleLogin.bind(this);
      this.onClick = this.onToggleRegistration.bind(this);
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

  render() {
    const bgPink = {backgroundColor: 'black'}
    const container = {height: 1300}
    return(
      <div>
        <Router>
          <header>
            <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                  <strong>Flint - tube</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#" onClick={this.onToggleLogin}><strong>Sign in</strong></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#" onClick={this.onToggleRegistration}><strong>Sign up</strong></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
        <MDBContainer style={container} className="text-center mt-5 pt-5">
          <h2>This Navbar is fixed</h2>
          <h5>It will always stay visible on the top, even when you scroll down</h5>
          <br/>
          <p>Full page intro with background image will be always displayed in full screen mode, regardless of device</p>
        </MDBContainer>

        {/* Modal login form */}
        <MDBContainer>
        <MDBBtn onClick={this.onToggleLogin}>Modal</MDBBtn>
        <MDBModal isOpen={this.state.modalLogin} toggle={this.onToggleLogin}>
          <MDBModalHeader toggle={this.onToggleLogin}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            <Login />
          </MDBModalBody>
        </MDBModal>
        </MDBContainer>

        {/* Modal registration form */}
        <MDBContainer>
        <MDBBtn onClick={this.onToggleRegistration}>Modal</MDBBtn>
        <MDBModal isOpen={this.state.modalRegistration} toggle={this.onToggleRegistration}>
          <MDBModalHeader toggle={this.onToggleRegistration}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            <Register />
          </MDBModalBody>
        </MDBModal>
        </MDBContainer>


      </div>
    );
  }
}

export default NavbarContainer;