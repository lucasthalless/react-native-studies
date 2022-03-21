import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Alert,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import CustomButton from '../utils/customButton';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage'
import { useSelector, useDispatch } from 'react-redux'
import { setName, setAge, increaseAge, getCities } from '../redux/actions';
import PushNotification from "react-native-push-notification"

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    ()=>{},
    error=>{console.log(error)}
);

export default function Home({ navigation }){
  
  const { name, age, cities } = useSelector(state => state.userReducer)
  const dispatch = useDispatch();
  
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');

  useEffect(() => {
    getData();
    dispatch(getCities())
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
              dispatch(setName(userName));
              dispatch(setAge(userAge));
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

  const handleNotification = (item)=>{

    PushNotification.cancelAllLocalNotifications();
    // PushNotification.cancelLocalNotification({id: 3});

    PushNotification.localNotification({
      channelId: "test-channel",
      title:"You clicked on " + item.country,
      message: item.city,
      bigText: item.city + " is one of the most beautiful cities in " + item.country,
      color: 'red',
      // id: index,
    })

    PushNotification.localNotificationSchedule({
      channelId: "test-channel",
      title:"You clicked on " + item.country + " 20 seconds ago",
      message: item.city,
      date: new Date(Date.now() + 20 * 1000),
      allowWhileIdle: true,
    })
  }

    return(
      <View style={styles.body}>
        <Text style={[
          GlobalStyle.CustomFont,
          styles.text
          ]}>
          Welcome {name} !
        </Text>
        <CustomButton
          title="Open camera"
          color='#262835'
          androidRipple = '#46495b'
          onPressFunction={()=> { navigation.navigate('Camera') }}
        />
        <FlatList
          data={ cities }
          renderItem={ ({item}) => (
            <TouchableOpacity
            onPress={()=>{
              handleNotification(item);
              navigation.navigate('Map',{
                city: item.city,
                lat: item.lat,
                lng: item.lng,
              })
            }}
            >
            <View style={styles.item}>
              <Text style={styles.title}>{item.country}</Text>
              <Text style={styles.subtitle}>{item.city}</Text>
            </View>
            </TouchableOpacity>
          ) }
          keyExtractor={(item, index)=>index.toString()}
        />
        {/* <Text style={[
          GlobalStyle.CustomFont,
          styles.text
          ]}>
          Your age is {age}
        </Text>
        <TextInput
            style = { styles.input }
            placeholder='Update your name'
            value={name}
            onChangeText={(value)=> dispatch(setName(value))}
        />
        <CustomButton
          title='Update'
          color='#262835'
          androidRipple = '#46495b'
          onPressFunction={updateData}
        />
        <CustomButton
          title='Increase age'
          color='#262835'
          androidRipple = '#46495b'
          onPressFunction={()=>{dispatch(increaseAge())}}
        />
        <CustomButton
          title='Remove'
          color='#262835'
          androidRipple = '#46495b'
          onPressFunction={removeData}
        /> */}
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
    item:{
      width: 220,
      borderBottomWidth:1,
      borderColor:'#d5d5d5',
      marginTop: 15,
      marginBottom: 15,
      paddingBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title:{
      fontWeight: 'bold',
      fontSize: 30,
    },
    subtitle:{
      fontSize: 15,
    },
})