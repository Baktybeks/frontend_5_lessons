import {types} from "../types";


const initialState = {
    title: "HI"
}

export default function titleReducer(state= initialState,action) {
    switch (action.type) {
        case types.CHANGE_TITLE:
            return {...state, title: "hello"}
        default: return state
    }
}