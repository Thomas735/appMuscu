import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import BottomNavigationBar from './BottomNavigationBar'; 
import SelectionDeSport from 'screens\PartieEntrainement\SportSelection.js'; 

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab">
        <Stack.Screen name="BottomTab" component={BottomNavigationBar} />
        <Stack.Screen name="ChoixSport" component={SelectionDeSport} /> {/* Ajout de SportSelection ici */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

