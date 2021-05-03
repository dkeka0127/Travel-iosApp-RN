import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

function Income() {
    const [data, setData] = useState({
        date: '',
        selection: '',
        purpose: '',
        price: 0,
        memo: '',
    });
    // const {memo, date} = data;

    return (
        <View style={styles.container}>
            <View style={styles.items}>
                <Text style={styles.title}>날짜</Text>
                <TextInput
                    style={styles.input}
                    // 값 저장
                    value={data}
                    onChangeText = {input => setData({
                        ...data, 
                        date: input
                    })}
                    placeholder=" "
                    // placeholderTextColor={'#999'}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.title}>자산</Text>
                <TextInput
                    style={styles.input}
                    // 값 저장
                    value={data}
                    onChangeText = {input => setData({
                        ...data, 
                        selection: input
                    })}
                    placeholder=" "
                    // placeholderTextColor={'#999'} 
                    autoCorrect={false}
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.title}>분류</Text>
                <TextInput
                    style={styles.input}
                    // 값 저장
                    value={data}
                    onChangeText = {input => setData({
                        ...data, 
                        purpose: input
                    })}
                    placeholder=" "
                    // placeholderTextColor={'#999'}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.title}>금액</Text>
                <TextInput
                    style={styles.input}
                    // 값 저장
                    value={data}
                    onChangeText = {input => setData({
                        ...data, 
                        price: input
                    })}
                    placeholder=" "
                    // placeholderTextColor={'#999'}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.title}>메모</Text>
                <TextInput
                    style={styles.input}
                    // 값 저장
                    value={data}
                    onChangeText = {input => setData({
                        ...data, 
                        memo: input
                    })}
                    placeholder=" "
                    // placeholderTextColor={'#999'}
                    autoCorrect={false}
                />
            </View>
            <View>
                <Text>날짜 : {data.date}</Text>
                <Text>자산 : {data.selection}</Text>
                <Text>분류 : {data.purpose}</Text>
                <Text>금액 : {data.price}</Text>
                <Text>메모 : {data.memo}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    items: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    title: {
        width: '20%',
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    input: {
        width: '75%',
        marginRight: '5%',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
    }
});

export default Income;
