import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { updateUserSettingUploadHist } from '../../counterSlice'
import { updateSpecificUserSetting } from '../../services/firebaseUse'

import Switch from '@mui/material/Switch';

function UploadHistorySw(){

    const userData = useSelector( (state) => state.counter.userData);
    const userSetting = useSelector( (state) => state.counter.userSetting);
    const dispatch = useDispatch();

    async function updateSwitchAndDb(event){
        const isOn = event.target.checked

        await updateSpecificUserSetting( userData.uid, {uploadHist: isOn});
        dispatch( updateUserSettingUploadHist(isOn) );

    }

    return(
        <Switch checked={userSetting.uploadHist ? userSetting.uploadHist : false} onChange={ (event) => updateSwitchAndDb(event) } />
    );
}

export default UploadHistorySw