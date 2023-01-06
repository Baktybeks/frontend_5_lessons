import React from 'react';
import {changeInputName, addUser} from "../../store/usersSlice";
import {useDispatch, useSelector} from "react-redux";

function UsersPage(props) {
    const dispatch = useDispatch()

    const {inputValue, users} = useSelector(state => state.usersReducer)

    const addUserFunc = () => {
        dispatch(addUser(inputValue))
    }

    return (
        <div>
            <input
                value={inputValue}
                type="text"
                placeholder="name"
                onChange={(e) => dispatch(changeInputName(e.target.value))}/>
            <button onClick={addUserFunc}>add</button>

            <ul>
                {users.map(user => <li>{user}</li>)}
            </ul>
        </div>
    );
}

export default UsersPage;