import React, { useState } from 'react';
//import { useSelector } from 'react-redux'

import { Modal, Box } from 'native-base';
import { Ionicons } from '@expo/vector-icons'; 

//const languageData = require("../datafile/language.json");

function QuestionBox ({ data }) {

    const [showModal, setShowModal] = useState(false);

    //const currentLanguage = useSelector(state => state.languageSet.currentLanguage);

    return(
        <Box>
            
            <Ionicons onPress={() => setShowModal(true)} name="md-help-circle-outline" size={30} color="black" />
            
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />

                    <Modal.Header>
                        {"Q&A"} 
                    </Modal.Header>

                    <Modal.Body>
                        Coming soon.  
                    </Modal.Body>

                    {/* <Modal.Footer>
                        <Button.Group space={2}>

                        <Button variant="ghost" colorScheme="blueGray" onPress={ () => setShowModal(false) }>
                            {languageData["generalCancelText"][currentLanguage]}
                        </Button>

                        <Button onPress={ () => confirmedWifi() }>
                            {languageData["generalConfirmText"][currentLanguage]}
                        </Button>

                        </Button.Group>
                    </Modal.Footer> */}

                </Modal.Content>

            </Modal>

        </Box>
    )
};

export default QuestionBox