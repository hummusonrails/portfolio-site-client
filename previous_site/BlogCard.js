import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

class BlogCard extends React.Component {

  render() {
    var snippet = this.props.posting.content.substring(0, 500) + "..."

    return (
      <Grid fluid={true}>
        <Row className="show-grid">
          <Col md={6} lg={6} mdOffset={3} lgOffset={3}>
            <div className="blog-listing">
              <Col md={4} lg={4} componentClass="blog-listing">
                <img src={this.props.posting.image} alt={this.props.posting.title} className="img-thumbnail" width="40%" height="50%"/>
              </Col>
              <Col md={7} lg={7}>
                <strong><h2 id="blog-lead">{this.props.posting.title}</h2></strong>
                {snippet}
                <br /><br />
                <a href={this.props.posting.original_link} target="_new">Read More</a>
              </Col>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default BlogCard;
