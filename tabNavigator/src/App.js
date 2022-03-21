import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import ScreenA from './screenA';
import ScreenB from './screenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PagerView from 'react-native-pager-view';

// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

function App(){
 return(
   <NavigationContainer>
     <Tab.Navigator
     screenOptions={({route})=>({
      tabBarIcon: ({focused, size, color})=>{
        let iconName;
        if(route.name==='Screen_A'){
          iconName = 'autoprefixer';
          size = focused ? 25 : 20;
          color = focused ? '#00f' : '#000'
        }else if(route.name==='Screen_B'){
          iconName = 'btc';
          size = focused ? 25 : 20;
          color = focused ? '#00f' : '#000'
        }
        return(
          <FontAwesome5
            name={iconName}
            size={size}
          />
        )
      }
     })}
    // bottom tab
    //  tabBarOptions={{
    //    activeTintColor: '#00f',
    //    inactiveTintColor: '#000',
    //    activeBackgroundColor: '#fff',
    //    inactiveBackgroundColor: '#ddd',
    //    showLabel:false,
    //    labelStyle: { fontSize: 15 },
    //  }}

    // bottom tab material
    // activeColor='#fff'
    // inactiveColor='#3e2465'
    // barStyle={{backgroundColor: '#694fad'}}
     >
       <Tab.Screen
       name="Screen_A"
       component={ ScreenA }
       />
       <Tab.Screen
       name="Screen_B"
       component={ ScreenB }
      //  options={{ tabBarBadge: 3 }}
       />
     </Tab.Navigator>
   </NavigationContainer>
 )
}

export default App;