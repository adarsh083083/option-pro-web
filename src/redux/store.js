import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './admin'
import loginSlice  from './login'
import optionSlice  from './options'
import themeSlice from './theme'
import table from './tableData'
import pageSetup from './pageSetup'

export default configureStore({
  reducer: {
    login:loginSlice,
    options:optionSlice,
    admin:adminSlice,
    theme:themeSlice,
    table:table,
    pageSetup:pageSetup
  },
})