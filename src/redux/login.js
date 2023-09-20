import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
            isLoggedIn : false,
            // user_name : null,
            user_token : null,
            user_email : null,
            // user_phone : null,
            uid : null,
            isAdmin : null,
    },
    reducers: {
        login: (state,action) => {
            console.log(state,action)
            state.isLoggedIn = true
            localStorage.setItem('token',action.payload.jwt)
            localStorage.setItem('user_email',action.payload.username)
            localStorage.setItem('uid',action.payload.id)
            localStorage.setItem('a',action.payload.isAdmin ? 831:821)
            // state.user_name = action.payload.name
            state.user_token = action.payload.jwt
            state.user_email = action.payload.username
            // state.user_phone = action.payload.phone
            state.uid = action.payload.id
            state.isAdmin = action.payload.isAdmin
            // return state
        },
        logout: (state) => {
            localStorage.clear('token')
            localStorage.clear('user_email')
            localStorage.clear('uid')
            localStorage.clear('a')
            state.isLoggedIn = null
            // state.user_name = null
            state.user_token = null
            state.user_email = null
            // state.user_phone = null
            state.uid = null
            state.isAdmin = null
            return state
        },
        
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions

export default loginSlice.reducer