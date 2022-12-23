import {types} from "../types";



export const changeTitleAction = () => {

    return {
        type: types.CHANGE_TITLE
    }
}

export const withParamsAction = (title) => {
    return {
        type: types.WITH_PARAMS,
        payload: title
    }
}

export const setValueAction = (value) => {
    return {
        type: types.VALUE,
        payload: value
    }
}

export const addUserAction = (name) => {
    return {
        type: types.ADD_USER,
        payload: name
    }
}

export const deleteUserAction = () => {
    return{
        type:types.DELETE_USER,
    }
}