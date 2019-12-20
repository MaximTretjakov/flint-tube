import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCol } from 'mdbreact';

const UserCard = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "200px" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardText>
            <strong>ONLINE</strong>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default UserCard;
