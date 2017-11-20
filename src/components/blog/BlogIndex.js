import React from 'react';
import { connect } from 'react-redux';
import { loadTechBlog } from '../../actions/BlogActions';
import BlogIndexCard from './BlogIndexCard';
import '../../css/blog.css';

class BlogIndex extends React.Component {
  componentDidMount() {
    this.props.loadTechBlog()
  }

  render() {

    let sortedBlog =
      this.props.blogPosts ?
      this.props.blogPosts.sort(function(posting1, posting2) {
        return posting2.id - posting1.id;
      }) : "Please wait while the blog posts load..."

    const renderBlogIndexCards =
        sortedBlog.map(post => <BlogIndexCard post={post} key={post.id}/>)

    return (
      <div className="page-wrapper">
        <div className="blog-nav">
        <button id="home-button"><a href="http://bengreenberg.org">Home</a></button>
        </div>
        <h1 id="blog-home-title">Blog Posts</h1>
        <div className="blog-cards-container">
          {renderBlogIndexCards}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    blogPosts: state.BlogReducer.postings
  })
}

export default connect(mapStateToProps, { loadTechBlog })(BlogIndex);
