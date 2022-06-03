import { createSlice } from '@reduxjs/toolkit'

import { getAllIndexedDbModelData } from './utility/indexdbUtili';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    userData: {},
    userSetting: {},
    offModelData: [],
    isGuest: false
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setUserSetting: (state, action) => {
      state.userSetting = action.payload;
    },
    setoffModelData: (state, action) => {
      state.offModelData = action.payload;
    },
    updateUserSettingUploadHist: (state, action) => {
      state.userSetting.uploadHist = action.payload;
    },
    setGuest: (state) =>{
      state.isGuest = true
    },
    setNotGuest: (state) =>{
      state.isGuest = false
    }
  }
})

export function setInitOffModelData(){
    return async (dispatch) => {
      let modelD = await getAllIndexedDbModelData();
      dispatch( setoffModelData(modelD) )
    }
}

export const { setUserData, setoffModelData, setUserSetting, updateUserSettingUploadHist, setGuest, setNotGuest } = counterSlice.actions
export default counterSlice.reducer
