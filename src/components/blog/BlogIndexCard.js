import React from 'react';
import jQuery from 'jquery';

class BlogIndexCard extends React.Component {
  componentDidMount() {
    let path = 'http://localhost:3000/',
      imgs = ['www_icon.png', 'youtube_icon.png', 'linkedin_icon.png'],
      i = Math.floor(Math.random()*imgs.length);
      jQuery('.blog-card-picture').append("<img src='"+path+imgs[i]+"'/>")
        .hide().fadeIn(2000);
    }

  render() {

    console.log(this.props.post)
    return (
      <div className="blog-card">
        <div className="blog-card-picture">
        </div>
        <div className="blog-card-content">
          <h1>{this.props.post.title}</h1>
        </div>
      </div>
    )
  }
}
export default BlogIndexCard;
