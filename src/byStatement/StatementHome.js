// pie-chart doc
// https://github.com/react-native-art/art
// <Image> 태그 사용 시 내부에 source={require('../img/red.png')} 꼭 넣어주어야 함
// flexDirection: 'row' - 그래프 가로 정렬
// flexWrap: 'wrap' - 그래프 아래부터 위로 높아지게 함 (flexDirection과 같이 써야함)

import React, {useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {Surface, Shape, Path} from '@react-native-community/art';
import red from '../img/red.png';


function StatementHome() {
    
    let [data, setData] = useState([
        {
            travelNum : 0,
            category1 : 3,
            category2 : 2,
            category3 : 1,
            category4 : 4,
            category5 : 5,
        },
        {
            travelNum : 1,
            category1 : 4,
            category2 : 3,
            category3 : 5,
            category4 : 1,
            category5 : 2,
        },
        {
            travelNum : 2,
            category1 : 1,
            category2 : 2,
            category3 : 1,
            category4 : 4,
            category5 : 3,
        },
        {
            travelNum : 2,
            category1 : 1,
            category2 : 3,
            category3 : 1,
            category4 : 7,
            category5 : 9,
        },
        {
            travelNum : 4,
            category1 : 1,
            category2 : 4,
            category3 : 2,
            category4 : 3,
            category5 : 2,
        },
    ])

    return (
        <View style={styles.container}>
            {
                data.map((i, index) => {
                    let categoryAll = i.category1 + i.category2 + i.category3 + i.category4 + i.category5;
                    let category1 = Math.round((i.category1/categoryAll)*100);
                    let category2 = Math.round((i.category2/categoryAll)*100);
                    let category3 = Math.round((i.category3/categoryAll)*100);
                    let category4 = Math.round((i.category4/categoryAll)*100);
                    let category5 = Math.round((i.category5/categoryAll)*100);
                    return (
                        <View style={styles.card} key={index}>
                        <Text> TravelNum : {i.travelNum} </Text>
                        <View style={styles.graphNameView}>
                        <Text style={styles.graphNameText}>R</Text>
                        <Text style={styles.graphNameText}>O</Text>
                        <Text style={styles.graphNameText}>G</Text>
                        <Text style={styles.graphNameText}>B</Text>
                        <Text style={styles.graphNameText}>P</Text>
                        </View>
                        <View style={styles.graphes}>
                            <Image style={{width:'16%', marginLeft: '2%', marginRight: '2%', height: category1}} source={require('../img/red.png')} />
                            <Image style={{width:'16%', marginLeft: '2%', marginRight: '2%', height: category2}} source={require('../img/orange.png')} />
                            <Image style={{width:'16%', marginLeft: '2%', marginRight: '2%', height: category3}} source={require('../img/green.png')} />
                            <Image style={{width:'16%', marginLeft: '2%', marginRight: '2%', height: category4}} source={require('../img/blue.png')} />
                            <Image style={{width:'16%', marginLeft: '2%', marginRight: '2%', height: category5}} source={require('../img/purple.png')} />
                        </View>
                        {/* <Text>{category1 + category2 + category3 + category4 + category5} -- </Text> */}
                        </View>
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 13,
        marginRight: 13
    },
    card: {
        width: '42%',
        margin: '4%',
        padding: 15,
        // backgroundColor: 'pink'
        borderColor: '#b2d8f4',
        borderWidth: 1.5,
        borderRadius: 8
    },
    graphNameView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5
    },
    graphNameText: {
        width: '16%',
        marginLeft: '2%',
        marginRight: '2%',
        textAlign: 'center'
    },
    graphes: {
        flexDirection: 'row',
        // flexWrap: 'wrap',
        alignItems: 'flex-end',
        backgroundColor: 'white',
        width: '100%',
        height: 80,
    },
    graph: {
        width: '15%'
    }
})

export default StatementHome;

