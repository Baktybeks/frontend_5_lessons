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