import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importation des écrans
import HomeScreen from '../screens/PartieAcceuil/HomeScreen';
import TrainingScreen from '../screens/PartieEntrainement/TrainingScreen';
import NutritionScreen from '../screens/PartieNutrition/NutritionScreen';

// Création du bottom tab navigator
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Accueil') iconName = 'home';
          else if (route.name === 'Entrainement') iconName = 'barbell';
          else iconName = 'beer-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'cornflowerblue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Entrainement" component={TrainingScreen} />
      <Tab.Screen name="Nutrition" component={NutritionScreen} />
    </Tab.Navigator>
  );
}

