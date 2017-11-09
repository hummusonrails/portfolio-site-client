import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

const Footer = (
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col mdPush={5}>
              &copy; 2017 Ben Greenberg. All Rights Reserved.
              <a href="https://bengreenberg.herokuapp.com/admin/login"><img src="/key-icon.png" width="60" alt="admin key" /></a>
            </Col>
          </Row>
        </Grid>
)
export default Footer;
