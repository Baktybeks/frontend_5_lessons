import React, {useEffect} from 'react';
import {Container, Row, Col, Card, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../store/usersSlice";
import {Link} from "react-router-dom";

function UsersPage() {
    const dispatch = useDispatch()
    const {users} = useSelector(state => state.usersReducer)
    const {preloader} = useSelector(state => state.preloaderReducer)
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <Container>
            <h1 className="mb-5">User list</h1>
            <Row>
                {preloader
                    ?
                    <Spinner animation="border" variant="primary"/>
                    :
                    users.slice(0, 18).map(user =>
                        <Col lg={4}>
                            <Card style={{marginBottom: '30px'}}>
                                <Card.Img variant="top" src={user.url}/>
                                <Card.Body>
                                    <Card.Title>{user.title}</Card.Title>
                                    <Link to={`/${user.id}`}>more info</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>);
}

export default UsersPage;
