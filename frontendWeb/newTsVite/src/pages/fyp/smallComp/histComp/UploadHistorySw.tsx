import { useSelector, useDispatch } from 'react-redux'
import { updateUserSettingUploadHist } from '../../counterSlice'
import { updateSpecificUserSetting } from '../../services/firebaseUse'
import { showNotification } from '@mantine/notifications';

import { Switch } from '@mantine/core';
import { RootState } from '../../store';
import { useT } from 'talkr';

function UploadHistorySw(){
    const { T } = useT();
    const userData = useSelector( (state:RootState) => state.counter.userData);
    const userSetting = useSelector( (state:RootState) => state.counter.userSetting);
    const dispatch = useDispatch();

    async function updateSwitchAndDb(event:any){
        const isOn = event.currentTarget.checked

        await updateSpecificUserSetting( userData.uid, {uploadHist: isOn});

        showNotification({
            title: T("Updatesuccess"),
            message: T("Updatesuccess") as string + T(isOn ? "On" : "Off") + "now.",
        })
        dispatch( updateUserSettingUploadHist(isOn) );

    }

    return(
        <Switch checked={userSetting.uploadHist ? userSetting.uploadHist : false} onChange={ (event) => updateSwitchAndDb(event) } />
    );
}

export default UploadHistorySw