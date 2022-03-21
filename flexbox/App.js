/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 // import type {Node} from 'react';
 import {
   Button,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Linking,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 // const Section = ({children, title}): Node => {
 //   const isDarkMode = useColorScheme() === 'dark';
 //   return (
 //     <View style={styles.sectionContainer}>
 //       <Text
 //         style={[
 //           styles.sectionTitle,
 //           {
 //             color: isDarkMode ? Colors.white : Colors.black,
 //           },
 //         ]}>
 //         {title}
 //       </Text>
 //       <Text
 //         style={[
 //           styles.sectionDescription,
 //           {
 //             color: isDarkMode ? Colors.light : Colors.dark,
 //           },
 //         ]}>
 //         {children}
 //       </Text>
 //     </View>
 //   );
 // };
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   const [name, setName] = useState('Lucas')
   const [session, setSession] = useState({titulo:'primeiro nome.', numero:1})
   const [current, setCurrent] = useState(true);
 
   const onClickHandler = ()=>{
     setName('Santos')
     setSession({titulo:'último nome.', numero:2})
     setCurrent(false)
 
   }
 
   return (
     <View style={styles.body}>
       <View style={styles.box1}>
          <View style={styles.view1}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text}>3</Text>
          </View>
       </View>
       <View style={styles.box2}>
          <View style={styles.view4}>
            <Text style={styles.text}>4</Text>
          </View>
          <View style={styles.view5}>
            <Text style={styles.text}>5</Text>
          </View>
       </View>
       <View style={styles.box3}>
          <View style={styles.view6}>
            <Text style={styles.text}>6</Text>
          </View>
          <View style={styles.view7}>
            <Text style={styles.text}>7</Text>
          </View>
       </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   body: {
     flex: 1,
     flexDirection: 'column',
     backgroundColor: '#0a0a0a',
     alignItems: 'stretch',
     justifyContent: 'flex-start',
   },
   text: {
     color: '#000',
     fontSize: 40,
     fontStyle: 'italic',
     textAlign: 'center',
   },
   box1:{
    flex: 1,
    flexDirection: 'row',
   },
   box2:{
    flex: 2,
    flexDirection: 'column',
   },
   box3:{
    flex: 5,
    flexDirection: 'row',
   },
   view1:{
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
   },
   view2:{
    flex: 2,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
   },
   view3:{
    flex: 3,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
   },
   view4:{
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
   },
   view5:{
    flex: 1,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
   },
   view6:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   },
   view7:{
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
   },
 });

export default App;
