import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

class BlogCard extends React.Component {

  render() {

    return (
      <Grid fluid={true}>
        <Row className="show-grid">
          <Col md={6} lg={6} mdOffset={3} lgOffset={3}>
            <div className="blog-listing">
              <Col md={4} lg={4} componentClass="blog-listing">
                <img src={this.props.posting.image} alt={this.props.posting.name} className="img-thumbnail" width="40%" height="50%"/>
              </Col>
              <Col md={7} lg={7}>
                <strong><h2 id="blog-lead">{this.props.posting.name}</h2></strong>
                {this.props.posting.description}
                <br /><br />
                { this.props.posting.link ?
                  <a href={this.props.posting.link}><img src="/github_icon.png" width="10%"/></a> : null
                }
                { this.props.posting.youtube_link ?
                <a href={this.props.posting.youtube_link}><img src="/youtube_icon.png" width="10%"/></a> : null
                }
                { this.props.posting.website_link ?
                <a href={this.props.posting.website_link}><img src="/www_icon.png" width="10%"/></a> : null
                }
                { this.props.posting.blog_link ?
                <a href={this.props.posting.blog_link}><img src="/blog_icon.png" width="10%"/></a> : null
                }
              </Col>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default BlogCard;
