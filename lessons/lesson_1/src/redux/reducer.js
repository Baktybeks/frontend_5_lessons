const initialState = {
    title: 'Old title',
    aboutTitle: 'Old about title'
}


export default function reducer(state = initialState, action) {
    if (action.type === 'CHANGE_TITLE') {
        return {...state, title: "New title"}
    }
    else if (action.type === 'CHANGE_ABOUT_TITLE') {
        console.log(action)
        return {...state, aboutTitle: 'Hello world'}
    }
    else if (action.type === 'WITH_PARAMS') {
        console.log(action)
        return {...state,aboutTitle: action.payload}
    }
    else if (action.type === 'FROM_INPUT') {
        console.log(action)
        return {...state,aboutTitle: action.payload}
    }


    return state
}