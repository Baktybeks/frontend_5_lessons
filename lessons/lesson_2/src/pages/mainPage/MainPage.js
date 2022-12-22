import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function MainPage() {
    const dispatch = useDispatch()
    const title = useSelector(state => state.title)

    const changeTitle = () => {
        dispatch({
            type: "CHANGE_TITLE"
        })

    }
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change title</button>
        </div>
    );
}

export default MainPage;