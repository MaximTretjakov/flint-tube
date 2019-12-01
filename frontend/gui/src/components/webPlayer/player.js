import React from 'react';
import { MDBCard, MDBCardText } from "mdbreact";

import videojs from 'video.js';
import 'video.js/dist/video-js.css';


window.videojs = videojs;
require('videojs-contrib-hls/dist/videojs-contrib-hls.js');

class Player extends React.Component {

  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render(){
      return (
          // <MDBContainer>
            <MDBCard className="card-body" style={{ width: "680px", marginTop: "1rem" }}>
              <MDBCardText>
                <video ref={ node => this.videoNode = node } width={this.props.width} height={this.props.height} className="video-js vjs-default-skin" controls>
                </video>
              </MDBCardText>
              <div className="flex-row">
                <h4><span className="badge pill badge-danger">Online</span></h4>
              </div>
            </MDBCard>
          // </MDBContainer>
      );
  }
}

export default Player;