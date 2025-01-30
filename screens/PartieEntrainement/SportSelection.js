// Page sur la selection du sport

import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; // Stack Navigator local
import { NavigationContainer } from '@react-navigation/native'; // Conteneur de navigation

// Page pour la sélection du sport
const SelectionDeSport = ({ navigation }) => {
  const sports = [
    { id: '1', name: 'Football' },
    { id: '2', name: 'Basketball' },
    { id: '3', name: 'Tennis' },
    { id: '4', name: 'Natation' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choisissez votre sport</Text>

      {/* Liste des sports */}
      <FlatList
        data={sports}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Button
              title="Démarrer"
              onPress={() => {
                // Naviguer vers une autre page lorsque l'on clique sur le sport
                navigation.navigate('AnotherScreen');
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default SelectionDeSport;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
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

