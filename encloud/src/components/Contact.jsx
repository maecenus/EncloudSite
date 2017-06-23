import React, { Component } from 'react'
import { Grid, Row, Col, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap'
import cloud from '../../src/back6.jpg'


class Contact extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: ''
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    render() {
        return (
            <div id="contact">
                <Grid>
                    <Row id="contact-title">
                        <Col md={6} mdOffset={2} sm={12}>
                            <h2 id="contact-head">Ready to get started or have questions about our services?</h2>
                        </Col>
                        <Col md={3} sm={12}> <img id="cloud-devices" src={cloud} alt={"cloud devices"}/>
                        </Col>
                    </Row>
                    <br/>
                    <hr/>
                    <Row>
                       
                            <div id="contact-container">
                                <form id="contact-form">
                                <Col md={6} >
                                    <FormGroup controlId="firstName">
                                        <ControlLabel id="control-label">First Name </ControlLabel>
                                        <FormControl
                                            id="form-input"
                                            type="text"
                                            placeholder="Enter Your First Name"
                                            name="firstName"
                                            value={this.state.firstName}
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                    </FormGroup>
                                    <FormGroup controlId="lastName">
                                        <ControlLabel id="control-label">Last Name </ControlLabel>
                                        <FormControl
                                            id="form-input"
                                            type="text"
                                            placeholder="Enter Your Last Name"
                                            name="lastName"
                                            value={this.state.lastName}
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                    </FormGroup>
                                    <FormGroup controlId="email">
                                        <ControlLabel id="control-label">Email </ControlLabel>
                                        <FormControl
                                            id="form-input"
                                            type="text"
                                            placeholder="Enter Your email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                    <Button type="submit"
                                            className="btn btn-primary pull-left"
                                            id="submit-button"
                                    > Submit
                                    </Button>
                                </Col>
                                    <Col md={6} >
                                        <ControlLabel id="control-label">Send us your questions</ControlLabel>
                                        <textarea id="textarea-input" rows="10" cols="80" name="comment" form="usrform">
                                        </textarea>
                                    </Col>
                                </form>
                            </div>

                    </Row>
                    <Row id="contact-footer">
                        <Col md={4}>
                            <p id="contact-footer-addy">Encloud Consulting Group Inc.</p>
                            <p id="contact-footer-addy">2700 W. Anderson Ln #205</p>
                            <p id="contact-footer-addy">Austin, TX  78757</p>
                        </Col>
                    {/*</Row>*/}
                    {/*<Row>*/}
                        <Col md={4}>
                            <div>
                                <script type="IN/FollowCompany" data-id="16263987" data-counter="right"></script>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="fb-like"
                                 data-href="https://www.facebook.com/Encloud-Consulting-Group-1342260059198120/"
                                 data-width="50"
                                 data-layout="standard"
                                 data-action="like"
                                 data-size="small"
                                 data-show-faces="true"
                                 data-share="false"/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Contact;