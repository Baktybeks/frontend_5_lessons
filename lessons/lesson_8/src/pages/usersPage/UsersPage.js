import React, {useEffect} from 'react';
import {Container, Row, Col, Button, Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../store/usersSlice";

function UsersPage() {
    const dispatch = useDispatch()
    const {users, error} = useSelector(state => state.usersReducer)

    useEffect(() => {
        dispatch(getUsers())
    }, [])


    return (
        <Container>
            <h1>User list</h1>
            <Row>
                {
                        users.slice(0, 18).map(user =>
                        <Col lg={4}>
                        <Card style={{marginBottom: '30px'}}>
                            <Card.Img variant="top" src={user.url}/>
                            <Card.Body>
                                <Card.Title>{user.title}</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                }

            </Row>


        </Container>
    );
}

export default UsersPage;