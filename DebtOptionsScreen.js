
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DebtOptionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Debt Options</Text>
      <Text>Explore consolidation and negotiation plans here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});
