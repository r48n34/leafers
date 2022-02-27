import React, { useState  } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setHistory } from '../redux/counterSlice'

import { Button, Modal, Box } from 'native-base';

const languageData = require("../datafile/language.json");

function ConfirmWifi ({ data, navigation }) {

    const [showModal, setShowModal] = useState(false);

    const currentLanguage = useSelector(state => state.languageSet.currentLanguage);
    const dispatch = useDispatch();

    function checkModelNeedDownload(){
        data.modelapiPath === "" ? confirmedWifi() : setShowModal(true);   
    }

    function confirmedWifi(){
        setShowModal(false);
        dispatch( setHistory(data) );
        navigation.navigate('cameras', { targetModel: data.modelapiPath });
        return;
    }


    return(
        <Box>
            <Button onPress={() => checkModelNeedDownload()} colorScheme="blueGray">
                { languageData["playBtn"][currentLanguage] }
            </Button>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />

                    <Modal.Header>
                        {languageData["wifiConfirmTitle"][currentLanguage]} 
                    </Modal.Header>

                    <Modal.Body>
                       {languageData["wifiConfirmContent"][currentLanguage]}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button.Group space={2}>

                        <Button variant="ghost" colorScheme="blueGray" onPress={ () => setShowModal(false) }>
                            {languageData["generalCancelText"][currentLanguage]}
                        </Button>

                        <Button onPress={ () => confirmedWifi() }>
                            {languageData["generalConfirmText"][currentLanguage]}
                        </Button>

                        </Button.Group>
                    </Modal.Footer>

                </Modal.Content>

            </Modal>

        </Box>
    )
};

export default ConfirmWifi