import { createSlice } from '@reduxjs/toolkit'


export const themeSlice = createSlice({
    name: 'themes',
    initialState: {
        darkTheme: false,
       
      },
      reducers: {
        toggleTheme: (state) => {
          state.darkTheme = !state.darkTheme;
        },
      },
})

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer



// import { createSlice } from '@reduxjs/toolkit'


// export const themeSlice = createSlice({
//     name: 'theme',
//     initialState: {
//             currentTheme : 'dark',
//             accentColor: "#33C2FF"
//     },
//     reducers: {
//         setTheme: (state,action) => {
//             state.currentTheme = action.payload.mode
//             state.accentColor = action.payload.secondary
//         },
        
//     },
// })

// // Action creators are generated for each case reducer function
// export const { setTheme } = themeSlice.actions

// export default themeSlice.reducer