import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { exp } from 'react-native/Libraries/Animated/Easing';


function TodayHome() {

    let [data, setData] = useState([
    {
        date: '0127',
        selection: '카드',
        purpose: 'eat',
        price: 5000,
        memo: '맛집이었다',
        InOut: 0,
    },
    {
        date: '0903',
        selection: '현금',
        purpose: 'hotel',
        price: 30000,
        memo: 'hotel service is very nice !',
        InOut: 0,
    },
    {
        date: '1126',
        selection: '카드',
        purpose: 'mama',
        price: 200000,
        memo: undefined,
        InOut: 1,
    },
    {
        date: '0527',
        selection: '현금',
        purpose: 'papa',
        price: 500000,
        memo: "Love you papa 💗",
        InOut: 1,
    },
    {
        date: '0102',
        selection: '현금',
        purpose: 'present',
        price: 38000,
        memo: undefined,
        InOut: 0,
    }
    ]);


    let income = 0;
    let expenses = 0;

    result = data.map((i) => {
        if (i.InOut === 1) {
            income = income + i.price
        }
        else {
            expenses = expenses + i.price
        }
    });

    return (
        <View>        
            <View style={nav.content}>
            <View style={nav.calculatedData}>
                <Text style={nav.title}>수입</Text>
                <Text style={{color : 'blue', padding: 5}}>{income}원</Text>
            </View>
            <View style={nav.calculatedData}>
                <Text style={nav.title}>지출</Text>
                <Text style={{color: 'red', padding: 5}}>{expenses}원</Text>
            </View>
            <View style={nav.calculatedData}>
                <Text style={nav.title}>합계</Text>
                <Text style={{padding: 5}}>
                    {
                        income > expenses ?
                        income - expenses :
                        expenses - income
                    }원
                </Text>
            </View>
            </View>
            <View style={content.container}>
            {
                data.map((i, index) => {
                    return (
                        <View style={content.container} key={index}>
                            {/* <Text>{i.date}</Text> */}
                            <View style={content.card}>
                            <Text style={content.purpose}>{i.purpose}</Text>
                            <Text style={content.selection}>{i.selection}</Text>
                            <Text style={content.price}>
                                {/* {i.price}원 */}
                                {
                                    i.InOut === 0 ?
                                    <Text style={{color: 'red'}}>{i.price}원</Text>  :
                                    <Text style={{color: 'blue'}}>{i.price}원</Text> 
                                }
                            </Text>
                            </View>
                        </View>
                    );
                })
            }
            </View>
        </View>

    );
}

const nav = StyleSheet.create({
    content: {
        flexDirection: 'row'
    },
    calculatedData: {
        width: '33%',
        padding: 10,
        alignItems: 'center'
    },
    income: {
        // alignItems: 'center'
    },
    title: {
        padding: 5,
    },
    value: {
        padding: 5,
    }
})

const content = StyleSheet.create({
    container: {
        padding: 10,
    },
    card: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
    },
    purpose: {
        width: '20%',
    },
    selection: {
        width: '15%',
    },
    price: {
        width: '65%',
        textAlign: 'right'
    }
});

export default TodayHome;
