import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Alert,
  TextInput
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import CustomButton from '../utils/customButton';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    ()=>{},
    error=>{console.log(error)}
);

export default function Home({ navigation, route }){

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      // const value = await AsyncStorage.getItem('UserData')
      // if(value !== null) {
      //   let user = JSON.parse(value)
      //   setName(user.Name);
      //   setAge(user.Age);
      // }

      db.transaction((tx)=>{
        tx.executeSql(
          "SELECT Name, Age FROM Users",
          [],
          (tx,results)=>{
            var len = results.rows.length;
            if (len > 0) {
              var userName = results.rows.item(0).Name;
              var userAge = results.rows.item(0).Age;
              setName(userName);
              setAge(userAge);
            }
          }
        )
      })
    } catch(e) {
      // error reading value
    }
  }
  
  const updateData = async () => {
    if(name.length==0){
        Alert.alert('Warning!','Please write your data.')
    }else{
        try {
            // var user = {
            //   Name: name
            // }
            // await AsyncStorage.mergeItem('UserData', JSON.stringify(user));

            db.transaction((tx)=>{
              tx.executeSql(
                "UPDATE Users SET Name=?",
                [name],
                () => { Alert.alert('Success!','Your data has been updated.') },
                error => { console.log(error) }
              )
            })
            Alert.alert('Success!','Your data has been updated.')
        } catch (error) {
            console.log(error);
        }
    }
  }

  const removeData = async () => {
    try {
        // await AsyncStorage.removeItem('UserName');
        // await AsyncStorage.clear();
        db.transaction((tx)=>{
          tx.executeSql(
            "DELETE FROM Users",
            [],
            ()=>{ navigation.navigate('Login'); },
            error => { console.log(error) }
          )
        })
    } catch (error) {
        console.log(error);
    }
  }

    return(
      <View style={styles.body}>
        <Text style={[
          GlobalStyle.CustomFont,
          styles.text
          ]}>
          Welcome {name} !
        </Text>
        <Text style={[
          GlobalStyle.CustomFont,
          styles.text
          ]}>
          Your age is {age}
        </Text>
        <TextInput
            style = { styles.input }
            placeholder='Update your name'
            value={name}
            onChangeText={(value)=>setName(value)}
        />
        <CustomButton
          title='Update'
          color='#262835'
          androidRipple = '#46495b'
          onPressFunction={updateData}
        />
        <CustomButton
          title='Remove'
          color='#262835'
          androidRipple = '#46495b'
          onPressFunction={removeData}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    body:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text:{
      fontSize: 40,
      margin: 10,
    },
    input:{
        fontSize:20,
        marginTop:20,
        marginBottom:20,
        width:300,
        borderBottomWidth:1,
        borderColor:'#d5d5d5',
    },
})