import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Page
import Header from '../component/Header';
import PlusButton from '../component/PlusButton';


function Today({navigation}) {
    return (   
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>
                    Today List - 
                </Text>
            </View>
            {/* TodayPage에서 TodayAdd로 이동하니까 'navigation'을 넘겨주어야 함 / movedPage={'이동할 페이지'} 값 전달 */}
            <PlusButton navigation={navigation} movedPage={'TodayAdd'} />
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
        // backgroundColor: 'gray',
    },
});

export default Today;
