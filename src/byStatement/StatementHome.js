// pie-chart doc
// https://openbase.com/js/react-native-pie-chart

import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
            travelNum : 3,
            category1 : 3,
            category2 : 3,
            category3 : 4,
            category4 : 7,
            category5 : 2,
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
                        <View style={styles.card}>
                        <Text> TraveNum : {i.travelNum} </Text>
                        <Text></Text>
                        <Text>{categoryAll} -- </Text>

                            <Text>{category1}%</Text>
                            <Text>{category2}%</Text>
                            <Text>{category3}%</Text>
                            <Text>{category4}%</Text>
                            <Text>{category5}%</Text>

                        <Text>{category1 + category2 + category3 + category4 + category5} -- </Text>
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
        backgroundColor: 'pink'
    }
})

export default StatementHome;
