import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { exp } from 'react-native/Libraries/Animated/Easing';


function TodayHome() {

    const [data, setData] = useState([
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
    }
    ]);

    return (
        <View style={styles.container}>
        {
            data.map((i) => {
                return (
                    <View style={styles.container}>
                        {/* <Text>{i.date}</Text> */}
                        <View style={styles.card}>
                        <Text style={styles.purpose}>{i.purpose}</Text>
                        <Text style={styles.selection}>{i.selection}</Text>
                        <Text style={styles.price}>
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
    );
}

const styles = StyleSheet.create({
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
