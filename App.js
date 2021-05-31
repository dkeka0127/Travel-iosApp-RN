import * as React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Page
import TodayPage from './src/byToday/Today';
import TodayAdd from './src/byToday/TodayAdd';
import TravelPage from './src/byTravel/Travel';
import TravelAdd from './src/byTravel/TravelAdd';
import CalenderPage from './src/byCalender/Calender';
import StatementPage from './src/byStatement/Statement';
// n빵 - 더치페이 기능
// 룰렛, 사다리타기


const Tab = createBottomTabNavigator();
const TabBarIcon = (focused, name) => {
  let iconImgPath;
  if (name === 'Today'){
    iconImgPath = require('./src/img/today.png');
  } else if (name === 'Travel') {
    iconImgPath = require('./src/img/airplane.png');
  } else if (name === 'Calender') {
    iconImgPath = require('./src/img/calendar.png');
  } else if (name === 'Statement') {
    iconImgPath = require('./src/img/statement.png');
  }
  return (
    <Image 
      style={{
        width: focused ? 22 : 20,
        height: focused ? 22 : 20,
      }}
      source = {iconImgPath}
    />
  )
}

function HomeTabs() {
  return (
      <Tab.Navigator 
        initialRouteName='Travel'
        tabBarOptions={{
          activeTintColor: '#709bd3',
          inactiveTintColor: '#3a3b3d',
        }}
        screenOptions={({route})=>({
          tabBarLabel: route.name,
          tabBarIcon: ({focused})=>(
            TabBarIcon(focused, route.name)
          )
        })}
      >
        <Tab.Screen name="Today" component={TodayPage} />
        <Tab.Screen name="Travel" component={TravelPage} />
        <Tab.Screen name="Calender" component={CalenderPage} />
        <Tab.Screen name="Statement" component={StatementPage} />
      </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle:{backgroundColor:'#d3eaff'},
          headerTintColor: '#3a3b3d'
        }} 
      >
        <Stack.Screen name="T-Money" component={HomeTabs} />
        <Stack.Screen name="TodayAdd" component={TodayAdd} options={{title: '입출금', headerBackTitle: ' '}} />
        <Stack.Screen name="TravelAdd" component={TravelAdd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  header: {
    
  }
})

export default App;
