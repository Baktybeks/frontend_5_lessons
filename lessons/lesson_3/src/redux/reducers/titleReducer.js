import {types} from "../types";

const initialState = {
    title: "Old title"
}

export default function titleReducer (state = initialState, action) {
    switch (action.type){
        case types.CHANGE_TITLE:
            return {...state, title: "New title"}
        case types.WITH_PARAMS:
            return {...state,title: action.payload}
        default: return state
    }


    // if (action.type === types.CHANGE_TITLE) {
    //     return {...state, title: "new_title"}
    // }
    // return state
}
