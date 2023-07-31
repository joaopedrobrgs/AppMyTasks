import React from 'react'
import { Alert, FlatList, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

//Contexts:
import { useTasksContext } from '../../context/TasksContext';

const TaskList = () => {

  const {tasks, removeTask} = useTasksContext();

  const handleRemoveTask = (id) => {
    Alert.alert(
      'Exclusão de tarefa',
      'Deseja realmente excluir a tarefa?',
      [
        {
          text: 'Cancelar',
          onPress: () => {}
        },
        {
          text: 'Excluir',
          onPress: () => removeTask(id)
        }
      ]
      )
  }

  return (
    <FlatList
    data={tasks}
    keyExtractor={(item, index) => item.id}
    renderItem={({item, index}) => (
      <TouchableOpacity style={styles.buttonTask} onLongPress={() => handleRemoveTask(item.id)}>
        <Text style={styles.titleTask}>{item.text}</Text>
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
