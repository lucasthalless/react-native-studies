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
       <Text style={styles.text}>Nome: {name.nome}</Text>
       <Text style={styles.text}>Essa sessão é a de número {session.numero} e é sobre {session.titulo}</Text>
       <Text style={styles.text}>{current ? 'sessao atual: primeira' : 'sessao atual: segunda'}</Text>
       <Button title='atualizar sessão' onPress={ onClickHandler }></Button>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   body: {
     flex: 1,
     backgroundColor: '#0000ff',
     alignItems: 'center',
     justifyContent: 'center',
   },
   text: {
     color: '#ffffff',
     fontSize: 20,
     fontStyle: 'italic',
     margin: 25,
     textAlign: 'center',
   },
 });

export default App;
