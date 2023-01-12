import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk(
    'getUsers',
    async function (info, {dispatch, rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos')

            if (response.status === 200) {
                const data = response.json()
                return data
            } else {
                throw Error(`error: ${response.status}`)
            }
        } catch (e) {
            return rejectWithValue(e.message)
        } finally {

        }
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        error: ''
    },
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})

export default usersSlice.reducer