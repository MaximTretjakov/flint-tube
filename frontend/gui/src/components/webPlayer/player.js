import React from 'react';
import PropTypes from 'prop-types';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";

import videojs from 'video.js';
import 'video.js/dist/video-js.css';

//import 'videojs-contrib-hls/dist/videojs-contrib-hls.js';
// Workaround for webworkify not working with webpack
window.videojs = videojs;
require('videojs-contrib-hls/dist/videojs-contrib-hls.js');

class Player extends React.Component {

  startVideo(video) {
    videojs(video);
}

render(){
    return (
        <MDBContainer>
          <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
            <MDBCardTitle>Panel Title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the panel title and make up the
              bulk of the panel's content.
              <video ref={this.startVideo} width={this.props.width} height={this.props.height} className="video-js vjs-default-skin" controls>
                <source src={this.props.source} type="application/x-mpegURL" />
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

Player.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Player;