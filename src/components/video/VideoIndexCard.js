import React from 'react';
import {emojify} from 'react-emojione';

class VideoIndexCard extends React.Component {

  render() {

    let showShare = (buttonId, event) => {
      event.preventDefault();
      let shareElement = document.getElementsByClassName("blog-share-section");
      for (let i = 0; i < shareElement.length; i++) {
        if (shareElement[i].id === buttonId) {
          if (shareElement[i].style.display === "block") {
            shareElement[i].style.display = "none";
          } else {
            shareElement[i].style.display = "block";
            shareElement[i].style.paddingTop = "5px";
          }
        }
      }
    }

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
            <button id="video-link"><a href={this.props.video.url} target="_new">{emojify(':point_right:')} Watch Video</a></button>
            &nbsp;&nbsp;
            <span id="video-date"><p>Published: {this.props.video.created_on}</p></span>
            <p>Tags: {this.props.video.tags}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default VideoIndexCard;
