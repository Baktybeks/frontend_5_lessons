import React, {useState} from 'react';
import {Button, Col, Container, Form, Row, Spinner, Alert} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {registerUserAction} from "../../redux/actions";

function UserRegisterPage() {

    const dispatch = useDispatch()

    const {preloader} = useSelector(state => state.preloaderReducer)

    const {message, variant} = useSelector(state => state.alertReducer)

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const formsValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const registerUser = (event) => {
        event.preventDefault()  // чтобы не перезагружался
        dispatch(registerUserAction(user))
    }

    return (
        <Container>
            <h1 className="my-5">User register</h1>

            {preloader
                ?
                <Spinner animation="grow"/>
                :
                <>
                    <Form onSubmit={registerUser}>
                        <Row>
                            <Col lg={3}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Control
                                        type="text"
                                        placeholder="name"
                                        name="name"
                                        onChange={formsValue}/>
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Control
                                        type="text"
                                        placeholder="username"
                                        name="username"
                                        onChange={formsValue}/>
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Control
                                        type="text"
                                        placeholder="email"
                                        name="email"
                                        onChange={formsValue}/>
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <Button type="submit" variant="success" className="w-100">
                                    Register user
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    {message
                        &&
                        <Alert variant={variant}>
                            {message}
                        </Alert>
                    }
                </>


            }


        </Container>
    );
}

export default UserRegisterPage;