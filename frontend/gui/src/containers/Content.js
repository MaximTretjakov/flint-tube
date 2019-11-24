import React from 'react';
import { MDBContainer } from 'mdbreact';

import Player from '../components/webPlayer/player'

class ContentContainer extends React.Component {

    state = {

    };

    render(){
        const container = {height: 1300}
        return(
            <MDBContainer style={container} className="text-center mt-5 pt-5">
                <h2>This Navbar is fixed</h2>
                <h5>It will always stay visible on the top, even when you scroll down</h5>
                <br/>
                <p>Full page intro with background image will be always displayed in full screen mode, regardless of device</p>
                <Player source='http://127.0.0.1/live/ansSdVT0PoFCyz2alwC2/index.m3u8' width='300' height='300'/>
            </MDBContainer>
        );
    }
}

export default ContentContainer;