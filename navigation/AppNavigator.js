import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './BottomTabNavigator.js'; 
import SelectionDeSport from '../screens/PartieEntrainement/SportSelection';
import TrainingScreen from '../screens/PartieEntrainement/TrainingScreen.js';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab">
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="PageEntrainement" component={TrainingScreen} />
        <Stack.Screen name="ChoixSport" component={SelectionDeSport} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

