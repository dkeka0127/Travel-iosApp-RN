import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TravelHome() {
    
    let [data, setData] = useState([
        {
            startDate: '0127',
            endDate: '0128',
            location: '강원도 속초',
            title: '은이랑 속초',
        },
        {
            startDate: '0505',
            endDate: '0508',
            location: '제주도',
            title: '초코파이랑 제주도',
        },
        {
            startDate: '0321',
            endDate: '0426',
            location: '프랑스 파리',
            title: '파리 한달살기',
        },
        {
            startDate: '1231',
            endDate: '0101',
            location: '강원도 강릉',
            title: '새해맞이 일몰여행',
        },
        {
            startDate: '1116',
            endDate: '1126',
            location: '전라남도 여수',
            title: '여수밤바다 접선', 
        }
    ]);

    return(
        <View style={styles.container}>
            {
                data.map((i, index) => {
                    return (
                        <View style={styles.content} key={index}>
                            <Text style={{fontSize: 17, fontWeight: '500'}}>{i.title}</Text>
                            <Text></Text>
                            <Text style={{fontWeight: '300'}}>⚲ {i.location}</Text>
                            <Text style={{fontWeight: '300'}}>⌚︎ {i.startDate} - {i.endDate}</Text>
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
        margin: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'center'
    },
    content: {
        width: '42%',
        margin: '4%',
        padding: 10,
        borderRadius: 8,
        // borderColor: 'lightsteelblue',
        borderColor: '#b2d8f4',
        borderWidth: 1.5,
        backgroundColor: 'white',
    }
});

export default TravelHome;
