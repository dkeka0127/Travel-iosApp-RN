import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TodayAdd() {
    return (
        <View style={styles.container}>
            <View style={styles.select}>
                <Text>
                    수입
                </Text>
                <Text>
                    지출
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    select: {
        height: 100,
        backgroundColor: 'pink'
    }
});

export default TodayAdd;
