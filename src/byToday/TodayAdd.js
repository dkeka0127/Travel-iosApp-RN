import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// Page
import Income from './Income';
import Outlay from './Outlay';


function showPage() {

}
function TodayAdd({navigation}) {

    const [page, setPage] = useState('second');

    return (
        <View style={styles.container}>
            <View style={styles.select}>
                {/* <TouchableOpacity style={styles.selectButton} onPress={()=>{navigation.setOptions({title: '수입'})}}> */}
                {/* <TouchableOpacity style={styles.selectButton} onPress={()=>{navigation.navigate(Travelsss)}}> */}
                <TouchableOpacity 
                    style={styles.selectButton} 
                    onPress={()=>{
                        setPage('first'),
                        navigation.setOptions({title: '수입'})
                    }}
                >
                    <Text style={styles.selectText}>수입</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.selectButton} 
                    onPress={()=>{
                        setPage('second'),
                        navigation.setOptions({title: '지출'})
                    }}
                >
                    <Text style={styles.selectText}>지출</Text>
                </TouchableOpacity>
            </View>
            {
                page === 'first' ? <Income /> : <Outlay />
            }
            <View style={styles.confirm}>
                <TouchableOpacity style={styles.selectButton} >
                    <Text style={styles.selectText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    select: {
        paddingTop: 30,
        paddingBottom: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    selectButton: {
        marginRight: '20%',
        marginLeft: '20%',
        height: 30,
        borderStyle: 'solid',
        backgroundColor: 'gray',
        color: 'white',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#d3eaff',
    },
    selectText: {
        textAlign: 'center',
        color: '#3a3b3d',
    },
    information: {
        height: 300,
        backgroundColor: 'green'
    },
    confirm: {
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: '#fff'
    }
});

export default TodayAdd;
