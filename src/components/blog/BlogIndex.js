import React from 'react';
import { connect } from 'react-redux';
import { loadMediumBlog } from '../../actions/BlogActions';
import BlogIndexCard from './BlogIndexCard';
import '../../css/blog.css';

class BlogIndex extends React.Component {
  componentDidMount() {
    this.props.loadMediumBlog()
  }

  render() {

    const renderBlogIndexCards =
      this.props.blogPosts ?
        this.props.blogPosts.map(post => <BlogIndexCard post={post} key={post.created}/>) :
        "Please wait. Blog posts are loading..."

    return (
        <div className="blog-cards-container">
          {renderBlogIndexCards}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    blogPosts: state.MediumBlogReducer.postings.items
  })
}

export default connect(mapStateToProps, { loadMediumBlog })(BlogIndex);
