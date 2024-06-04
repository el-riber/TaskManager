// App.js

import React from 'react';
import { StyleSheet, View } from 'react-native';
import TaskManager from './src/TaskManager';

export default function App() {
  return (
    <View style={styles.container}>
      <TaskManager />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
