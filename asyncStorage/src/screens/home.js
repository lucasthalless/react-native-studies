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
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation, route }){

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('UserData')
      if(value !== null) {
        let user = JSON.parse(value)
        setName(user.Name);
        setAge(user.Age);
      }
    } catch(e) {
      // error reading value
    }
  }
  
  const updateData = async () => {
    if(name.length==0){
        Alert.alert('Warning!','Please write your data.')
    }else{
        try {
            var user = {
              Name: name
            }
            await AsyncStorage.mergeItem('UserData', JSON.stringify(userr));
            Alert.alert('Success!','Your data has been updated.')
        } catch (error) {
            console.log(error);
        }
    }
  }

  const removeData = async () => {
    try {
        await AsyncStorage.removeItem('UserName');
        // await AsyncStorage.clear();
        navigation.navigate('Login');
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