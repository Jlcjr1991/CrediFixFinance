
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplitBillScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Split Bill</Text>
      <Text>Feature for splitting bills among friends or groups.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});
