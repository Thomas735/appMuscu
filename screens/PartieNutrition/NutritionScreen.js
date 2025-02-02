import React from 'react';
import { View, Text, StyleSheet, SafeAreaView} from 'react-native';

import Index from "../../mesComposants/carousel.js"

//Gérer l'écran de Nutrition




const NutritionScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Cette page sera dédiée à la nutrition</Text>
    <View style={styles.macroObjectifsCont} onClick={() => console.log("onclick..") } >

      <Text>A supprimer , il faut juste décaler la position du view en dessous </Text>
    </View>
    <View style={styles.container} onClick={() => console.log("onclick..") } >
      <Text>Objectifs de Macros:  </Text>
    </View>
    <View style={styles.container} onClick={() => console.log("onclick..") } >
      <Text>Recettes de la semaine: </Text>
    </View>
      <View>
      <Index/>
    </View>  

  </View>
);





export default NutritionScreen;


const styles = StyleSheet.create({
  macroObjectifsCont: {
    backgroundColor: '#bbbbbb',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : 150
  },
  container: {
    backgroundColor: '#fff',
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
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

