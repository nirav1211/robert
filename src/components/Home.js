import React, { Component } from 'react';
import { Form, Button, Row, Col, Card, CardDeck } from 'react-bootstrap';
import MyVideo from '../assets/image/dummy.mp4';
import MyImg from '../assets/image/demo.jpeg';

export default class Home extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <div className="title">
                    <h2 className="title-heading">
                        Are You Sick & Tired Of The Yelling, Screaming & Belligerent Attitude Of Your Child?
                    </h2>
                </div>

                <div className="sub-title">
                    <h2 className="sub-title-heading">
                        Now you can discover the secrets to controlling your child and instantly restore peace and quiet in your home.
                    </h2>
                </div>
                <div className="content">
                    <CardDeck>
                        <Card>
                            <video src={MyVideo} height="220" controls className="preview-content" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                            </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button className="submit-button" variant="primary" type="submit">
                                        Submit
                                        </Button>
                                </Form>
                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" height="220" src={MyImg} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        )
    }
}
