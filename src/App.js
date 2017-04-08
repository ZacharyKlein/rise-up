import React, {Component} from 'react';
import {Grid, Row, Col, Table} from 'react-bootstrap';
import hotel1 from './img/hotel-1.png';
import hotel2 from './img/hotel-2.png';
import bramsen from './img/bramsen.png';
import gamble from './img/gamble.png';
import keyser from './img/keyser.png';
import './css/App.css';

class App extends Component {
    render() {
        return (
            <Grid>
                <header>
                    <Grid>
                    <Row>
                        <h1 style={{fontFamily: "'Dancing Script', cursive", fontSize: '80px', fontWeight: 'normal' }}>Believers Bible </h1>
                        <h1 style={{fontFamily: "'Palanquin Dark', sans-serif", marginTop: 0, fontSize: '80px' }}>Conference 2017</h1>
                    </Row>

                    <Row className="marquee">
                        <Col md={6}>
                            <h1 style={{fontFamily: "'Palanquin Dark', sans-serif", color: '#3E6287', fontWeight: 'normal'}}>THE <span className="glory">Glory</span></h1>
                            <span className="cross-tagline">OF THE <span className="cross">CROSS</span></span>
                        </Col>
                    </Row>

                    <Grid>
                        <Row>
                            <Col md={6}>

                                <h4>December 27th to December 30th</h4>
                                <p><strong>Check-in Starts</strong>: Wed., Dec.27th, 2017 at 2:00pm<br/>
                                    <strong>First General Session</strong>: Wed., Dec. 27th, 2017 at 7:30pm<br/>
                                    <strong>Conference Closing</strong>: Sat., Dec. 30th, 2017 at 11:00am<br/>
                                    16 seminars that deal with the practical issues of our day.<br/>
                                    2 seminars exclusively for women.<br/>
                                    3 seminars exclusively for young people.</p>

                            </Col>

                        </Row>

                        <Row>
                            <Col md={5}>

                                <h4>Location</h4>
                                <p><strong>Embassy Suites & Convention Center</strong><br/>
                                    1200 Conference Center Blvd. Murfreesboro, TN, 37129 USA<br/>
                                    30 mins. from central Nashville, TN</p>

                            </Col>

                        </Row>
                        <Row>

                            <Col md={5}>

                                <h4>General Session Speakers</h4>

                                <Row>
                                    <Col xs={6}>
                                        Alan Gamble<br/>
                                        Nate Bramsen<br/>
                                        Keith Keyser<br/>
                                    </Col>
                                    <Col xs={6}>
                                        Glasgow, Scotland<br/>
                                        North Africa<br/>
                                        Birdsboro, PA<br/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row>
                            <Col md={6}>
                                <h4>Hotel Accommodations</h4>
                                <p>All deluxe rooms are 2 room suites. Upgraded ballrooms, break-out rooms, and board
                                    rooms;
                                    large open (10 storey) atrium; indoor pool and spa, fitness room; casual dining and
                                    coffee
                                    shop
                                    in the atrium.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={10}>
                                <h4>Children’s Program (ages 5-12)</h4>
                                <p>Children can enjoy the program and their own menu planned just for them!</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={10}>
                                <h4>Teens</h4>
                                <p>Come for a time of fun and fellowship with a message just for you!<br/>
                                    Feel free to bring board games, song books, guitars, etc., for this time!</p>
                                <br/>
                                <br/>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <img src={hotel1} style={{maxWidth: '100%'}}/>
                            </Col>
                            <Col md={6}>
                                <img src={hotel2} style={{maxWidth: '90%'}}/>
                            </Col>

                        </Row>
                    </Grid>
                    </Grid>
                </header>


                <Row>
                    <h2>GENERAL SESSION SPEAKERS</h2>
                    <hr/>
                    <Row className="speakers">
                        <Col md={4}><p>
                            <img src={gamble} alt="Alan Gamble"/>
                            <h4>Alan Gamble</h4>

                            lives in Glasgow, Scotland. He is active in Bible teaching in the United Kingdom and
                                North America. Alan spoke at the Rise Up conferences in 2007 and 2009. He has been
                                involved with Interlink, the Scottish missionary support group for many years Alan
                                has contributed to various assembly publications. He is married to Elizabeth. They have
                                3 adult children and 3 grand children. Alan‘s professional background is in law. He
                                currently serves part time as an administrative law judge.</p>
                        </Col>
                        <Col md={4}><p>
                            <img src={bramsen} alt="Nate Bramsen" />
                            <h4>Nate Bramesen</h4>
                                serves in Niger, Africa. His passion is to know Christ, and to make Him known among
                                unreached people’s (through ministry to kids), and to see today’s youth become
                                unconditional followers of Jesus Christ. His time is invested in international
                                ministry (church planting/youth ministry), along with itinerant speaking, weekly podcasts
                                (<a href="http://www.theunalteredword.org">www.theunalteredword.org</a>), and with ministries through ROCK International
                                (<a href="http://www.rockintl.org">www.rockintl.org</a>).</p>
                        </Col>
                        <Col md={4}><p>
                            <img src={keyser} alt="Keith Keyser"/>
                            <h4>Keith Keyser</h4>
                                was born in Pennsylvania to Christian parents. He converted at age seven through a
                                knowledge of his sinfulness and Christ’s sufficiency to save. Keith left secular
                                employment to give his time to the Lord’s service in 1999. He is mainly engaged in an
                                itinerant Bible teaching and gospel preaching ministry throughout North America, Western
                                Europe, and Asia. He also writes various articles for Christian publications and websites.
                                Married to Naomi since 2006, they have three daughters and a son.
                            </p>
                        </Col>
                    </Row>

                </Row>
                <Row>
                    <h2>SEMINARS</h2>
                    <Row>

                        <Col md={6}>

                            <Table>
                                <tbody>
                                <tr>
                                    <td>Victory in Jesus</td>
                                    <td>Mike Attwood</td>
                                </tr>
                                <tr>
                                    <td>The Cross and Missions</td>
                                    <td>Bob Dadd (CMML)</td>
                                </tr>
                                <tr>
                                    <td>Praying in the Holy Spirit</td>
                                    <td>Scott DeGroff</td>
                                </tr>
                                <tr>
                                    <td>Preaching the Cross</td>
                                    <td>Grady Dollar</td>
                                </tr>
                                <tr>
                                    <td>Outside the Camp</td>
                                    <td>David Dunlap</td>
                                </tr>
                                <tr>
                                    <td>Prophecies of Christ’s Sufferings</td>
                                    <td>Alan Gamble</td>
                                </tr>
                                <tr>
                                    <td>Types and Shadows of the Cross</td>
                                    <td>Keith Keyser</td>
                                </tr>
                                <tr>
                                    <td>The Christ of the Cross</td>
                                    <td>Keith Keyser</td>
                                </tr>
                                <tr>
                                    <td>Exalting the Lamb in Worship</td>
                                    <td>Mark Kolchin</td>
                                </tr>
                                </tbody>
                            </Table>

                        </Col>
                        <Col md={6}>

                            <Table>
                                <tbody>
                                <tr>
                                    <td>The Exceeding Sinfulness of Sin</td>
                                    <td>Steve Price</td>
                                </tr>
                                <tr>
                                    <td>Gospel Zeal</td>
                                    <td>Chris Schoeder</td>
                                </tr>
                                <tr>
                                    <td>Sacrificial Stewardship</td>
                                    <td>Mike Stoudt</td>
                                </tr>
                                <tr>
                                    <td>The Cross and Consecration</td>
                                    <td>Rex Trogdon</td>
                                </tr>
                                <tr>
                                    <td>The Hymnology of the Cross</td>
                                    <td>Rex Trogdon</td>
                                </tr>
                                <tr>
                                    <td colspan={2}><strong>Women Only:</strong></td>

                                </tr>
                                <tr>
                                    <td>Women Living Out History</td>
                                    <td>Vickie Gaynier</td>
                                </tr>
                                <tr>
                                    <td>Women at the Cross and at the Tomb</td>
                                    <td>Nadia Mikhael</td>
                                </tr>
                                </tbody>
                            </Table>

                        </Col>
                    </Row>

                </Row>
                <Row>
                    <h2>CONFERENCE SCHEDULE</h2>
                    <Table bordered>
                        <thead>
                        <tr>
                            <th className="col-md-1">Times</th>
                            <th>Wed, Dec 27</th>
                            <th>Thur, Dec 28</th>
                            <th>Fri, Dec 29</th>
                            <th>Sat, Dec 30</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>ABC</td>
                            <td>DEF</td>
                            <td>GHI</td>
                            <td>JKL</td>
                            <td>MNO</td>
                        </tr>
                        <tr>
                            <td>ABC</td>
                            <td>DEF</td>
                            <td>GHI</td>
                            <td>JKL</td>
                            <td>MNO</td>
                        </tr>
                        <tr>
                            <td>ABC</td>
                            <td>DEF</td>
                            <td>GHI</td>
                            <td>JKL</td>
                            <td>MNO</td>
                        </tr>
                        <tr>
                            <td>ABC</td>
                            <td>DEF</td>
                            <td>GHI</td>
                            <td>JKL</td>
                            <td>MNO</td>
                        </tr>
                        <tr>
                            <td>ABC</td>
                            <td>DEF</td>
                            <td>GHI</td>
                            <td>JKL</td>
                            <td>MNO</td>
                        </tr>
                        <tr>
                            <td>ABC</td>
                            <td>DEF</td>
                            <td>GHI</td>
                            <td>JKL</td>
                            <td>MNO</td>
                        </tr>
                        <tr>
                            <td>ABC</td>
                            <td>DEF</td>
                            <td>GHI</td>
                            <td>JKL</td>
                            <td>MNO</td>
                        </tr>
                        <tr>
                            <td>ABC</td>
                            <td>DEF</td>
                            <td>GHI</td>
                            <td>JKL</td>
                            <td>MNO</td>
                        </tr>
                        <tr>
                            <td>ABC</td>
                            <td>DEF</td>
                            <td>GHI</td>
                            <td>JKL</td>
                            <td>MNO</td>
                        </tr>
                        <tr>
                            <td>ABC</td>
                            <td>DEF</td>
                            <td>GHI</td>
                            <td>JKL</td>
                            <td>MNO</td>
                        </tr>
                        <tr>
                            <td>ABC</td>
                            <td>DEF</td>
                            <td>GHI</td>
                            <td>JKL</td>
                            <td>MNO</td>
                        </tr>
                        <tr>
                            <td>ABC</td>
                            <td>DEF</td>
                            <td>GHI</td>
                            <td>JKL</td>
                            <td>MNO</td>
                        </tr>
                        <tr>
                            <td>ABC</td>
                            <td>DEF</td>
                            <td>GHI</td>
                            <td>JKL</td>
                            <td>MNO</td>
                        </tr>
                        <tr>
                            <td>ABC</td>
                            <td>DEF</td>
                            <td>GHI</td>
                            <td>JKL</td>
                            <td>MNO</td>
                        </tr>
                        </tbody>
                    </Table>
                </Row>


            </Grid>
        );
    }
}

export default App;
