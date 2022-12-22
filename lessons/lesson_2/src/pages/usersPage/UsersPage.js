import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import UsersList from "../../components/usersList/UsersList";


function UsersPage() {

    const dispatch = useDispatch()

    const value = useSelector(state => state.value)

    const changeInput = (event) => {
        dispatch({
            type: "VALUE",
            payload: event.target.value
        })
    }

    const addUser = () => {
        dispatch({
            type: "ADD_USER",
            payload: value,
            input: ""
        })
    }

    const deleteAll = () => {
        dispatch({
            type: "DELETE_ALL"
        })
    }

    return (
        <div>
            <input
                type="text"
                placeholder="name"
                onChange={changeInput}
                value={value.valueOne}/>
            <button onClick={addUser}>add</button>
            <button onClick={deleteAll}>delete all</button>
            <UsersList/>
        </div>
    );
}

export default UsersPage;