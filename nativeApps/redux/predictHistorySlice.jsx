import { createSlice } from '@reduxjs/toolkit'
import { addToHistory, clearToHistory } from '../utilityFunction/historyUtility';

const predictHistorySlice = createSlice({
  name: 'predictHistory',
  initialState: {
    historyArr: [],
  },
  reducers: {
    pushHistoryArr: (state, action) => {
      state.historyArr.push(action.payload);
      addToHistory(action.payload)
    },
    setHistoryArr: (state, action) => {
      state.historyArr = action.payload;
    },
    clearHistoryArr: (state) => {

      if(state.historyArr.length === 0){
        return
      }
      
      state.historyArr = [];
      clearToHistory();
    },
  },
})

export const { pushHistoryArr, setHistoryArr, clearHistoryArr } = predictHistorySlice.actions
export default predictHistorySlice.reducer
