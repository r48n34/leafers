import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { modelDataInterface } from './interface/data/modelDataInterface';
import { getAllIndexedDbModelData } from './utility/indexdbUtili';

interface UserDataInterface {
  uid: string,
  displayName: string,
  email: string,
  photoURL: string,
  creationTime: string | Date,
  lastSignInTime: string | Date
}

interface UserSetting {
  uploadHist: any
}

export interface CounterInitialState {
  userData: UserDataInterface;
  userSetting: UserSetting;
  offModelData: modelDataInterface[];
  isGuest: boolean;
}

const initialState:CounterInitialState =  {
  userData: {} as any,
  userSetting: {} as any,
  offModelData: [],
  isGuest: false
}


const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUserData: (state:CounterInitialState, action:PayloadAction<any>) => {
      state.userData = action.payload;
    },
    setUserSetting: (state:CounterInitialState, action:PayloadAction<any>) => {
      state.userSetting = action.payload;
    },
    setoffModelData: (state:CounterInitialState, action:PayloadAction<any[]>) => {
      state.offModelData = action.payload;
    },
    updateUserSettingUploadHist: (state:CounterInitialState, action:PayloadAction<any[]>) => {
      state.userSetting.uploadHist = action.payload;
    },
    setGuestBool: (state:CounterInitialState, action:PayloadAction<boolean>) =>{
      state.isGuest = action.payload;
    }
  }
})

export function setInitOffModelData(){
    return async (dispatch:any) => {
      let modelD = await getAllIndexedDbModelData();
      dispatch( setoffModelData(modelD) )
    }
}

export const { setUserData, setoffModelData, setUserSetting, updateUserSettingUploadHist, setGuestBool } = counterSlice.actions
export default counterSlice.reducer
