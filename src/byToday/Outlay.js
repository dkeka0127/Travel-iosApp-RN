import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

function OutLay() {
    return (
        <View style={styles.container}>
            <View style={styles.items}>
                <Text style={styles.title}>날짜</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Add an item!"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.title}>자산</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Add an item!"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.title}>분류</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Add an item!"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.title}>금액</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Add an item!"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.title}>메모</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Add an item!"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
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
        backgroundColor: '#eedeee'
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
        borderBottomColor: 'gray',
    }
});

export default OutLay;
