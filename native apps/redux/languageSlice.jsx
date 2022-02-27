import { createSlice } from '@reduxjs/toolkit'

const languageSlice = createSlice({
  name: 'languageSet',
  initialState: {
    currentLanguage: "en",
  },
  reducers: {
    setLanguage: (state, action) => {
      if(action.payload != "en" && action.payload != "hk"){
        return
      }
      state.currentLanguage = action.payload;
    },
    toggleLanguage: (state) => {
      state.currentLanguage = state.currentLanguage === "en" ? "hk" : "en";
    },
  }
})

export const { setLanguage, toggleLanguage } = languageSlice.actions
export default languageSlice.reducer
