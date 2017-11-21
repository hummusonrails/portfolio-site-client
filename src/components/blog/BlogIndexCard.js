import React from 'react';

class BlogIndexCard extends React.Component {

  render() {
    console.log(this.props.post)

    let blogSnippet =
      this.props.post ?
        this.props.post.content.slice(0, 500) : "Content is loading..."

    let showShare = event => {
      event.preventDefault();
      let shareElement = document.getElementsByClassName("blog-share-section");
      for (let i = 0; i < shareElement.length; i++) {
        if (shareElement[i].style.display === "block") {
          shareElement[i].style.display = "none";
        } else {
          shareElement[i].style.display = "block";
      }
    }
  }

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
            <button id="blog-readmore"><a href={this.props.post.original_link} target="_new">👉 Read More</a></button>
            &nbsp;&nbsp;
            <button id="blog-share" onClick={(event) => showShare(event)}>🗣 Share This</button>
          </div>
        </div>
        <div className="blog-share-section">
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${this.props.post.original_link}`}><img src="facebook_icon.png" width="120px" alt="facebook share"/></a>
        <a href={`https://twitter.com/home?status=Check%20out%20this%20article%20from%20the%20Reactive%20Rabbi%20at%20${this.props.post.original_link}`}><img src="twitter_icon.png" width="120px" alt="twitter share"/></a>
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${this.props.post.original_link}&title=The%20Article&summary=I%20found%20this%20article%20on%20the%20Reactive%20Rabbi%20(reactiverabbi.io)&source=`}><img src="linkedin_icon.png" width="120px" alt="linkedin share"/></a>
        </div>
        <div className="post-divider">
          <h1>. . . . . </h1>
        </div>
      </div>
    )
  }
}
export default BlogIndexCard;
