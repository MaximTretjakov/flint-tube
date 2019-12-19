import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import UserCard from '../../containers/Card'


class Main extends React.Component{
    render(){
        return (
            <MDBContainer className="mt-5 pt-5">
                <MDBRow>
                    <MDBCol style={{margin: "10px"}}><UserCard/></MDBCol>
                    <MDBCol style={{margin: "10px"}}><UserCard/></MDBCol>
                    <MDBCol style={{margin: "10px"}}><UserCard/></MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol style={{margin: "10px"}}><UserCard/></MDBCol>
                    <MDBCol style={{margin: "10px"}}><UserCard/></MDBCol>
                    <MDBCol style={{margin: "10px"}}><UserCard/></MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol style={{margin: "10px"}}><UserCard/></MDBCol>
                    <MDBCol style={{margin: "10px"}}><UserCard/></MDBCol>
                    <MDBCol style={{margin: "10px"}}><UserCard/></MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol style={{margin: "10px"}}><UserCard/></MDBCol>
                    <MDBCol style={{margin: "10px"}}><UserCard/></MDBCol>
                    <MDBCol style={{margin: "10px"}}><UserCard/></MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol style={{margin: "10px"}}><UserCard/></MDBCol>
                    <MDBCol style={{margin: "10px"}}><UserCard/></MDBCol>
                    <MDBCol style={{margin: "10px"}}><UserCard/></MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    };
}

export default Main;
