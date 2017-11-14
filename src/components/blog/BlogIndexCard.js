import React from 'react';

class BlogIndexCard extends React.Component {

  render() {

    return (
      <div>
        <h1>{this.props.post.title}</h1>
      </div>
    )
  }
}
export default BlogIndexCard;
