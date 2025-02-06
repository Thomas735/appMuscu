

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView,Dimensions} from 'react-native';

import { useState } from 'react';
import Index from "../../mesComposants/carousel.js"
import MealPlanScreen from "./MealPlans.js"
//Gérer l'écran de Nutrition
import PropositionsPlats from "./PropositionsPlats.js"
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';
const renderScene = SceneMap({
  first:  MealPlanScreen,
  second: PropositionsPlats,
});

const routes = [
  { key: 'first', title: 'Macros du Jour' },
  { key: 'second', title: 'Plats' },
];
const layout = Dimensions.get('window');




const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'white' }}
    style={{ backgroundColor: 'cornflowerblue' }}
  />
);

export default function NutritionScreen() {


  const [index, setIndex] = useState(0);
  return (
  

<TabView

      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
);
}






const styles = StyleSheet.create({
scrollView: {
  },
  macroObjectifsCont: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : 0
  },
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
});

