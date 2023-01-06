import {createSlice} from "@reduxjs/toolkit";






const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        users: [],
        inputValue: ""
    },
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
            state.inputValue = ""
        },
        changeInputName: (state, action) => {
            state.inputValue = action.payload
        }
    }
})

export const {addUser, changeInputName} = usersSlice.actions

export default usersSlice.reducer