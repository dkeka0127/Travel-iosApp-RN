import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function PlusButton(props) {
    return (
        <View style={styles.container}>
            <View style={styles.plusButton}>
                {/* navigation 사용 시 props.navigation.navigate('') */}
                <Button title='+' onPress={()=>{props.navigation.navigate(props.movedPage)}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20,
    },
    plusButton: {
        width: 50,
        height: 50,
        backgroundColor: '#d3eaff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    }
});

export default PlusButton;
