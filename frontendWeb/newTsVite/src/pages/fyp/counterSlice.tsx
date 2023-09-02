import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModelDataInterface, UserDataInterface, UserSettingInterface } from './interface/data/modelDataInterface';
import { getAllIndexedDbModelData } from './utility/indexdbUtili';
import { AppDispatch } from './store';

export interface CounterInitialState {
    userData: UserDataInterface;
    userSetting: UserSettingInterface;
    offModelData: ModelDataInterface[];
    isGuest: boolean;
}

const initialState: CounterInitialState = {
    userData: {} as any,
    userSetting: { uploadHist: false },
    offModelData: [],
    isGuest: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setUserData: (state: CounterInitialState, action: PayloadAction<UserDataInterface>) => {
            state.userData = action.payload;
        },
        setUserSetting: (state: CounterInitialState, action: PayloadAction<UserSettingInterface>) => {
            state.userSetting = action.payload;
        },
        setoffModelData: (state: CounterInitialState, action: PayloadAction<ModelDataInterface[]>) => {
            state.offModelData = action.payload;
        },
        updateUserSettingUploadHist: (state: CounterInitialState, action: PayloadAction<boolean>) => {
            state.userSetting.uploadHist = action.payload;
        },
        setGuestBool: (state: CounterInitialState, action: PayloadAction<boolean>) => {
            state.isGuest = action.payload;
        }
    }
})

export function setInitOffModelData() {
    return async (dispatch: AppDispatch) => {
        let modelD = await getAllIndexedDbModelData();
        dispatch(setoffModelData(modelD))
    }
}

export const {
    setUserData,
    setoffModelData,
    setUserSetting,
    updateUserSettingUploadHist,
    setGuestBool
} = counterSlice.actions

export default counterSlice.reducer
