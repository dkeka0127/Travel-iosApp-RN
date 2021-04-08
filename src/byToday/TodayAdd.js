import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TodayAdd() {
    return (
        <View style={styles.container}>
            <Text>
                This is Add Page !!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default TodayAdd;
