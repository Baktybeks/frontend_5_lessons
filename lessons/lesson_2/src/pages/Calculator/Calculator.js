import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function Calculator() {

    const dispatch = useDispatch()
    const value = useSelector(state => state.value)
    const answer = useSelector(state => state.answer)

    const changeInputSecond = (event) => {
        dispatch({
            type: "VALUE_SECOND",
            payload: {...value, [event.target.name]: event.target.value}
        })
    }

    const plus = () => {
        if (value.valueOne === "") {
            alert("value1 empty")
        } else if (value.valueSecond === "") {
            alert("value2 empty")
        } else {
            dispatch({
                type: "PLUS",
                payload: value
            })
        }
    }

    return (
        <div>
            <input type="number"
                   onChange={changeInputSecond}
                   name="valueOne"
                   value={value.valueOne}
            />
            <input type="number"
                   onChange={changeInputSecond}
                   name="valueSecond"
                   value={value.valueSecond}
            />
            <button onClick={plus}>+</button>
            <h1>-------------------------------</h1>
            <h1>Answer = {answer}</h1>
        </div>
    );
}

export default Calculator;