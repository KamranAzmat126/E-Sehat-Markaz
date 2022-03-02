import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Mainview() {
  return <View style={styles.view} />;
}

const styles = StyleSheet.create({
  view: {
    background: 'white',
    width: '100%',
    height: '100%',
  },
});
