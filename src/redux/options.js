import { createSlice } from '@reduxjs/toolkit'
import { BANKNIFTY_SYMBOL_COMBINED, BANKNIFTY_SYMBOL_MONTHLY, BANKNIFTY_SYMBOL_WEEKLY, COMBINED_EXPIRTY, MONTHLY_EXPIRTY, NIFTY_SYMBOL_COMBINED, NIFTY_SYMBOL_MONTHLY, NIFTY_SYMBOL_WEEKLY, WEEKLY_EXPIRTY } from '../commons/constants'

export const optionSlice = createSlice({
    name: 'option',
    initialState: {
            symbols : null,
            currentSymbol : "DASHBOARD",
            currentView : false,
            currentInterval:5,
            lastUpdated:null,
            symbolExpiry:WEEKLY_EXPIRTY
    },
    reducers: {
        setWeeklyExpiry: (state) => {
            state.symbolExpiry = WEEKLY_EXPIRTY
            if (state.currentSymbol == NIFTY_SYMBOL_MONTHLY || state.currentSymbol == NIFTY_SYMBOL_COMBINED ){
                state.currentSymbol = NIFTY_SYMBOL_WEEKLY
            }
            else if (state.currentSymbol == BANKNIFTY_SYMBOL_MONTHLY || state.currentSymbol == BANKNIFTY_SYMBOL_COMBINED ){
                state.currentSymbol = BANKNIFTY_SYMBOL_WEEKLY
            }
        },
        setMonthlyExpiry: (state) => {
            state.symbolExpiry = MONTHLY_EXPIRTY
            if (state.currentSymbol == NIFTY_SYMBOL_WEEKLY || state.currentSymbol == NIFTY_SYMBOL_COMBINED){
                state.currentSymbol = NIFTY_SYMBOL_MONTHLY
            }
            else if (state.currentSymbol == BANKNIFTY_SYMBOL_WEEKLY || state.currentSymbol == BANKNIFTY_SYMBOL_COMBINED){
                state.currentSymbol = BANKNIFTY_SYMBOL_MONTHLY
            }
        },
        setCombinedExpiry: (state) => {
            state.symbolExpiry = COMBINED_EXPIRTY
            if (state.currentSymbol == NIFTY_SYMBOL_WEEKLY || state.currentSymbol == NIFTY_SYMBOL_MONTHLY){
                state.currentSymbol = NIFTY_SYMBOL_COMBINED
            }
            else if (state.currentSymbol == BANKNIFTY_SYMBOL_WEEKLY || state.currentSymbol == BANKNIFTY_SYMBOL_MONTHLY){
                state.currentSymbol = BANKNIFTY_SYMBOL_COMBINED
            }
        },
        setOptionSymbols: (state,action) => {
            state.symbols = action.payload
        },
        setOptionCurrentSymbol:(state,action)=> {
            state.currentSymbol = action.payload
            state.symbolExpiry=WEEKLY_EXPIRTY
            state.symbols = state.symbols
        },
        setDataView:(state,action)=> {
            state.currentView = action.payload
        },
        setDashboard:(state)=> {
            state.currentView = false
            state.currentSymbol = "DASHBOARD"
        },
        setTimeInterval5:(state)=> {
            state.currentInterval = 5
        },
        setTimeInterval15:(state)=> {
            state.currentInterval = 15
        },
        setLastUpdated:(state,action)=>{
            state.lastUpdated=action.payload
        }
        // logout: (state) => {
        //     state.isLoggedIn = null
        //     state.user_name = null
        //     state.user_token = null
        //     state.user_email = null
        //     state.user_phone = null
        //     state.uid = null
        //     state.isAdmin = null
        //     return state
        // },
        
    },
})

// Action creators are generated for each case reducer function
export const { setOptionSymbols, setWeeklyExpiry,setMonthlyExpiry,setCombinedExpiry, setOptionCurrentSymbol,setDataView,setDashboard,setTimeInterval5,setTimeInterval15,setLastUpdated } = optionSlice.actions

export default optionSlice.reducer