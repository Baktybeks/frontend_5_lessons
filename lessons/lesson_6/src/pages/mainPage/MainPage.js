import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {changeTitle, changeTitleParams,changeInput,clearInput,addTitle,deleteTitle} from "../../store/titleSlice";

function MainPage() {

    const dispatch = useDispatch()

    const {title, inputValue} = useSelector(state => state.titleReducer)

    return (
        <div>
            <h1>{title}</h1>
            <input
                type="text"
                onChange={(e) => dispatch(changeInput(e.target.value))}
                value={inputValue}
            />
            <button onClick={() => dispatch(clearInput())}>clear</button>
            <button onClick={() => dispatch(addTitle(inputValue))}>add title</button>
            <button onClick={() => dispatch(deleteTitle())}>delete title</button>
            {/*<button onClick={() => dispatch(changeTitle())}>change title</button>*/}
            {/*<button onClick={() => dispatch(changeTitleParams("hello geekTech"))}>with params</button>*/}
        </div>
    );
}

export default MainPage;