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
   FlatList,
   Pressable,
   RefreshControl,
   SafeAreaView,
   ScrollView,
   SectionList,
   StatusBar,
   StyleSheet,
   Text,
   TextInput,
   TouchableHighlight,
   TouchableOpacity,
   TouchableWithoutFeedback,
   useColorScheme,
   View,
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
 
  //  const backgroundStyle = {
  //    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  //  };

   const [name, setName] = useState('');
   const [submitted, setSubmitted] = useState(false);
   
   return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Escreva seu nome
      </Text>
      <TextInput
      multiline
      style={styles.input}
      placeholder='Joao P. Silva'
      onChangeText={(value)=>(setName(value))}
      />
      {/* botao padrão não estilizável
      <Button
        title={submitted ? 'limpar' : 'enviar'}
        onPress={()=>{
          setSubmitted(!submitted);
        }}
      /> */}

      {/* opacidade ao clicar
      <TouchableOpacity
      onPress={()=>{
        setSubmitted(!submitted);
      }}
      style={styles.button}
      activeOpacity={0.6}
      >
        <Text style={styles.text}>
        {submitted ? 'limpar' : 'enviar'}
        </Text>
      </TouchableOpacity> */}

      {/* altera cor ao clicar
      <TouchableHighlight
      onPress={()=>{
        setSubmitted(!submitted);
      }}
      style={styles.button}
      underlayColor='#dddddd'
      >
        <Text style={styles.text}>
        {submitted ? 'limpar' : 'enviar'}
        </Text>
      </TouchableHighlight> */}

      {/* sem feedback ao clicar
      <TouchableWithoutFeedback
      onPress={()=>{
        setSubmitted(!submitted);
      }}
      >
        <View style={styles.button}>
          <Text style={styles.text}>
            {submitted ? 'limpar' : 'enviar'}
          </Text>
        </View>
      </TouchableWithoutFeedback> */}

      <Pressable
        onPress={()=>{
          setSubmitted(!submitted);
        }}
        style={({ pressed }) => [
          // { backgroundColor: pressed ? '#dddddd' : '#0000ff' },
          { backgroundColor: '#0000ff' },
          styles.button
        ]}
        hitSlop={{ top: 10, right: 10, bottom: 10, left: 10}}
        android_ripple = {{color: '#00ddff'}}
        // disabled = { submitted }
      >
        <Text style={styles.text}>
          {submitted ? 'limpar' : 'enviar'}
        </Text>
      </Pressable>

      <Text style={styles.text}>
        Seu nome é: {name}
      </Text>
      {
        submitted ?
        <Text style={styles.text}>
          Você foi registrado como: {name}
        </Text>
        :
        null
      }
    </View>
   );
 };
 
 const styles = StyleSheet.create({
   body: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
   },
   text: {
     color: '#000',
     fontSize: 20,
     fontStyle: 'italic',
     textAlign: 'center',
   },
   input:{
     width: 200,
     borderWidth:1,
     borderColor: '#555',
     borderRadius: 4,
     textAlign: 'center',
     fontSize: 20,
    },
    button:{
      width: 160,
      height: 40,
      fontSize: 20,
      borderRadius: 5,
      justifyContent: 'center',
      margin: 30,
    },
 });

export default App;
