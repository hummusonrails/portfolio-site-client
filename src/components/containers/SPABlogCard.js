import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

class SPAPortfolioCard extends React.Component {

  render() {
    let snippet = this.props.posting.content.substring(0, 200) + "..."

      return (
        <Grid fluid={true}>
          <Row className="show-grid">
              <div className="blog-listing">
                <Col md={6} lg={6} componentClass="blog-listing">
                  <img src={this.props.posting.image}
                    alt={this.props.posting.title} id="img-thumbnail"
                    className="hvr-buzz" width="30%" height="30%"
                  />
                </Col>
                <Col md={6} lg={6}>
                  <strong>
                    <h2 id="blog-lead">{this.props.posting.title}</h2>
                  </strong>
                  {snippet}
                  <br /><br />
                  <a href={this.props.posting.original_link} target="_new">
                    Read More
                  </a>
                </Col>
              </div>
          </Row>
        </Grid>
    );
  }
}


export default SPAPortfolioCard;
