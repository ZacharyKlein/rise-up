import React, {Component} from 'react';
import {Button, Well, Row, Col, Checkbox, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import './css/App.css';

class Attendee extends Component {

    render() {
        // const {attendee} = this.props;

        return <Well>
            <Row>
                <Col md={2}>
                    <h4>Attendee {this.props.attendee.id}</h4>
                </Col>
            </Row>
            <hr/>
            <FormGroup>
                <Col md={2}>
                    <ControlLabel>First Name</ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl type="text" placeholder="First Name"/>
                </Col>

                <Col md={2}>
                    <ControlLabel>Last Name</ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl type="text" placeholder="Last Name"/>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col md={3}>
                    <ControlLabel>Age (for children)</ControlLabel>
                </Col>
                <Col md={3}>
                    <FormControl type="text" placeholder="Age"/>
                </Col>

                <Col md={2}>
                    <ControlLabel>Gender</ControlLabel>
                </Col>
                <Col md={2}>
                    <FormControl componentClass="select">
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
                    <FormControl type='text' placeholder="Phone"/>
                </Col>

                <Col md={2}>
                    <ControlLabel>Email</ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl type='text' placeholder="Email address"/>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col md={2}>
                    <ControlLabel>
                        Ticket Type
                    </ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl componentClass="select">
                        <option value="option">Option</option>
                    </FormControl>
                </Col>

                <Col md={2}>
                    <ControlLabel>Volunteer</ControlLabel>
                </Col>
                <Col md={4}>
                    <Checkbox inline>
                        Bookroom
                    </Checkbox>
                    <Checkbox inline>
                        Where needed
                    </Checkbox>
                </Col>

            </FormGroup>

            <FormGroup>
                <Col md={3}>
                    <ControlLabel>Roommate Request</ControlLabel>
                </Col>
                <Col md={9}>
                    <FormControl type="text" placeholder="Enter request details here..."/>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col md={3}>
                    <ControlLabel>Special Needs</ControlLabel>
                </Col>
                <Col md={9}>
                    <FormControl type="text" placeholder="Enter any special need details here..."/>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col md={2}>
                    <ControlLabel>Seminar 1</ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl componentClass="select">
                        <option value="option">Option</option>
                    </FormControl>
                </Col>

                <Col md={2}>
                    <ControlLabel>Seminar 2</ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl componentClass="select">
                        <option value="option">Option</option>
                    </FormControl>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col md={2}>
                    <ControlLabel>Seminar 3</ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl componentClass="select">
                        <option value="option">Option</option>
                    </FormControl>
                </Col>

                <Col md={2}>
                    <ControlLabel>Seminar 4</ControlLabel>
                </Col>
                <Col md={4}>
                    <FormControl componentClass="select">
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
