import {createSlice} from "@reduxjs/toolkit";


const titleSlice = createSlice({
    name: "titleSlice",
    initialState: {
        title: "Old title",
        inputValue: ""
    },
    reducers: {
        changeTitle: (state) => {
            // console.log(action)
            state.title = "New title"
        },
        changeTitleParams: (state, action) => {
            // console.log(action)
            state.title = action.payload
        },
        changeInput: (state, action) => {
            state.inputValue = action.payload
        },
        clearInput: (state ) => {
            state.inputValue = ""
        },
        addTitle: (state, action) => {
            state.inputValue = ""
            state.title = action.payload
        },
        deleteTitle: (state) => {
            state.inputValue = ""
            state.title = ""
        }
    }
})

export const {changeTitle, changeTitleParams,changeInput,clearInput,addTitle,deleteTitle} = titleSlice.actions

export default titleSlice.reducer