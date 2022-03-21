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
   Alert,
   Button,
   FlatList,
   Image,
   ImageBackground,
   Modal,
   Pressable,
   RefreshControl,
   SafeAreaView,
   ScrollView,
   SectionList,
   StatusBar,
   StyleSheet,
   Text,
   TextInput,
   ToastAndroid,
   Touchable,
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
   const [showWarning, setShowWarning] = useState(false);

   const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    }else{
      setShowWarning(true);
    }
   }
   
   return (
    <View style={styles.body}>
      <Modal
      transparent
      visible={showWarning}
      onRequestClose={()=>{
        setShowWarning(false)
      }}
      animationType='fade'
      hardwareAccelerated
      >
        <View style={styles.centeredView}>
          <View style={styles.modalWarning}>
            <ImageBackground
            source={require('./assets/alert.png')}
            resizeMode='contain'
            style={styles.backgroundAlerta}
            >
            <View style={styles.modalWarningTitulo}>
              <Text style={styles.modalWarningTituloTexto}>Alerta</Text>
            </View>
            </ImageBackground>
            
            <View style={styles.modalWarningCorpo}>
              <Text style={styles.text}>O nome deve possuir mais que 3 caracteres</Text>
            </View>
            <Pressable
              onPress={() => setShowWarning(false)}
              style={styles.modalWarningBotao}
              android_ripple={{color:'#ddd'}}
            >
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>
        Escreva seu nome
      </Text>
      <TextInput
      multiline
      style={styles.input}
      placeholder='Joao P. Silva'
      onChangeText={(value)=>(setName(value))}
      />

      <Pressable
        onPress={ onPressHandler }
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

      {/* <Text style={styles.text}>
        Seu nome é: {name}
      </Text> */}
      {
        submitted ?

        <View style={styles.body}>
          <Text style={styles.text}>
          Você foi registrado como: {name}
          </Text>
          <Image 
          resizeMode='stretch'
          style={styles.image}
          source={require('./assets/success.png')}
          />
        </View>
        :
        <Image 
        resizeMode='stretch'
        style={styles.image}
        source={require('./assets/error.png')}
        />
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
    centeredView:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00000055',
    },
    modalWarning:{
      width: 300,
      height: 300,
      backgroundColor: '#fff',
      borderRadius: 6,
      alignItems: 'center',
    },
    modalWarningTitulo:{
      width: '100%',
      height:50,
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderTopRightRadius: 6,
      borderTopLeftRadius: 6,
      color: '#fff',
    },
    modalWarningTituloTexto:{
     color: 'red',
    //  fontWeight: 'bold',
     fontSize: 40 ,
     textAlign: 'center',
    },
    modalWarningCorpo:{
      height: 190,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 8,
      marginRight: 8,
    },
    modalWarningBotao:{
      backgroundColor: '#fff',
      height: 40,
      width: '100%',
      borderTopWidth: 1,
      borderTopColor: '#a8a8a8',
      justifyContent: 'center',
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6,
    },
    image:{
      width: 120,
      height: 120,
    },
    backgroundAlerta:{
      // width: '100%',
      // height:50,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopRightRadius: 6,
      borderTopLeftRadius: 6,
      opacity: 1,
    },
 });

export default App;
