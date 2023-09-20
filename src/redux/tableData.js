import { createSlice } from '@reduxjs/toolkit'

export const tableDataSlice = createSlice({
    name: 'tableData',
    initialState: {
        data: false,
        oidata: false,
        oivdata: false,
        voldata: false,
        time_reversal: false,
        golden_ratio: false,
        dashboard: false,
    },
    reducers: {
        setTableData: (state, action) => {
            state.data = action.payload
        },
        setTableOIData: (state, action) => {
            state.oidata = action.payload
        },
        setTableOIVData: (state, action) => {
            state.oivdata = action.payload
        },
        setTableVolData: (state, action) => {
            state.voldata = action.payload
        },
        setTableTimeReversal: (state, action) => {
            state.time_reversal = action.payload
        },
        setTableGoldenRatio: (state, action) => {
            state.golden_ratio = action.payload
        },
        setDashboardData: (state, action) => {
            state.dashboard = action.payload
        },
        cleanUpData: (state) => {
            state.data = false
            state.oidata = false
            state.oivdata = false
            state.voldata = false
            state.time_reversal = false
            state.golden_ratio = false
            state.dashboard = false
        }

    },
})

// Action creators are generated for each case reducer function
export const { setTableData, setDashboardData, cleanUpData, setTableGoldenRatio, setTableTimeReversal, setTableOIData, setTableOIVData, setTableVolData } = tableDataSlice.actions

export default tableDataSlice.reducer