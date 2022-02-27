import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: require("../datafile/data.json")[0],
    serverModeDux: null,
    onlineModeDux: null
  },
  reducers: {
    setHistory: (state, action) => {
      state.value = action.payload;
    }
  }
})
export const { setHistory } = counterSlice.actions
export default counterSlice.reducer
