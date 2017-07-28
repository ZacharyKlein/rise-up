import React, {Component} from 'react';
import Attendee from './Attendee';
import {Alert, Grid, Row, Well, Col, Form, FormGroup, FormControl, ControlLabel, Button, ButtonGroup} from 'react-bootstrap';
import './css/App.css';
import 'whatwg-fetch';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            registration: {
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
            },
            tickets: [],
            seminar1: [],
            seminar2: [],
            seminar3: [],
            seminar4: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/tickets')
            .then((r) => r.json())
            .then(json => this.setState({tickets: json}));

        fetch('http://localhost:8080/api/seminar1')
            .then((r) => r.json())
            .then(json => this.setState({seminar1: json}));

        fetch('http://localhost:8080/api/seminar2')
            .then((r) => r.json())
            .then(json => this.setState({seminar2: json}));

        fetch('http://localhost:8080/api/seminar3')
            .then((r) => r.json())
            .then(json => this.setState({seminar3: json}));

        fetch('http://localhost:8080/api/seminar4')
            .then((r) => r.json())
            .then(json => this.setState({seminar4: json}));
    }
    renderAttendeeRow = attendee => {
        const {tickets, seminar1, seminar2, seminar3, seminar4} = this.state;
        return attendee ?
        <Attendee key={attendee.index} attendee={attendee} tickets={tickets}
            seminar1={seminar1} seminar2={seminar2} seminar3={seminar3} seminar4={seminar4}
            updateHandler={(e) => this.handleAttendeeInputChange(e, attendee.index)}
            remove={() => {
                this.removeAttendeeRow(attendee.index)
            }}/> : null;
    };

    removeAttendeeRow = index => {
        let {registration} = this.state;

        registration.attendees = this.state.registration.attendees.filter((a) => a.index !== index);

        this.setState({registration});
    };

    addAttendee = () => {
        let {registration} = this.state;
        const index = registration.attendees ? registration.attendees.length + 1 : 0;
        registration.attendees.push({index});

        this.setState({registration});
    };

    back = () => {
        this.props.back();
    };

    handleInputChange = event => {
        const target = event.target;

        this.setState(state => {
            const registration = state.registration;
            registration[target.name] = target.type === 'checkbox' ? target.checked : target.value;
            return {registration};
        });
    };

    handleAttendeeInputChange = (event, index) => {
        console.log(`handleAttendeeInputChange: ${index}`);
        const target = event.target;

        let {registration} = this.state;
        registration.attendees = registration.attendees.map(a => {
            if (a && a.index === index) {
                a[target.name] = target.type === 'checkbox' ? target.checked : target.value;
            }

            return a;
        });


        this.setState({registration})
    };

    submitRegistration = (e) => {
        e.preventDefault();

        console.log(this.state.registration);

        fetch('http://localhost:8080/registration', {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(this.state.registration)
        })
            .then((r) => r.json())
            .then(json => {
                console.log(json);
                this.props.finish();
            })
            .catch(error => this.setState({error: error}));
    };

    closeError = () => this.setState({error: ''});

    render() {

        const {error, registration, tickets} = this.state;
        const {attendees} = registration;

        const totalPrice = attendees.map(a => {
                const ticket = a.ticket ? tickets.filter(t => Number(a.ticket) === Number(t.id))[0] : null;
                return ticket ? ticket.price : 0
        }).reduce((a, b) => a + b, 0);

        return (
            <Grid>
                <Form horizontal onSubmit={this.submitRegistration}>
                    <Row>
                        <Button onClick={this.back}>Back</Button>
                        <h1 style={{textAlign: 'center'}}>Registration</h1>
                    </Row>
                    <hr />

                    {error ? <Alert bsStyle="danger" onDismiss={this.closeError}>
                        <h4>An error occurred!</h4>
                        <p>
                            {error}
                        </p>
                        <p>Please contact <a href="mailto:info@localhost">our staff</a> for support</p>
                    </Alert> : null}


                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel>First Name</ControlLabel>
                        </Col>
                        <Col md={4}>
                            <FormControl name="firstName" type='text' placeholder="First Name"
                                         value={this.state.registration.firstName} onChange={this.handleInputChange}/>
                        </Col>
                        <Col md={2}>
                            <ControlLabel>Last Name</ControlLabel>
                        </Col>
                        <Col md={4}>
                            <FormControl name="lastName" type='text' placeholder="Last Name"
                                         value={this.state.registration.lastName}
                                         onChange={this.handleInputChange}/>
                        </Col>

                    </FormGroup>
                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel>
                                Address
                            </ControlLabel>
                        </Col>
                        <Col md={10}>
                            <FormControl name="address1" type='text' placeholder="Street"
                                         value={this.state.registration.address1}
                                         onChange={this.handleInputChange}/>
                            <br/>
                            <FormControl name="address2" type='text' placeholder="Street 2"
                                         value={this.state.registration.address2}
                                         onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel>City</ControlLabel>
                        </Col>
                        <Col md={3}>
                            <FormControl name="city" type='text' placeholder="City" value={this.state.registration.city}
                                         onChange={this.handleInputChange}/>
                        </Col>

                        <Col md={1}>
                            <ControlLabel>State</ControlLabel>
                        </Col>
                        <Col md={2}>
                            <FormControl name="state" type='text' placeholder="State"
                                         value={this.state.registration.state}
                                         onChange={this.handleInputChange}/>
                        </Col>
                        <Col md={1}>
                            <ControlLabel>Postal</ControlLabel>
                        </Col>
                        <Col md={2}>
                            <FormControl name="postal" type='text' placeholder="Zip code"
                                         value={this.state.registration.postal}
                                         onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col md={2}>
                            <ControlLabel>Phone</ControlLabel>
                        </Col>
                        <Col md={4}>
                            <FormControl name="phone" type='text' placeholder="Phone"
                                         value={this.state.registration.phone}
                                         onChange={this.handleInputChange}/>
                        </Col>

                        <Col md={2}>
                            <ControlLabel>Email</ControlLabel>
                        </Col>
                        <Col md={4}>
                            <FormControl name="email" type='text' placeholder="Email address"
                                         value={this.state.registration.email}
                                         onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>
                    <hr />

                    {this.state.registration.attendees.map(this.renderAttendeeRow)}


                    <Well>
                        <Row>

                            <Col md={2}>
                                <ControlLabel>
                                    Total Attendees:
                                </ControlLabel>
                            </Col>
                            <Col md={1}>
                                {this.state.registration.attendees.length}
                            </Col>

                            <Col md={2}>
                                <ControlLabel>
                                    Total Price:
                                </ControlLabel>
                            </Col>
                            <Col md={1}>
                                ${totalPrice}
                            </Col>

                            <Col md={4} className="pull-right">
                                <ButtonGroup>
                                    <Button onClick={this.addAttendee} bsStyle="info">
                                        Add Attendee
                                    </Button>
                                    <Button bsStyle="success" type="submit">
                                        Submit Registration
                                    </Button>
                                </ButtonGroup>

                            </Col>
                        </Row>
                    </Well>
                </Form>
            </Grid>
        );
    }
}

export default Register;
