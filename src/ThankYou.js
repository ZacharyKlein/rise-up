import React from 'react';
import {Grid, Row, Button} from 'react-bootstrap';

const ThankYou = ({back}) => {
    return <Grid>
        <Row>
            <Button onClick={back}>Back</Button>
            <h1 style={{textAlign: 'center'}}>Thank You!</h1>
            <p>Thank you for registering.  You should receive a confirmation email shortly.  If you don't, please contact us at <a href="mailto:registration@bibleconferences.org">registration@bibleconferences.org</a></p>
            <p>If you chose to pay by credit card, you will be receiving an electronic invoice from PayPal.  Please pay that at your earliest convenience.</p>
            <p>Thank you again, and we look forward to seeing you in December!</p>
        </Row>
        <hr />
    </Grid>;
};

export default ThankYou