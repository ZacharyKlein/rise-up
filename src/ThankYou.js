import React from 'react';
import {Grid, Row, Button} from 'react-bootstrap';

const ThankYou = ({back}) => {
    return <Grid>
        <Row>
            <Button onClick={back}>Back</Button>
            <h1 style={{textAlign: 'center'}}>Thank You!</h1>
        </Row>
        <hr />
    </Grid>;
};

export default ThankYou