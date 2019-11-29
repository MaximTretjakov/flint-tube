import React from 'react';
import { MDBContainer } from 'mdbreact';
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
            Authorization: "Token f639be0a7dcde38ec93256251751c1008a461f98"
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
                width: '300', 
                height: '300',
                sources: [{
                    src: this.state.streamKey,
                    type: 'application/x-mpegURL'
                }]
              }
              
            const container = {height: 1300}
            return(
                <MDBContainer style={container} className="text-center mt-5 pt-5">
                    <Player { ...videoJsOptions } />
                </MDBContainer>
            );
        } else {
            const container = {height: 1300}
            return(
                <MDBContainer style={container} className="text-center mt-5 pt-5">
                    <h2>Waiting...</h2>
                </MDBContainer>
            )
        }
        
    }
}

export default ContentContainer;