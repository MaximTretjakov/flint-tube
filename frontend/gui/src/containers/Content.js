import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import axios from 'axios';

import Player from '../components/webPlayer/player'

class ContentContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {streamKey: null, status: false};
    }

    componentDidMount() {
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: "Token " + this.props.token
        }

        axios.get('http://127.0.0.1:8000/api/active-users/')
        .then(function (response) {
        if(response.status === 200){
            console.log('STATUS 200 ' + response.data[0]['stream_url']);
            this.setState({streamKey: response.data[0]['stream_url'], status: true});
        }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){

        console.log('RENDER ' + this.state.streamKey);
        const status = this.state.status;
        
        if(status) {
            const videoJsOptions = {
                autoplay: true,
                width: '640', 
                height: '480',
                sources: [{
                    src: this.state.streamKey,
                    type: 'application/x-mpegURL'
                }]
              }
              
            return(
                <MDBContainer style={{ "marginLeft": "120px" }} className='container-fluid mt-5 pt-5'>
                    <MDBRow className="row">
                        <MDBCol className="col-lg-10">
                            <Player { ...videoJsOptions } />
                        </MDBCol>
                        <MDBCol className="col-lg-2">
                            <h4>Chat</h4>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            );
            } else {
                return(
                    <MDBContainer className="text-center mt-5 pt-5">
                        <h2>Waiting...</h2>
                    </MDBContainer>
                )
            }
        
        }
}

export default ContentContainer;
