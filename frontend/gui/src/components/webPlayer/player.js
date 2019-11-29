import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";

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
          <MDBContainer>
            <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
              <MDBCardTitle>Panel Title</MDBCardTitle>
              <MDBCardText>
                <video ref={ node => this.videoNode = node } width={this.props.width} height={this.props.height} className="video-js vjs-default-skin" controls>
                </video>
              </MDBCardText>
              <div className="flex-row">
                <a href="#!">MDBCard link</a>
                <a href="#!" style={{ marginLeft: "1.25rem" }}>Another link</a>
              </div>
            </MDBCard>
          </MDBContainer>
      );
  }
}

export default Player;