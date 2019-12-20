import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import UserCard from '../../containers/Card'


class Main extends React.Component{
    render(){
        return (
            <MDBContainer fluid={true} className="mt-5 pt-5">
                <MDBRow style={{marginLeft: "25px", marginBottom: "10px"}}>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                </MDBRow>

                <MDBRow style={{marginLeft: "25px", marginBottom: "10px"}}>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                </MDBRow>

                <MDBRow style={{marginLeft: "25px", marginBottom: "10px"}}>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                </MDBRow>

                <MDBRow style={{marginLeft: "25px", marginBottom: "10px"}}>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                    <MDBCol size="2"><UserCard/></MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    };
}

export default Main;
