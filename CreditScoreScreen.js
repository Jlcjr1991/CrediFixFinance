
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory-native';

export default function CreditScoreScreen() {
  const data = [
    { x: "Jan", y: 620 },
    { x: "Feb", y: 640 },
    { x: "Mar", y: 670 },
    { x: "Apr", y: 690 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Credit Score History</Text>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine data={data} />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }
});
