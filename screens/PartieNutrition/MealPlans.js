import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Card, Text, ProgressBar, Button } from "react-native-paper";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const totalMacros = { calories: 2000, protein: 150, carbs: 250, fats: 50 };
const consumedMacros = { calories: 1650, protein: 130, carbs: 185, fats: 40 };

const mealData = [
  { id: "1", name: "Oatmeal & Banana", calories: 350, protein: 10, carbs: 60, fats: 5 },
  { id: "2", name: "Grilled Chicken & Rice", calories: 600, protein: 50, carbs: 70, fats: 10 },
  { id: "3", name: "Protein Shake", calories: 200, protein: 25, carbs: 15, fats: 2 },
  { id: "4", name: "Salmon & Veggies", calories: 500, protein: 45, carbs: 40, fats: 15 },
];

const pieData = [
  { name: "Protein", population: consumedMacros.protein, color: "lightgreen", legendFontColor: "#000000", legendFontSize: 15 },
  { name: "Carbs", population: consumedMacros.carbs, color: "tan", legendFontColor: "#000000", legendFontSize: 15 },
  { name: "Fats", population: consumedMacros.fats, color: "red", legendFontColor: "#000000", legendFontSize: 15 }
];

const MealPlanScreen = () => {
  return (
    <View style={{ padding: 20 }}>
      {/* Macronutrient Progress */}
      <Card style={{ backgroundColor : "#ffffff", marginBottom: 20, padding: 15 }}>
        <Text variant="titleLarge">Macros de la journée</Text>
        <Text>Calories: {consumedMacros.calories}/{totalMacros.calories}</Text>
        <ProgressBar style={styles.progressbars } progress={consumedMacros.calories / totalMacros.calories} color="skyblue" />

        <Text>Protein: {consumedMacros.protein}g/{totalMacros.protein}g</Text>
        <ProgressBar style={styles.progressbars } progress={consumedMacros.protein / totalMacros.protein} color="lightgreen" />

        <Text>Carbs: {consumedMacros.carbs}g/{totalMacros.carbs}g</Text>
        <ProgressBar style={styles.progressbars } progress={consumedMacros.carbs / totalMacros.carbs} color="tan" />

        <Text>Fats: {consumedMacros.fats}g/{totalMacros.fats}g</Text>
        <ProgressBar style={styles.progressbars } progress={consumedMacros.fats / totalMacros.fats} color="red" />
      </Card>

      {/* Macronutrient Pie Chart */}
      <Card style={{ backgroundColor : "#ffffff", marginBottom: 20, padding: 15 }}>
        <Text variant="titleLarge">Macro Proportion</Text>
        <PieChart
          data={pieData}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </Card>
      
      {/* Meal List */}
      <FlatList
        data={mealData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={{ backgroundColor : "#ffffff",  marginBottom: 10, padding: 15 }}>
            <Text variant="titleMedium">{item.name}</Text>
            <Text>Calories: {item.calories} | Protein: {item.protein}g | Carbs: {item.carbs}g | Fats: {item.fats}g</Text>
          </Card>
        )}
      />
      
      {/* Add Meal Button */}
      <Button mode="contained" onPress={() => console.log("Add Meal")}>+ Add Meal</Button>
    </View>
  );
};

export default MealPlanScreen;

const styles = StyleSheet.create({
  macroObjectifsCont: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : 700
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
  progressbars: {
    height : 15,
  },
});

