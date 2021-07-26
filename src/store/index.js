import { configureStore } from '@reduxjs/toolkit'
import posterIdSlice from './posterId'

export default configureStore({
  reducer: {
    posterId: posterIdSlice,
  },
})