import React, { useState, useEffect } from 'react';
import { Image, Text, TextInput, View, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import CustomButton from '../utils/customButton'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        getData();
    }, [])
    
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('UserData')
          if(value !== null) {
            navigation.navigate('Home')
          }
        } catch(e) {
          // error reading value
        }
    }

    const setData = async () => {
        if(name.length==0 || age.length==0){
            Alert.alert('Warning!','Please write your data.')
        }else{
            try {
                var user = {
                    Name: name,
                    Age: age
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate('Home')
            } catch (error) {
                console.log(error);
            }
        }
    }

    return(
        <View
            style = { styles.body }
        >
            <Image
                style = { styles.logo }
                source = {require('../../assets/logo.png')}
                resizeMode = 'contain'
            />
            <Text style = { styles.text }>
                Async storage
            </Text>
            <TextInput
                style = { styles.input }
                placeholder='Enter your name'
                onChangeText={(value)=>setName(value)}
            />
            <TextInput
                style = { styles.input }
                placeholder='Enter your age'
                onChangeText={(value)=>setAge(value)}
            />
            <CustomButton
            title='Login'
            color='#262835'
            androidRipple = '#46495b'
            onPressFunction={setData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo:{
        width: 200,
        // height: 100,
        margin: 20,
    },
    text:{
        fontSize:25,
        color: '#080808',
    },
    input:{
        fontSize:20,
        marginTop:10,
        marginBottom:10,
        width:300,
        borderBottomWidth:1,
        borderColor:'#d5d5d5',
    },
})