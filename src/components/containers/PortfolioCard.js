import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

class PortfolioCard extends React.Component {

  componentDidMount() {

    };

  render() {

    return (
      <Grid fluid={true}>
        <Row className="show-grid">
          <Col md={6} lg={6} mdOffset={3} lgOffset={3}>
            <div className="blog-listing">
              <Col md={6} lg={6} componentClass="blog-listing">
                <img src={this.props.listing.image} alt={this.props.listing.name} className="img-thumbnail" width="40%" height="40%"/>
              </Col>
              <Col md={6} lg={6}>
                <strong><h4 id="blog-content"><a href={"/portfolio/show/" + this.props.listing.id}>{this.props.listing.name}</a></h4></strong>
              </Col>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default PortfolioCard;
