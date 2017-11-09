import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

class SPAWelcome extends React.Component {

  render() {

    return (
      <div className="container">
        <Grid fluid={true}>

          <Row className="show-grid">
            <div className="content">
                <Col lg={6} md={6}>
                  <br /><br />
                  <img src="/bg-headshot.jpg" alt="Ben Greenberg" id="headshot" className="hvr-pop"/>
                </Col>
            </div>

              <Col lg={6} md={6}>

                <p id="page-title">Welcome!</p>
                <div id="index-content">
                  <p id="paragraph1">I have worked for nearly 10 years as a non-profit professional and community organizer. During the past decade I've served communities and organizations in Boston, Denver, Chicago and New York. Throughout my non-profit career I've been fortunate to work closely with college students on campus, organize for a better society and create and lead new departments and teams.</p>
                  <br />
                  <p id="paragraph2">After a decade of non-profit communal service, I've come back to the tech sector. During the 1990s I co-founded a computer security firm and co-founded Southern California's largest computer security conference. I've returned to my tech roots as a recent graduate of the Flatiron School and now spend my time on open source projects, on freelancing and as an Online Technical Coach at WeWork.</p>
                  <br />
                  <p id="paragraph3">Please browse a sampling of my portfolio and my blog posts on this site. You can find the rest of my blog posts at <a href="http://www.thecodingrabbi.com" target="_new">thecodingrabbi.com</a> and my complete portfolio on <a href="https://www.linkedin.com/in/rabbigreenberg/" target="_new">LinkedIn</a>.</p>
                  <br />
                  <p>I look forward to being in touch!</p>
                  <p id="signature">Ben Greenberg</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
  }

export default SPAWelcome;
