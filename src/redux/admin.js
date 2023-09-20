import { createSlice } from '@reduxjs/toolkit'
import { CONFIG_MANAGEMENT_PAGE } from '../commons/constants'

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
            currentPage : CONFIG_MANAGEMENT_PAGE,
    },
    reducers: {
        setCurrentAdminPage: (state,action) => {
            state.currentPage = action.payload
        },
        
    },
})

// Action creators are generated for each case reducer function
export const { setCurrentAdminPage } = adminSlice.actions

export default adminSlice.reducer