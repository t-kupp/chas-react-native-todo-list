import { useLayoutEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useTodo } from '../context/TodoContext';
import { useNavigation } from '@react-navigation/native';

export default function AddScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  const { addTodo } = useTodo();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={handlePress} title='Done' />,
    });
  }, [navigation, title, description]);

  function handlePress() {
    if (title.trim() === '') {
      navigation.goBack();
      return;
    }

    addTodo(title, description);
    setTitle('');
    setDescription('');
    navigation.goBack();
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Title</Text>
        <TextInput onChangeText={setTitle} value={title} style={styles.textInput} placeholder='Add your title here' />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Description</Text>
        <TextInput
          onChangeText={setDescription}
          value={description}
          style={styles.descriptionInput}
          placeholder='Add your description here'
          multiline={true}
          textAlignVertical='top'
          numberOfLines={4}
        />
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
    padding: 4,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  descriptionInput: {
    padding: 8,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    height: 120,
    textAlignVertical: 'top',
  },
});
