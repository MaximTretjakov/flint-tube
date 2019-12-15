import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class CardExample extends React.Component {
    render(){
        const mar = {margin: "5px -20px 100px"}
        return (
            <div style={mar}>
                <MDBCol>
                <MDBCard style={{height: "591px", width: "600px"}}>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
            </div>
          )
    };
  
}

export default CardExample;
