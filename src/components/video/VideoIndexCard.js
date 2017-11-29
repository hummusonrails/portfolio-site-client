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
      <div className="blog-card-wrapper">
        <div className="blog-card-header">
          <div className="blog-card-title">
            <h1>{this.props.video.title}</h1>
          </div>
        </div>
        <div className="blog-card-content">
          <div className="blog-card-picture">
            <img src={this.props.video.image} alt="Video Screenshot"/>
          </div>
          <div className="blog-card-snippet">
            <span id="blog-date"><p>Published:<br/>{this.props.video.created_on}</p></span>
            <p>{this.props.video.tags}</p>
            <button id="blog-readmore"><a href={this.props.video.url} target="_new">{emojify(':point_right:')} Watch Video</a></button>
            &nbsp;&nbsp;
            <button id="blog-share" className={this.props.video.id} onClick={(event) => showShare(this.props.video.id, event)}>{emojify(':speaking_head_in_silhouette:')} Share This</button>
          </div>
        </div>
        <div className="blog-share-section" id={this.props.video.id}>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${this.props.video.url}`}><img src="facebook_icon.png" width="80px" alt="facebook share"/></a>
        <a href={`https://twitter.com/home?status=Check%20out%20this%20video%20from%20the%20Reactive%20Rabbi%20at%20${this.props.video.url}`}><img src="twitter_icon.png" width="80px" alt="twitter share"/></a>
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${this.props.video.url}&title=The%20Article&summary=I%20found%20this%20video%20on%20the%20Reactive%20Rabbi%20(reactiverabbi.io)&source=`}><img src="linkedin_icon.png" width="80px" alt="linkedin share"/></a>
        </div>
        <div className="post-divider">
          <h1>. . . . . </h1>
        </div>
      </div>
    )
  }
}
export default VideoIndexCard;
