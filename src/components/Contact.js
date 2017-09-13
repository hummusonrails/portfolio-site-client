import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

class Contact extends React.Component {
  render() {

    return (
      <div className="container">
        <Grid fluid={true}>

          <Row className="show-grid">
            <div className="content">
              <br /><br />
              <h1 id="blog-title">Contact</h1>
                <Col lg={12} md={12}>
                  <h2 id="title-linethree">I would love to hear from you.<br/> Please get in contact through any of the following:</h2>
                  <br /><br />
                  <a href="https://www.facebook.com/RabbiBenGreenberg/"><img src="/facebook_icon.svg" width="20%" alt="facebook icon"/></a>
                  <a href="https://twitter.com/RabbiGreenberg"><img src="/twitter_icon.png" width="20%" alt="twitter icon"/></a>
                  <a href="https://www.linkedin.com/in/rabbigreenberg/"><img src="/linkedin_icon.png" width="22%" alt="linkedin icon"/></a>
                  <br /><br /><br /><br /><br /><br /><br /><br />
                </Col>
              </div>
            </Row>
          </Grid>
        </div>
      );
    }
  }

export default Contact;
