import {types} from "./types";


export function preloaderOn() {
    return {
        type: types.PRELOADER_ON
    }
}

export function preloaderOff() {
    return {
        type: types.PRELOADER_OFF
    }
}

export function alertAction(info) {
    return {
        type: types.ALERT_ON,
        payload: info
    }
}

export function alertActionOff (info) {
    return {
        type: types.ALERT_OFF
    }
}


export function registerUserAction(user) {
    return async function (dispatch) {
        dispatch(preloaderOn())
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users', options)

        if (response.status === 201) {
            dispatch(preloaderOff())
            dispatch(alertAction({message: "успешно зарегестрирован", variant: "success"}))
        } else if (response.status === 404) {
            dispatch(preloaderOff())
            dispatch(alertAction({message: "ошибка", variant: "danger"}))
        }

        setTimeout(() => {
            dispatch(alertActionOff())
        },3000)
    }
}