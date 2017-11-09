import React from 'react';
import { connect } from 'react-redux';
import {SectionsContainer, Section} from 'react-fullpage';
import { loadTechBlog } from '../../actions/BlogActions';
import { loadPortfolio } from '../../actions/PortfolioActions';
import SPABlogCard from './SPABlogCard';
import SPAPortfolioCard from './SPAPortfolioCard';
import SPAWelcome from '../SPAWelcome';
import SPAContact from '../SPAContact';
import {emojify} from 'react-emojione';
import MetaTags from 'react-meta-tags';

class SPA extends React.Component {

  componentDidMount() {
    if (window.location.search) {
      let company = decodeURI(window.location.search.split("=")[1])
      setTimeout(function(){ alert("Hi " + company + "!\n\nWelcome to Ben's website!\n\nI'm so glad you're here. Feel free to take a look at his projects and his recent blog posts. I look forward to hearing what you think, but since I'm just a piece of Javascript code I don't really have lots of opinions. I know however that Ben would love to hear from you.\n\nEnjoy your visit!"); }, 1500);
    }
    this.props.loadTechBlog();
    this.props.loadPortfolio();
  }

  render() {

    let options = {
  		//Navigation
  		menu: '.navbar',
  		lockAnchors: false,
  		anchors:['greeting', 'welcome', 'portfolio', 'blog', 'contact'],
  		navigation: true,
  		navigationPosition: 'left',
  		navigationTooltips: ['', 'welcome', 'portfolio', 'blog', 'contact'],
  		showActiveTooltip: true,
  		slidesNavigation: false,
  		slidesNavPosition: 'bottom',

  		//Scrolling
  		css3: true,
  		scrollingSpeed: 700,
  		autoScrolling: true,
  		fitToSection: false,
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
  		normalScrollElements: '',
  		scrollOverflow: true,
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
  		fixedElements: '.footer',
  		responsiveWidth: 0,
  		responsiveHeight: 0,
  		responsiveSlides: false,
  		parallax: false,
  		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

  		//Custom selectors
  		sectionSelector: '.section',
  		slideSelector: '.slide',

  		lazyLoading: true,
	  };


    var sortedBlog =
      this.props.blogPosts.sort(function(posting1, posting2) {
        return posting2.id - posting1.id;
      })

    var sortedPortfolio =
      this.props.portfolioListings.sort(function(listing1, listing2) {
        return listing2.id - listing1.id;
      })

    const renderBlogCards =
      sortedBlog.slice(0, 3).map(posting =>
        <SPABlogCard posting={posting} key={posting.id} />)

    const renderPortfolioCards =
      sortedPortfolio.slice(0, 3).map(listing =>
        <SPAPortfolioCard listing={listing} key={listing.id} />)

    return (
      <MetaTags>
        <meta property="og:title" content="Ben Greenberg: Full Stack Web Developer"/>
        <meta property="og:description" content="Find Ben Greenberg's latest
        portfolio projects and blog posts and get in touch with him."/>
        <meta property="og:image" content="http://bengreenberg.org/bg-headshot.jpg"/>
        <meta name="twitter:title" content="Ben Greenberg: Full Stack Web Developer"/>
        <meta name="twitter:description" content="Find Ben Greenberg's latest
        portfolio projects and blog posts and get in touch with him."/>
        <meta name="twitter:image" content="http://bengreenberg.org/bg-headshot.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>
      </MetaTags>

      <SectionsContainer {...options}>

      	<Section>
          <div id="opening">
            <h1>Hi! {emojify(':wave:')}</h1>
            <h1><div className="emoji">{emojify(':point_down:')}</div></h1>
          </div>
        </Section>

      	<Section><SPAWelcome/></Section>

        <Section>
            <h1 id="page-title">Recent Portfolio Items</h1>
            <p id="subtitle">Visit my
              <a href="https://www.linkedin.com/in/rabbigreenberg/"
                target="_new"> LinkedIn</a> profile to view all
                my portfolio items
            </p>
            <br />
            {renderPortfolioCards}
        </Section>

      	<Section>
          <h1 id="page-title">Recent Blog Posts</h1>
          <p id="subtitle">Visit my
            <a href="https://www.thecodingrabbi.com" target="_new"> blog </a> to
            view all my blog posts
          </p>
          <br />
          {renderBlogCards}
        </Section>

      	<Section>
          <SPAContact />
        </Section>
        
      </SectionsContainer>
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
