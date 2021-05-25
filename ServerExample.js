//index.js 폴더 6번째 줄
//원본 : import App from './App';
//변경 : import App from './ServerExample';

import React, {useState} from 'react';
import axios from 'axios';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

function ServerExample(){

    const [title, setTitle] = useState(["Connect Button ⬇️"]);
    const [data, setData] = useState([
        {
            name : "sol",
            age : 23
        },
        {
            name : 'eun',
            age : 20
        }
    ]);

    //axios - GET 
    // axios.get('/data')
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    // axios - POST : api는 요청을 보낼 주소, data 는 선택사항
    // axios
    // .post("/data", data)
    // .then((res) => console.log(res))
    // .catch((err) => console.log(err));

    //서버와 커넥트 후 글 받아오기 1
    connect = () => {
        const URL = "http://127.0.0.1:8080/home";
        // const URL = "http://10.0.2.2:8080/home";
        
        fetch(URL).then(response => {
            if(response.status == 200) {
                setTitle("response !");
                console.log(response);
                return response.text();
            }
            else {
                throw new Error("Something is WRONG");
            }
        })
        .then(responseText => {
            // setState({response: responseText})
        }).catch(error => {
            console.error(error.message);
        });
    };

    //서버와 연결하기 2

    // connect = async () => {
    //     const URL = 'http://127.0.0.1:8080/home';
        
    //     try {
    //         const response = await fetch(URL);
    //         // console.log(response);
    //         if(response.status != 200) {
    //             throw new Error("Something is WRONG ")
    //         }
    //     }catch(error) {
    //         Alert.alert(error.message);
    //     }
    // }

    return (
        <View>
            <Text style={styles.container}> ServerExample Page </Text>
            <Text style={styles.container}> {title} </Text>

            <Button 
            title="Connect to server button"
            onPress={connect()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        textAlign: 'center'
    }
});

export default ServerExample;
