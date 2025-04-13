
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DisputeLetterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dispute Generator</Text>
      <Text>Generate and send Metro 2 dispute letters here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});
