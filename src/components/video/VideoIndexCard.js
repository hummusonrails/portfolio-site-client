import React from 'react';
import {emojify} from 'react-emojione';

class VideoIndexCard extends React.Component {

  render() {

    let tagsArray =
      this.props.video.tags ?
        this.props.video.tags.split(",") : null


    return (
      <div className="video-card-wrapper">
        <div className="video-card-header">
          <div className="video-card-title">
            <h1>{this.props.video.title}</h1>
          </div>
        </div>
        <div className="video-card-content">
          <div className="video-card-picture">
            <img src={this.props.video.image} alt="Video Screenshot"/>
          </div>
          <div className="video-card-details">
            <button id="video-link"><a href={this.props.video.url} target="_new">{emojify(':video_camera:')} Watch Video</a></button>
            &nbsp;&nbsp;
            <span id="video-date"><p>Published: {this.props.video.created_on}</p></span>
            <p>Tags: {tagsArray}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default VideoIndexCard;
