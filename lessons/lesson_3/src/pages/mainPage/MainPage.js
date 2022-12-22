import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {changeTitleAction, withParamsAction} from "../../redux/actions/actions";

function MainPage(props) {
    const dispatch = useDispatch()
    const title = useSelector(state => state.titleReducer.title)

    const changeTitle = () => {
        dispatch(changeTitleAction())

    }
    const changeTitleWithParams = () => {
        dispatch(withParamsAction("Hello geekTech"))

    }


    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change text</button>
            <button onClick={changeTitleWithParams}>change with params</button>
        </div>
    );
}

export default MainPage;