import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>T-money</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: '#d3eaff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 1,
    },
    title: {
        marginTop: 30,
        fontSize: 18,
        color: '#3a3b3d',
    }
});

export default Header;
