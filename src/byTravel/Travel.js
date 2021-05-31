import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
//Page
import Header from '../component/Header';
import PlusButton from '../component/PlusButton';
import TravelHome from './TravelHome';

function Travel({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TravelHome />
            </View>
            <PlusButton navigation={navigation} movedPage={'TravelAdd'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        color: 'white',
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default Travel;
