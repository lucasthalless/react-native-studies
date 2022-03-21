import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';

export default function ScreenA({navigation}){

    const onPressHandler = () => {
      navigation.navigate('Screen_B');
    }
  
    return(
      <View style={styles.body}>
        <Text style={styles.text}>
          Screen A
        </Text>
        <Pressable
          onPress ={onPressHandler}
          style={({pressed})=>({backgroundColor: pressed? '#ddd' : '#00f'})}
        >
          <Text style={styles.text}>
            Go to screen B
          </Text>
        </Pressable>
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
      fontWeight: 'bold',
      margin: 10,
    },
})