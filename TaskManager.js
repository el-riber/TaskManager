// src/TaskManager.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Add Task" onPress={() => addTask('New Task')} />
      {tasks.map((task) => (
        <View key={task.id} style={styles.taskContainer}>
          <Text style={task.completed ? styles.completed : styles.task}>
            {task.title}
          </Text>
          <Button
            title={task.completed ? 'Undo' : 'Complete'}
            onPress={() => toggleTaskCompletion(task.id)}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    width: '80%',
  },
  task: {
    fontSize: 18,
  },
  completed: {
    fontSize: 18,
    textDecorationLine: 'line-through',
  },
});

export default TaskManager;
