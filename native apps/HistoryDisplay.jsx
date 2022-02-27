import React from 'react';
import { useSelector } from 'react-redux'

import { NativeBaseProvider, Button, ScrollView } from 'native-base';
import ItemListAll from './components/ItemListAll';
import ConfirmDelete from './components/ConfirmDelete';

function HistoryDisplay(){

    const historyArr = useSelector(state => state.predictHistory.historyArr);

    return(
        <NativeBaseProvider>
            <ConfirmDelete/>
            <ScrollView>
                <ItemListAll data={historyArr} />
            </ScrollView>

        </NativeBaseProvider>
    )
}

export default HistoryDisplay