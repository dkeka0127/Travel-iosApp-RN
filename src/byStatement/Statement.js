import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// Page
import Header from '../component/Header';
import StatementHome from './StatementHome';

function Statement() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <StatementHome />
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
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default Statement;
