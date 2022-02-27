import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

const rootReducer = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

export default rootReducer;
