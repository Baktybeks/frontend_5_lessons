import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserInfo} from "../../store/usersSlice";

function User() {
    const dispatch = useDispatch()
    const {id} = useParams()
    const {user} = useSelector(state => state.usersReducer)
    const navigate = useNavigate()
    const goToBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        if(id){
            dispatch(getUserInfo(id))
        }
    },[])

    return (
        <Container>
            <button onClick={goToBack}>back</button>
            <h2>Username: {user.title} </h2>
            <img src={user.url} alt={user.title} />
        </Container>
    );
}

export default User;