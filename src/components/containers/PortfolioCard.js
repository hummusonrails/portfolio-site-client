import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

class PortfolioCard extends React.Component {

  render() {

    return (
      <Grid fluid={true}>
        <Row className="show-grid">
          <Col md={6} lg={6} mdOffset={3} lgOffset={3}>
            <div className="blog-listing">
              <Col md={4} lg={4} componentClass="blog-listing">
                <img src={this.props.listing.image} alt={this.props.listing.name} className="img-thumbnail" width="40%" height="50%"/>
              </Col>
              <Col md={7} lg={7}>
                <strong><h2 id="blog-lead">{this.props.listing.name}</h2></strong>
                {this.props.listing.description}
                <br /><br />
                { this.props.listing.link ?
                  <a href={this.props.listing.link}><img src="/github_icon.png" width="10%"/></a> : null
                }
                { this.props.listing.youtube_link ?
                <a href={this.props.listing.youtube_link}><img src="/youtube_icon.png" width="10%"/></a> : null
                }
                { this.props.listing.website_link ?
                <a href={this.props.listing.website_link}><img src="/www_icon.png" width="10%"/></a> : null
                }
                { this.props.listing.blog_link ?
                <a href={this.props.listing.blog_link}><img src="/blog_icon.png" width="10%"/></a> : null
                }
              </Col>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default PortfolioCard;
