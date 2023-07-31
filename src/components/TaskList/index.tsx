import React from 'react'
import { FlatList, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

//Contexts:
import { useTasksContext } from '../../context/TasksContext';

const TaskList = () => {

  const {tasks} = useTasksContext();

  return (
    <FlatList
    data={tasks}
    keyExtractor={(item, index) => item.id}
    renderItem={({item, index}) => (
      <TouchableOpacity style={styles.buttonTask}>
        <Text style={styles.titleTask}>Tarefa {index+1}: {item.text}</Text>
      </TouchableOpacity>
    )}
  />
  )
}

const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: '#29292e',
    padding: Platform.OS === 'ios' ? 13 : 10,
    marginTop: 10,
    borderRadious: 50,
    alignItems: 'center',
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TaskList;
