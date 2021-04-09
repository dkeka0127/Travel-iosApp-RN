import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function TodayAdd({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.select}>
                <Button title='수입' onPress={()=>{navigation.setOptions({title: '수입'})}} />
                <Button title='지출' onPress={()=>{navigation.setOptions({title: '지출'})}} />
            </View>
            <View style={styles.information}>
                
            </View>
            <View style={styles.confirm}>
                <TouchableOpacity>
                    <Text>Save</Text>
                </TouchableOpacity>
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
    },
    information: {
        height: 300,
        backgroundColor: 'green'
    },
    confirm: {
        height: 100,
        backgroundColor: 'yellow'
    }
});

export default TodayAdd;
