import React from 'react';
import {useDispatch} from "react-redux";
import {fetchUserOneAction} from "../redux/actions/actions";


function User({userInfo}) {

    const dispatch = useDispatch()

    const test = (event) => {
        dispatch(fetchUserOneAction(event.target.value))
        console.log(event.target.value)
    }

    return (
        <ul>
            <li>{userInfo.name}</li>
            <li>{userInfo.email}</li>
            <li>
                <button onClick={test}
                        value={userInfo.id}>show info
                </button>
            </li>

        </ul>
    );
}

export default User;