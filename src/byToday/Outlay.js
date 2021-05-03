import React, {useState} from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

function OutLay() {

    const [textInputDate, setTextInputDate] = useState();
    const [textInputSource, setTextInputSource] = useState();
    const [textInputClassification, setTextInputClassification] = useState();
    const [textInputPrice, setTextInputPrice] = useState();
    const [textInputMemo, setTextInputMemo] = useState("맛집 가는데 쓴 지출 ! 하나도 아깝ㅈㅣ 아나 !");

    return (
        <View style={styles.container}>
            <View style={styles.items}>
                <Text style={styles.title}>날짜</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setTextInputDate(text)}
                    value={textInputDate}
                    placeholder=" "
                    // placeholderTextColor={'#999'}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.title}>자산</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setTextInputSource(text)}
                    value={textInputSource}
                    placeholder=" "
                    // placeholderTextColor={'#999'}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.title}>분류</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setTextInputClassification(text)}
                    value={textInputClassification}
                    placeholder=" "
                    // placeholderTextColor={'#999'}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.title}>금액</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setTextInputPrice(text)}
                    value={textInputPrice}
                    placeholder=" "
                    // placeholderTextColor={'#999'}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.title}>메모</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setTextInputMemo(text)}
                    value={textInputMemo}
                    placeholder=" "
                    // placeholderTextColor={'#999'}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.title}>사진</Text>
                <TextInput
                />
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
        backgroundColor: '#fff'
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

export default OutLay;
