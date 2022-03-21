import React from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';

const Header = (props) => {
    return(
        <View
          style={styles.view}
        >
          <Text style={styles.text}>
            React Native tutorial
          </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
      height: 50,
      width: '100%',
      backgroundColor: '#00f',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
})

export default Header;