const initialState = {
    menu: false,
    value: {valueOne: '', valueSecond: ''},
    users: [],
    answer: ""
}

export default function reducer(state = initialState, action) {
    if (action.type === "CHANGE_TITLE") {
        return {...state, title: "Hello world"}
    } else if (action.type === "HANDLE_MENU") {
        return {...state, menu: !state.menu}
    } else if (action.type === "VALUE") {
        return {...state, value: action.payload}
    }else if (action.type === "VALUE_SECOND") {
        return {...state, value: action.payload}
    } else if (action.type === "ADD_USER") {
        return {...state, users: [...state.users, action.payload], value: ""}
    } else if (action.type === "DELETE_ALL") {
        return {...state, users: [], value: ""}
    } else if (action.type === "PLUS") {
        return {...state, answer: Number(action.payload.valueOne) + Number(action.payload.valueSecond),value: {valueOne: '', valueSecond: ''}}
    }
    return state
}