import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/counterSlice'
import languageReducer from './redux/languageSlice'
import predictHistoryReducer from './redux/predictHistorySlice'

const rootReducer = configureStore({
    reducer: {
        counter: counterReducer,
        languageSet: languageReducer,
        predictHistory: predictHistoryReducer
    }
})

export default rootReducer;
