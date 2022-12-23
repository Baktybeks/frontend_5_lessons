import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUserAction, deleteUserAction, setValueAction} from "../../redux/actions/actions";
import User from "../../components/user/User";
function UsersPage() {
    const dispatch = useDispatch()

    const {value,users} = useSelector(state => state.usersReducer)

    console.log(value)
    const changeInput = (event) => {
        dispatch(setValueAction(event.target.value))
    }

    const addUser = () => {
        dispatch(addUserAction(value))
    }

    const deleteUser = () => {
        dispatch(deleteUserAction())
    }


    return (
        <div>
            {/*<h1>{value}</h1>*/}
            <input type="text"
                   placeholder="name"
                   onChange={changeInput}
                   value={value}/>
            <button onClick={addUser}>add</button>
            <button onClick={deleteUser}>delete all</button>

            {users.map((user,index)=> <User key={index} userName={user}/>)}
        </div>
    );
}

export default UsersPage;