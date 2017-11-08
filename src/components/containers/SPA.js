import React from 'react';
import { connect } from 'react-redux';
import fullpage from 'fullpage.js';
import $ from 'jquery';
import { loadTechBlog } from '../../actions/BlogActions';
import { loadPortfolio } from '../../actions/PortfolioActions';
import BlogCard from './BlogCard';
import PortfolioCard from './PortfolioCard';
import SPAWelcome from '../SPAWelcome';


class SPA extends React.Component {

  componentDidMount() {
    this.props.loadTechBlog();
    this.props.loadPortfolio();
  }

  render() {

    $(document).ready(function() {
      $('#fullpage').fullpage();
    });

    var sortedBlog =
      this.props.blogPosts.sort(function(posting1, posting2) {
        return posting2.id - posting1.id;
      })

    var sortedPortfolio =
      this.props.portfolioListings.sort(function(listing1, listing2) {
        return listing2.id - listing1.id;
      })

    const renderBlogCards =
      sortedBlog.map(posting =>
        <BlogCard posting={posting} key={posting.id} />)

    const renderPortfolioCards =
      sortedPortfolio.map(listing =>
        <PortfolioCard listing={listing} key={listing.id} />)

    return (
      <div id="fullpage">
      	<div className="section" id="opening"><h1>Hi.</h1></div>
      	<div className="section" id="welcome"><SPAWelcome/></div>
        <div className="section" id="portfolio">{renderPortfolioCards}</div>
      	<div className="section" id="blog">{renderBlogCards}</div>
      	<div className="section" id="ending"><h1>Bye.</h1></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    blogPosts: state.BlogReducer.postings,
    finishedLoading: state.BlogReducer.finishedLoading,
    portfolioListings: state.PortfolioReducer.listings,
    portfoliofinishedLoading: state.PortfolioReducer.finishedLoading
  })
}
export default connect(mapStateToProps, { loadTechBlog, loadPortfolio })(SPA);
