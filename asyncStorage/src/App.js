import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home';
import Login from './screens/login';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();

function App(){
 return(
   <NavigationContainer>
     <Stack.Navigator
     initialRouteName="Login"
    //  screenOptions={{
    //    headerTitleAlign: 'center',
    //    headerStyle: {
    //      backgroundColor: '#0080ff',
    //    },
    //    headerTintColor: '#fff',
    //    headerTitleStyle: {
    //      fontSize: 25,
    //      fontWeight: 'bold',
    //    }
    //  }}
     >
       <Stack.Screen
       name="Login"
       component={ Login }
       options={{
         headerShown: false
       }}
       />
       <Stack.Screen
       name="Home"
       component={ Home }
       />
     </Stack.Navigator>
   </NavigationContainer>
 )
}

export default App;