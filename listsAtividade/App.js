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
   FlatList,
   RefreshControl,
   SafeAreaView,
   ScrollView,
   SectionList,
   StatusBar,
   StyleSheet,
   Text,
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
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   const [Items, setItems] = useState([
     { name:'Item 1' },
     { name:'Item 2' },
     { name:'Item 3' },
     { name:'Item 4' },
     { name:'Item 5' },
     { name:'Item 6' },
     { name:'Item 7' },
     { name:'Item 8' },
   ])

   const [DATA, addData] = useState([
     {
       title: 1,
       data: ['Item 1-1', 'Item 1-2'],
     }
   ])

   const [Refreshing, setRefreshing] = useState(false)

   const onRefresh = ()=>{
     setRefreshing(true)
     const contador = DATA.length + 1;
     addData([...DATA, {title: contador, data: ['Item '+contador+'-1', 'Item '+contador+'-2']}])
     setRefreshing(false)
   }
   
   return (
    // sectionlist
    <SectionList
      keyExtractor = {(item, index) => index.toString()}
      sections={DATA}
      renderItem = {({item})=>(
        <Text style={styles.text}>{item}</Text>
      )}
      renderSectionHeader = {({section})=>(
        <View style={styles.item}>
          <Text style={styles.text}>Título {section.title}</Text>
        </View>
      )}
      refreshControl = {
        <RefreshControl
        refreshing = { Refreshing }
        onRefresh = { onRefresh }
        colors = {['#ffffff']}
        progressBackgroundColor = {'#000000'}
        />
      }
    />

    // flatlist
    // <FlatList
    // keyExtractor = {(item, index) => index.toString()}
    // data = { Items }
    // renderItem = {({item})=>(
    //   <View style={styles.item}>
    //     <Text style={styles.text}>{item.name}</Text>
    //   </View>
    // )}
    // refreshControl={
    // <RefreshControl
    //   refreshing = { Refreshing }
    //   onRefresh = { onRefresh }
    //   colors = {['#ffffff']}
    //   progressBackgroundColor = {'#000000'}
    // />
    // }
    // style={styles.body}
    // />

    // list
    // <ScrollView 
    // refreshControl={
    //   <RefreshControl
    //     refreshing = { Refreshing }
    //     onRefresh = { onRefresh }
    //     colors = {['#ffffff']}
    //     progressBackgroundColor = {'#000000'}
    //   />
    // }
    // style={styles.body}>
    //   {
    //     Items.map((object) => {
    //       return(
    //         <View style={styles.item} key={object.key}>
    //           <Text style={styles.text}>{object.item}</Text>
    //         </View>
    //       )
    //     })
    //   }
    // </ScrollView>
   );
 };
 
 const styles = StyleSheet.create({
   body: {
     flex: 1,
     flexDirection: 'column',
     backgroundColor: '#0a0a0a',
   },
   item:{
    margin: 10,
    backgroundColor: '#0000ff',
    justifyContent: 'center',
    alignItems: 'center',
   },
   text: {
     color: '#000',
     fontSize: 60,
     fontStyle: 'italic',
     textAlign: 'center',
   },
 });

export default App;
