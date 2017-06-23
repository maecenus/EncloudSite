import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

class Web extends Component {
    render() {
        return (
        <div>
            <div id="web">
                <Grid>
                    <div id="web-container">
                        <Row>
                            <Col md={8}>
                                <h1>Web App Design</h1>
                            </Col>
                            <Col md={4}>
                                <i className="fa fa-window-restore fa-5x" />
                            </Col>
                        </Row>
                        <br/>
                        <hr/>
                        <Row id="web-message">
                            <Col md={6} mdOffset={3}>
                                <p>The Encloud team specializes in mobile friendly responsive design web applications,
                                    web based business productivity tools and dashboards, and custom e-commerece solutions using cutting edge JavaScript frameworks and libraries.</p>
                            </Col>
                        </Row>
                    </div>
                </Grid>
            </div>
            <Jumbotron id="web-jumbotron">
            </Jumbotron>
            </div>
        )
    }
}

export default Web;