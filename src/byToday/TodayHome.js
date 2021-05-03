import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { exp } from 'react-native/Libraries/Animated/Easing';


function TodayHome() {

    const [data, setData] = useState({
        date: '0127',
        selection: 'card',
        purpose: 'eat',
        price: 5000,
        memo: '맛집이었다',
    });

    return (
        <View style={styles.container}>
            <Text>{data.date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: 'gray',
    },
});

export default TodayHome;
