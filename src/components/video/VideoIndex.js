import React from 'react';
import { connect } from 'react-redux';
import { loadVideos } from '../../actions/VideoActions';
import VideoIndexCard from './VideoIndexCard';
import '../../css/video.css';

class VideoIndex extends React.Component {
  componentDidMount() {
    this.props.loadVideos()
  }

  render() {

    let sortedVideos =
      this.props.videos ?
      this.props.videos.sort(function(video1, video2) {
        return video2.id - video1.id;
      }) : "Please wait while the videos load..."

    const renderVideoIndexCards =
        sortedVideos.map(video => <VideoIndexCard video={video} key={video.id}/>)

    return (
      <div className="page-wrapper">
        <div className="blog-nav">
        <button id="home-button"><a href="http://bengreenberg.org">Home</a></button>
        </div>
        <h1 id="blog-home-title">Videos</h1>
        <div className="video-cards-container">
          {renderVideoIndexCards}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    videos: state.VideoReducer.videos
  })
}

export default connect(mapStateToProps, { loadVideos })(VideoIndex);
