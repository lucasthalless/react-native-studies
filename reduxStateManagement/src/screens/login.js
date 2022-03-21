import React, { useState, useEffect } from 'react';
import { Image, Text, TextInput, View, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import CustomButton from '../utils/customButton'
// import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage'
import { useSelector, useDispatch } from 'react-redux'
import { setName, setAge } from '../redux/actions';

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    ()=>{},
    error=>{console.log(error)}
);

export default function Login({ navigation }) {

    const {name,age} = useSelector(state => state.userReducer)
    const dispatch = useDispatch();

    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');

    useEffect(() => {
        createTable();
        getData();
    }, [])

    const createTable = () => {
        db.transaction((tx)=>{
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                +"Users "
                +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
            )
        })
    }
    
    const getData = async () => {
        try {
        //   const value = await AsyncStorage.getItem('UserData')
        //   if(value !== null) {
        //     navigation.navigate('Home')
        //   }

        db.transaction((tx)=>{
            tx.executeSql(
              "SELECT Name, Age FROM Users",
              [],
              (tx,results)=>{
                var len = results.rows.length;
                if (len > 0) {
                    navigation.navigate('Home')
                }
              }
            )
          })
        } catch(e) {
          // error reading value
        }
    }

    const setData = async () => {
        if(name.length==0 || age.length==0){
            Alert.alert('Warning!','Please write your data.')
        }else{
            try {
                // async storage
                // var user = {
                //     Name: name,
                //     Age: age
                // }
                // await AsyncStorage.setItem('UserData', JSON.stringify(user));
                // navigation.navigate('Home')

                dispatch(setName(name));
                dispatch(setName(age));
                await db.transaction( async (tx)=>{
                    // await tx.executeSql(
                    //     "INSERT INTO Users (Name, Age) VALUES('"+name+"',"+age+")"
                    // )
                    await tx.executeSql(
                        "INSERT INTO Users (Name, Age) VALUES(?,?)",
                        [name, age]
                    )
                })
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
                source = {require('../../assets/redux.png')}
                resizeMode = 'contain'
            />
            <Text style = { styles.text }>
                Redux
            </Text>
            <TextInput
                style = { styles.input }
                placeholder='Enter your name'
                onChangeText={(value)=>dispatch(setName(value))}
            />
            <TextInput
                style = { styles.input }
                placeholder='Enter your age'
                onChangeText={(value)=>dispatch(setAge(value))}
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
        height: 100,
        margin: 0,
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