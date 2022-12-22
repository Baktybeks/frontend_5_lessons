import React, {useState} from 'react';
import {useDispatch} from "react-redux";

function ChangeTitle() {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const changeTitle = () => {
        dispatch({
            type: 'CHANGE_ABOUT_TITLE'
        })
    }

    const changeTitleWithParams = () => {
        dispatch({
            type: 'WITH_PARAMS',
            payload: 'hello geektech'
        })
    }

    const changeTitleFromInput = () => {
        dispatch({
            type: "FROM_INPUT",
            payload: input
        })
    }

    return (
        <div>
            <button onClick={changeTitle}>change title</button>
            <button onClick={changeTitleWithParams}>change title with params</button>
            <h1>----------------------------------------------</h1>
            <input type='text' onChange={(event) => setInput(event.target.value)}/>
            <button onClick={changeTitleFromInput}>from input</button>
        </div>
    );
}

export default ChangeTitle;