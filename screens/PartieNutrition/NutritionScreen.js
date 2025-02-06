

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import Index from "../../mesComposants/carousel.js"
import MealPlanScreen from "./MealPlans.js"
//Gérer l'écran de Nutrition




const NutritionScreen = () => (

        <ScrollView style={styles.scrollView}>
    <MealPlanScreen />
    <View style={styles.container} onClick={() => console.log("onclick..") } >
      <Text>Recettes de la semaine: </Text>
    </View>
      <View>
      <Index/>
    </View>  

  </ScrollView>
);





export default NutritionScreen;


const styles = StyleSheet.create({
scrollView: {
    backgroundColor: 'beige',
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

