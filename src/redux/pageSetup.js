import { createSlice } from '@reduxjs/toolkit'
import { ALL_PAGES, DEFAULT_PAGE_SCHEMA, LOCAL_STORAGE_PAGE_SCHEMA } from '../commons/constants'

export const pageSetup = createSlice({
    name: 'pageSetup',
    initialState: {
        schema: DEFAULT_PAGE_SCHEMA,
        showPageSetup: false,
    },
    reducers: {
        showPageSetup: (state, action) => {
            state.showPageSetup = true
        },
        hidePageSetup: (state) => {
            state.showPageSetup = false
        },
        restoreSchema: (state, action) => {
            console.log("restoring schema",action.payload)
            state.schema = action.payload
        },
        restoreToDefault: (state,action) => {
            state.schema = DEFAULT_PAGE_SCHEMA
            localStorage.setItem(`${LOCAL_STORAGE_PAGE_SCHEMA}_${action.payload.uid}`, JSON.stringify(state.schema))
        },
        moveUp: (state, action) => {
            const pageCodes = state.schema.map(k => k.code)
            const currentPos = pageCodes.findIndex((e) => e == action.payload.page)
            if (currentPos == 0) { return }
            const dataToInsert = state.schema[currentPos]
            state.schema.splice(currentPos, 1)
            state.schema.splice(currentPos - 1, 0, dataToInsert)
            localStorage.setItem(`${LOCAL_STORAGE_PAGE_SCHEMA}_${action.payload.uid}`, JSON.stringify(state.schema))
        },
        moveDown: (state, action) => {
            const pageCodes = state.schema.map(k => k.code)
            const currentPos = pageCodes.findIndex((e) => e == action.payload.page)
            // if (currentPos == 0) { return }
            const dataToInsert = state.schema[currentPos]
            state.schema.splice(currentPos, 1)
            state.schema.splice(currentPos + 1, 0, dataToInsert)
            localStorage.setItem(`${LOCAL_STORAGE_PAGE_SCHEMA}_${action.payload.uid}`, JSON.stringify(state.schema))
        },
        AddTableToLayout: (state, action) => {
            const pageExists = DEFAULT_PAGE_SCHEMA.findIndex((e) => e.code == action.payload.page)
            if (pageExists == -1) { return }
            const data = ALL_PAGES[action.payload.page]
            state.schema.push(data)
            localStorage.setItem(`${LOCAL_STORAGE_PAGE_SCHEMA}_${action.payload.uid}`, JSON.stringify(state.schema))
        },
        RemoveTableToLayout: (state, action) => {
            const pageCodes = state.schema.map(k => k.code)
            const currentPos = pageCodes.findIndex((e) => e == action.payload.page)
            // if (currentPos == 0) { return }
            // const dataToInsert = state.schema[currentPos]
            state.schema.splice(currentPos, 1)
            // state.schema.splice(currentPos+1,0,dataToInsert) 
            localStorage.setItem(`${LOCAL_STORAGE_PAGE_SCHEMA}_${action.payload.uid}`, JSON.stringify(state.schema))
        },

    },
})

// Action creators are generated for each case reducer function
export const { showPageSetup, moveUp, restoreSchema, restoreToDefault, moveDown, RemoveTableToLayout, AddTableToLayout, hidePageSetup } = pageSetup.actions

export default pageSetup.reducer