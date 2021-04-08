import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// Page
import Header from '../component/Header';

function Statement() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>Statement Page !</Text>
            </View>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Statement;
