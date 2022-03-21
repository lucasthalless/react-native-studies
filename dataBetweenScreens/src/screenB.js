import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';

export default function ScreenB({navigation, route}){

  const  { itemName, itemId } = route.params;

  const onPressHandler = () => {
    navigation.navigate('Screen_A', {itemName: 'item from screen B', itemId: 11});
    // navigation.navigate('Screen_A');
    // navigation.goBack();
  }

  return(
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen B
      </Text>
      <Pressable
        onPress ={onPressHandler}
        style={({pressed})=>({backgroundColor: pressed? '#ddd' : '#00f'})}
      >
        <Text style={styles.text}>
          Go back to screen A
        </Text>
      </Pressable>
        <Text style={styles.text}>
          {itemName}
        </Text>
        <Text style={styles.text}>
          ID: {itemId}
        </Text>
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