import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Importation des différents écrans
import HomeScreen from '../screens/HomeScreen';
import TrainingScreen from '../screens/TrainingScreen';
import NutritionScreen from '../screens/NutritionScreen';

// Création du bottom tab navigator
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Accueil'){
              var iconName = 'home';
            }
            else if (route.name === 'Entrainement'){
              var iconName = 'barbell';
            }
            else {
              var iconName = 'beer-outline';
            }
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Entrainement" component={TrainingScreen} />
        <Tab.Screen name="Nutrition" component={NutritionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
