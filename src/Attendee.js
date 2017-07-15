import React, {Component} from 'react';
import {Button, Well, Row, Col, Checkbox, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import './css/App.css';

class Attendee extends Component {

    render() {
        // const {attendee} = this.props;
        const {attendee, updateHandler} = this.props;

        return <Well>
            <Row>
                <Col md={2}>
                    <h4>Attendee {attendee.id}</h4>
                </Col>
            </Row>
            <hr/>
            <FormGroup>
                <Col md={2}>
                    <ControlLabel>First Name</ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl type="text" placeholder="First Name" name="firstName" onChange={updateHandler}/>
                </Col>

                <Col md={2}>
                    <ControlLabel>Last Name</ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl type="text"  name="lastName" placeholder="Last Name" onChange={updateHandler}/>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col md={3}>
                    <ControlLabel>Age (for children)</ControlLabel>
                </Col>
                <Col md={3}>
                    <FormControl type="text" name="age" placeholder="Age" onChange={updateHandler}/>
                </Col>

                <Col md={2}>
                    <ControlLabel>Gender</ControlLabel>
                </Col>
                <Col md={2}>
                    <FormControl componentClass="select" name="gender" onChange={updateHandler}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </FormControl>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col md={2}>
                    <ControlLabel>Phone</ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl type='text' placeholder="Phone" name="phone" onChange={updateHandler}/>
                </Col>

                <Col md={2}>
                    <ControlLabel>Email</ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl type='text' placeholder="Email address" name="email" onChange={updateHandler}/>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col md={2}>
                    <ControlLabel>
                        Ticket Type
                    </ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl componentClass="select" name="ticket" onChange={updateHandler}>
                        <option value="option">Option</option>
                    </FormControl>
                </Col>

                <Col md={2}>
                    <ControlLabel>Volunteer</ControlLabel>
                </Col>
                <Col md={4}>
                    <Checkbox inline name="bookRoom" onChange={updateHandler}>
                        Bookroom
                    </Checkbox>
                    <Checkbox inline name="volunteer" onChange={updateHandler}>
                        Where needed
                    </Checkbox>
                </Col>

            </FormGroup>

            <FormGroup>
                <Col md={3}>
                    <ControlLabel>Roommate Request</ControlLabel>
                </Col>
                <Col md={9}>
                    <FormControl type="text" placeholder="Enter request details here..." name="roomMateRequest" onChange={updateHandler}/>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col md={3}>
                    <ControlLabel>Special Needs</ControlLabel>
                </Col>
                <Col md={9}>
                    <FormControl type="text" placeholder="Enter any special need details here..." name="specialNeeds" onChange={updateHandler}/>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col md={2}>
                    <ControlLabel>Seminar 1</ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl componentClass="select" name="seminar1" onChange={updateHandler}>
                        <option value="option">Option</option>
                    </FormControl>
                </Col>

                <Col md={2}>
                    <ControlLabel>Seminar 2</ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl componentClass="select" name="seminar2" onChange={updateHandler}>
                        <option value="option">Option</option>
                    </FormControl>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col md={2}>
                    <ControlLabel>Seminar 3</ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl componentClass="select" name="seminar3" onChange={updateHandler}>
                        <option value="option">Option</option>
                    </FormControl>
                </Col>

                <Col md={2}>
                    <ControlLabel>Seminar 4</ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl componentClass="select" name="seminar4" onChange={updateHandler}>>
                        <option value="option">Option</option>
                    </FormControl>
                </Col>
            </FormGroup>

            <Row>
                <Col md={4}>
                    <Button bsStyle="danger" onClick={this.props.remove}>
                        Remove Attendee
                    </Button>
                </Col>
            </Row>

        </Well>;
    }
}

export default Attendee;
