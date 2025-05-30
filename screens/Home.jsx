import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, FlatList, SectionList } from 'react-native';
import { useTodo } from '../context/TodoContext';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const { todoList, finishedTodo, toggleIsDone } = useTodo();
  const navigation = useNavigation();

  function handlePress(item) {
    navigation.navigate('Details', { item: item, toggleIsDone: toggleIsDone });
  }

  function Todo({ item }) {
    return (
      <TouchableOpacity onPress={() => handlePress(item)} style={styles.wrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Entypo name='chevron-thin-right' size={16} />
      </TouchableOpacity>
    );
  }

  function FinishedTodoItem({ item }) {
    return (
      <TouchableOpacity style={{ backgroundColor: 'white', padding: 8, marginVertical: 4, borderRadius: 8 }}>
        <Text style={{ fontWeight: 600, color: 'gray', textDecorationLine: 'line-through' }}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ padding: 8, gap: 8 }}>
      <View>
        <FlatList
          style={styles.list}
          data={todoList}
          renderItem={({ item }) => <Todo item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <Text style={{ textAlign: 'center', marginTop: 32, marginBottom: 8 }}>Finished Tasks</Text>
        {/* <FlatList
          style={styles.list}
          data={finishedTodo}
          renderItem={({ item }) => <FinishedTodoItem item={item} />}
          keyExtractor={(item) => item.id}
        /> */}
        <SectionList
          sections={[
            {
              data: finishedTodo,
            },
          ]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FinishedTodoItem item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    marginVertical: 4,
  },
  title: {
    fontWeight: 600,
  },
});
