import React, {Component} from 'react';
import Attendee from './Attendee';
import {Grid, Row, Well, Col, Form, FormGroup, FormControl, ControlLabel, Button, ButtonGroup} from 'react-bootstrap';
import './css/App.css';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            attendees: [{id: 1}, {id: 2}]
        }
    }

    renderAttendeeRow = attendee => {
        return <Attendee key={attendee.id} attendee={attendee} remove={() => { this.removeAttendeeRow(attendee.id) }}/>;
    };

    removeAttendeeRow = id => {
      console.log(`removeAttendeeRow: ${id}`);
      let state = this.state;

      state.attendees = state.attendees.filter((a) => a.id !== id);

      this.setState(state);
    };

    addAttendee = () => {
        let state = this.state;
        const id = state.attendees.length + 1;
        state.attendees.push({id});

        this.setState(state);
    };

    render() {
        return (
            <Grid>
                <Row>
                    <h3 style={{textAlign: 'center'}}>Registration</h3>
                </Row>
                <hr />
                <Form horizontal>

                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel>First Name</ControlLabel>
                        </Col>
                        <Col md={4}>
                            <FormControl type='text' placeholder="First Name"/>
                        </Col>
                        <Col md={2}>
                            <ControlLabel>Last Name</ControlLabel>
                        </Col>
                        <Col md={4}>
                            <FormControl type='text' placeholder="Last Name"/>
                        </Col>

                    </FormGroup>
                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel>
                                Address
                            </ControlLabel>
                        </Col>
                        <Col md={10}>
                            <FormControl type='text' placeholder="Street"/>
                            <br/>
                            <FormControl type='text' placeholder="Street 2"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel>City</ControlLabel>
                        </Col>
                        <Col md={3}>
                            <FormControl type='text' placeholder="City"/>
                        </Col>

                        <Col md={1}>
                            <ControlLabel>State</ControlLabel>
                        </Col>
                        <Col md={2}>
                            <FormControl type='text' placeholder="State"/>
                        </Col>
                        <Col md={1}>
                            <ControlLabel>Postal</ControlLabel>
                        </Col>
                        <Col md={2}>
                            <FormControl type='text' placeholder="Zip code"/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel>Phone</ControlLabel>
                        </Col>
                        <Col md={4}>
                            <FormControl type='text' placeholder="Phone"/>
                        </Col>

                        <Col md={2}>
                            <ControlLabel>Email</ControlLabel>
                        </Col>
                        <Col md={4}>
                            <FormControl type='text' placeholder="Email address"/>
                        </Col>
                    </FormGroup>
                    <hr />

                    {this.state.attendees.map(this.renderAttendeeRow)}

                </Form>

                <Well>
                    <Row>

                        <Col md={2}>
                            <ControlLabel>
                                Total Attendees:
                            </ControlLabel>
                        </Col>
                        <Col md={1}>
                            {this.state.attendees.length}
                        </Col>

                        <Col md={2}>
                            <ControlLabel>
                                Total Price:
                            </ControlLabel>
                        </Col>
                        <Col md={1}>
                            $300.00
                        </Col>

                        <Col md={4} className="pull-right">
                            <ButtonGroup>
                                <Button onClick={this.addAttendee} bsStyle="info">
                                    Add Attendee
                                </Button>
                                <Button bsStyle="success">
                                    Checkout
                                </Button>
                            </ButtonGroup>

                        </Col>
                    </Row>
                </Well>

            </Grid>
        );
    }
}

export default Register;
