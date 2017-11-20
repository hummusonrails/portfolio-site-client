import React from 'react';

class BlogIndexCard extends React.Component {

  render() {
    console.log(this.props.post)

    let blogSnippet =
      this.props.post ?
        this.props.post.content.slice(0, 500) : "Content is loading..."

    return (
      <div className="blog-card-wrapper">
        <div className="blog-card-header">
          <div className="blog-card-title">
            <h1>{this.props.post.title}</h1>
          </div>
        </div>
        <div className="blog-card-content">
          <div className="blog-card-picture">
            <img src={this.props.post.image} alt="Blog post"/>
          </div>
          <div className="blog-card-snippet">
            <span id="blog-date"><p>Published:<br/>{this.props.post.created_on}</p></span>
            <p>{blogSnippet}...</p>
            <button id="blog-readmore"><a href={this.props.post.original_link} target="_new">Read More</a></button>
          </div>
        </div>
        <div className="post-divider">
          <h1>. . . . . </h1>
        </div>
      </div>
    )
  }
}
export default BlogIndexCard;
