import React from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
} from 'react-native';

const CustomButton = (props) => {
    return(
        <Pressable
        onPress={ props.onPressFunction }
        style={({ pressed }) => [
          // { backgroundColor: pressed ? '#dddddd' : props.color },
          { backgroundColor: props.color },
          styles.button,
          {...props.style}
        ]}
        hitSlop={{ top: 10, right: 10, bottom: 10, left: 10}}
        android_ripple = {{color: '#00ddff'}}
        // disabled = { submitted }
      >
        <Text style={styles.text}>
          {props.title}
        </Text>
      </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
    },
    button:{
      width: 160,
      height: 40,
      fontSize: 20,
      borderRadius: 5,
      justifyContent: 'center',
      margin: 30,
    },
})

export default CustomButton;