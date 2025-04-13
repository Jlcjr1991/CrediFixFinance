
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native';

export default function BudgetGraphScreen() {
  const data = [
    { x: "Rent", y: 40 },
    { x: "Food", y: 25 },
    { x: "Utilities", y: 15 },
    { x: "Savings", y: 20 }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Breakdown</Text>
      <VictoryPie data={data} colorScale={["tomato", "orange", "gold", "cyan"]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }
});
