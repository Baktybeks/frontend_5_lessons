import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncFunctionAction} from "../../redux/actions/actions";

function AboutPage() {
    const dispatch = useDispatch()

    const {title} =  useSelector(state => state.titleReducer)

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => dispatch(asyncFunctionAction())}>async</button>
        </div>
    );
}

export default AboutPage;