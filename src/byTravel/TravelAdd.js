import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// Page

function TravelAdd({navigation}) {

    return (
        <View style={styles.container}>
            <Text> Travel Add Page </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
        // alignItems: 'center',
        // justifyContent: 'center'
    },
});

export default TravelAdd;
