import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { clearHistoryArr } from '../redux/predictHistorySlice.jsx';

import { Button, Modal, Box, useToast } from 'native-base';

const languageData = require("../datafile/language.json");

function ConfirmDelete () {

    const [showModal, setShowModal] = useState(false);
    const toast = useToast();

    const currentLanguage = useSelector(state => state.languageSet.currentLanguage);
    const dispatch = useDispatch();

    async function deleteHistory(){
        try{
            dispatch( clearHistoryArr() )
            setShowModal(false);

            toast.show({
                description: languageData["successToDeleteBtn"][currentLanguage]
            })
        }
        catch(e){
            console.log(e);
        }
    }

    return(
        <Box>
            <Button onPress={() => setShowModal(true)}>
                {languageData["historyPageDeleteBtn"][currentLanguage]} 
            </Button>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />

                    <Modal.Header>
                        {languageData["deleteCompTitle"][currentLanguage]} 
                    </Modal.Header>

                    <Modal.Body>
                       {languageData["deleteCompContent"][currentLanguage]}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button.Group space={2}>

                        <Button variant="ghost" colorScheme="blueGray" onPress={ () => setShowModal(false) }>
                            {languageData["generalCancelText"][currentLanguage]}
                        </Button>

                        <Button onPress={ () => deleteHistory() }>
                            {languageData["generalDeleteText"][currentLanguage]}
                        </Button>

                        </Button.Group>
                    </Modal.Footer>

                </Modal.Content>

            </Modal>

        </Box>
    )
};

export default ConfirmDelete