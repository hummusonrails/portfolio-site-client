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
	   $('#fullpage').fullpage({
  		//Navigation
  		menu: '.navbar',
  		lockAnchors: false,
  		anchors:['firstPage', 'secondPage'],
  		navigation: true,
  		navigationPosition: 'right',
  		navigationTooltips: ['', 'welcome', 'portfolio', 'blog', 'contact'],
  		showActiveTooltip: true,
  		slidesNavigation: false,
  		slidesNavPosition: 'bottom',

  		//Scrolling
  		css3: true,
  		scrollingSpeed: 700,
  		autoScrolling: true,
  		fitToSection: true,
  		fitToSectionDelay: 1000,
  		scrollBar: false,
  		easing: 'easeInOutCubic',
  		easingcss3: 'ease',
  		loopBottom: false,
  		loopTop: false,
  		loopHorizontal: true,
  		continuousVertical: false,
  		continuousHorizontal: false,
  		scrollHorizontally: false,
  		interlockedSlides: false,
  		dragAndMove: false,
  		offsetSections: false,
  		resetSliders: false,
  		fadingEffect: false,
  		normalScrollElements: '#element1, .element2',
  		scrollOverflow: false,
  		scrollOverflowReset: false,
  		scrollOverflowOptions: null,
  		touchSensitivity: 15,
  		normalScrollElementTouchThreshold: 5,
  		bigSectionsDestination: null,

  		//Accessibility
  		keyboardScrolling: true,
  		animateAnchor: true,
  		recordHistory: true,

  		//Design
  		controlArrows: true,
  		verticalCentered: true,
  		paddingTop: '3em',
  		paddingBottom: '10px',
  		fixedElements: '.navbar, .footer',
  		responsiveWidth: 0,
  		responsiveHeight: 0,
  		responsiveSlides: false,
  		parallax: false,
  		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

  		//Custom selectors
  		sectionSelector: '.section',
  		slideSelector: '.slide',

  		lazyLoading: true,

  		//events
  		onLeave: function(index, nextIndex, direction){},
  		afterLoad: function(anchorLink, index){},
  		afterRender: function(){},
  		afterResize: function(){},
  		afterResponsive: function(isResponsive){},
  		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
  		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	  });
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
