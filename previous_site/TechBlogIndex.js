import React from 'react';
import { connect } from 'react-redux';
import BlogCard from './BlogCard';
import { loadTechBlog } from '../../actions/BlogActions';

class TechBlogIndex extends React.Component {

  componentDidMount() {
    this.props.loadTechBlog();
  }

  render() {

    var sortedBlog =
      this.props.postings.sort(function(posting1, posting2) {
        return posting2.id - posting1.id;
      })

    const renderBlogCards =
      sortedBlog.map(posting =>
        <BlogCard posting={posting} key={posting.id} />)

    return (
      <div>
        <h1 id="blog-title">Tech Blog Posts</h1>
        {renderBlogCards}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    postings: state.BlogReducer.postings,
    finishedLoading: state.BlogReducer.finishedLoading
  })
}
export default connect(mapStateToProps, { loadTechBlog })(TechBlogIndex);
