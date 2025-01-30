// screens/TrainingScreen.js

import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

// Utilisation de la navigation
import { useNavigation } from '@react-navigation/native';

const TrainingScreen = () => {
  // 1. Créer un tableau pour stocker les sets
  const [sets, setSets] = useState([]);

  // Utilisation du hook useNavigation pour récupérer l'objet navigation
  const navigation = useNavigation();
  
  // 2. Fonction pour ajouter un set
  const addSet = () => {
    // Créer un nouveau set avec un ID unique (par exemple, en utilisant la longueur du tableau)
    const newSet = { id: sets.length.toString(), name: `Set ${sets.length + 1}` };
    setSets([...sets, newSet]); // Ajouter le nouveau set à l'état
  };

  // Fonction pour naviguer vers SportSelection
  const navigateToSportSelection = () => {
    console.log(navigation.getState());
    navigation.navigate('ChoixSport'); // Utilisation de la méthode navigate pour aller à la page SportSelection
  };

  return (
    <View style={styles.container}>

      {/* Choisi pour quel sport tu veux faire ta séance */}
      <View style={styles.buttonContainer}>
        <Button title="Choisi ton sport" onPress={navigateToSportSelection} />
      </View>
      
      {/* Une fois cliqué sur le bouton, on arrive sur une page sur laquel on peut choisir notre sport, on garde ce choix en mémoire*/}
      <Text> Tu as choisi </Text>
      {/* 3. Afficher un bouton pour ajouter un set */}
      <View style={styles.buttonContainer}>
        <Button title="Ajouter un Set" onPress={addSet} />
      </View>

      {/* 4. Afficher dynamiquement les sets */}
      <FlatList
        data={sets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.setItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

// Styles pour la page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  setItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
  },
});

export default TrainingScreen;
