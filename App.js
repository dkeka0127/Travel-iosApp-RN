import * as React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Page
import TodayPage from './src/byToday/Today';
import TodayAdd from './src/byToday/TodayAdd';
import TravelPage from './src/byTravel/Travel';
import CalenderPage from './src/byCalender/Calender';
import StatementPage from './src/byStatement/Statement';


const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
      <Tab.Navigator 
      tabBarOptions={{
      activeTintColor: '#709bd3',
      inactiveTintColor: '#3a3b3d',
      }}>
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
      <Stack.Navigator>
        <Stack.Screen name="T-Money" component={HomeTabs} style={StyleSheet.header} />
        <Stack.Screen name="TodayAdd" component={TodayAdd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  header: {
    
  }
})

export default App;
