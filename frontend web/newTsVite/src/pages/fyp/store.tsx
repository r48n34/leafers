import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

const rootReducer = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

export type RootState = ReturnType<typeof rootReducer.getState>
export type AppDispatch = typeof rootReducer.dispatch

export default rootReducer;
