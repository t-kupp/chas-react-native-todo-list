import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useTodo } from '../context/TodoContext';

export default function AddScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { addTodo } = useTodo();

  function handlePress() {
    if (title.trim() === '') {
      alert('Please add a title.');
      return;
    }

    addTodo(title, description);
    setTitle('');
    setDescription('');
    alert('Todo item added!');
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Title</Text>
        <TextInput onChangeText={setTitle} value={title} style={styles.textInput} placeholder='Hi' />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Description</Text>
        <TextInput onChangeText={setDescription} value={description} style={styles.textInput} placeholder='Hi' />
      </View>
      <View>
        <Button title='Add' onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 2,
  },
  textInput: {
    paddingVertical: 2,
    marginBottom: 8,
  },
});
