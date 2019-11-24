import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, 
         MDBCollapse, MDBNavItem, MDBNavLink, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

import Login from '../components/forms/Login'
import Register from '../components/forms/Registration'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

class NavbarContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        modalLogin: false,
        modalRegistration: false,
        isLogin: false
      };
      this.onClick = this.onToggleLogin.bind(this);
      this.onClick = this.onToggleRegistration.bind(this);
      this.updState = this.updState.bind(this);
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

  updState = () => {
    this.setState({
      isLogin: !this.state.isLogin
    });
  }

  render() {
    const bgPink = {backgroundColor: 'black'}
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
                
                  {this.state.isLogin ? 
                  ( 
                    <MDBNavbarNav right>
                      <MDBNavItem>
                        <NavLink to='#'>
                          <h5>You are logged in !!!</h5>
                        </NavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>      
                  ) :
                  (
                    <MDBNavbarNav right>        
                    <MDBNavItem>
                      <MDBNavLink to="#" onClick={this.onToggleLogin}><strong>Sign in</strong></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" onClick={this.onToggleRegistration}><strong>Sign up</strong></MDBNavLink>
                    </MDBNavItem>
                    </MDBNavbarNav>
                  )}
                
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>

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