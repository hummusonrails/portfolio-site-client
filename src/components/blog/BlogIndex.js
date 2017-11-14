import React from 'react';
import { connect } from 'react-redux';
import { loadMediumBlog } from '../../actions/BlogActions';

class BlogIndex extends React.Component {
  componentDidMount() {
    this.props.loadMediumBlog()
  }

  render() {

    return (
      this.props.blogPosts.items ?
        <div>
          <h1>{this.props.blogPosts.items[0].title}</h1>
        </div>
      :
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    blogPosts: state.MediumBlogReducer.postings
  })
}

export default connect(mapStateToProps, { loadMediumBlog })(BlogIndex);
