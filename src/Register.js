import React, {Component} from 'react';
import Attendee from './Attendee';
import {Grid, Row, Well, Col, Form, FormGroup, FormControl, ControlLabel, Button, ButtonGroup} from 'react-bootstrap';
import './css/App.css';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            street: '',
            street2: '',
            city: '',
            state: '',
            postal: '',
            phone: '',
            email: '',
            attendees: []
        }
    }

    renderAttendeeRow = attendee => {
        return attendee ? <Attendee key={attendee.id} attendee={attendee} updateHandler={(e) => this.handleAttendeeInputChange(e, attendee.id)} remove={() => { this.removeAttendeeRow(attendee.id) }}/> : null;
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

    back = () => {
        this.props.back();
    };

    handleInputChange = event => {
        const target = event.target;

        this.setState(state => {
            const registration = state;
            registration[target.name] = target.type === 'checkbox' ? target.checked : target.value;
            return registration;
        });
    };

    handleAttendeeInputChange = (event, id)  => {
        console.log(`handleAttendeeInputChange: ${id}`);
        const target = event.target;

        let attendees = this.state.attendees.map(a => {
            if(a && a.id === id) {
                a[target.name] = target.type === 'checkbox' ? target.checked : target.value;
            }

            return a;
        });
        this.setState({attendees})
    };

    render() {
        return (
            <Grid>
                <Row>
                    <Button onClick={this.back}>Back</Button>
                    <h1 style={{textAlign: 'center'}}>Registration</h1>
                </Row>
                <hr />
                <Form horizontal>

                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel>First Name</ControlLabel>
                        </Col>
                        <Col md={4}>
                            <FormControl name="firstName" type='text' placeholder="First Name" value={this.state.firstName} onChange={this.handleInputChange}/>
                        </Col>
                        <Col md={2}>
                            <ControlLabel>Last Name</ControlLabel>
                        </Col>
                        <Col md={4}>
                            <FormControl name="lastName" type='text' placeholder="Last Name" value={this.state.lastName} onChange={this.handleInputChange}/>
                        </Col>

                    </FormGroup>
                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel>
                                Address
                            </ControlLabel>
                        </Col>
                        <Col md={10}>
                            <FormControl name="street" type='text' placeholder="Street" value={this.state.street} onChange={this.handleInputChange}/>
                            <br/>
                            <FormControl name="street2" type='text' placeholder="Street 2" value={this.state.street2} onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel>City</ControlLabel>
                        </Col>
                        <Col md={3}>
                            <FormControl name="city" type='text' placeholder="City" value={this.state.city} onChange={this.handleInputChange}/>
                        </Col>

                        <Col md={1}>
                            <ControlLabel>State</ControlLabel>
                        </Col>
                        <Col md={2}>
                            <FormControl name="state" type='text' placeholder="State" value={this.state.state} onChange={this.handleInputChange}/>
                        </Col>
                        <Col md={1}>
                            <ControlLabel>Postal</ControlLabel>
                        </Col>
                        <Col md={2}>
                            <FormControl name="postal" type='text' placeholder="Zip code" value={this.state.postal} onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel>Phone</ControlLabel>
                        </Col>
                        <Col md={4}>
                            <FormControl name="phone" type='text' placeholder="Phone" value={this.state.phone} onChange={this.handleInputChange}/>
                        </Col>

                        <Col md={2}>
                            <ControlLabel>Email</ControlLabel>
                        </Col>
                        <Col md={4}>
                            <FormControl name="email" type='text' placeholder="Email address" value={this.state.email} onChange={this.handleInputChange}/>
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
