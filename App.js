import React from 'react';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return <BottomTabNavigator />,
         <AppNavigator />;
}
