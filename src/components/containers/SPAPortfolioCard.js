import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

class SPAPortfolioCard extends React.Component {

  render() {
    return (
      <div className="blog-listing">
        <Grid fluid={true}>

        <Row className="show-grid">
          <div className="content">
              <Col lg={6} md={3}>
                <br /><br />
                <img src={this.props.listing.image} alt={this.props.listing.name}
                  id="img-thumbnail" className="hvr-buzz" width="80%" height="60%"/>
              </Col>
          </div>

          <Col lg={6} md={3}>

            <p id="blog-lead">{this.props.listing.name}</p>
            <div id="index-content">
            {this.props.listing.description}
            <br /><br />
            { this.props.listing.link ?
              <a href={this.props.listing.link}><img src="/github_icon.png"
                width="10%" alt="github link" /></a> : null
            }
            { this.props.listing.youtube_link ?
            <a href={this.props.listing.youtube_link}><img src="/youtube_icon.png"
              width="10%" alt="youtube link" /></a> : null
            }
            { this.props.listing.website_link ?
            <a href={this.props.listing.website_link}><img src="/www_icon.png"
              width="10%" alt="website link" /></a> : null
            }
            { this.props.listing.blog_link ?
            <a href={this.props.listing.blog_link}><img src="/blog_icon.png"
              width="10%" alt="blog link" /></a> : null
            }
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

export default SPAPortfolioCard;
