import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import AddScreen from './screens/Add';
import DetailsScreen from './screens/Details';
import { Button } from 'react-native';
import TodoContextProvider from './context/TodoContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TodoContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            component={HomeScreen}
            name='Home'
            options={({ navigation }) => ({
              title: 'Todo List',
              headerRight: () => <Button title='Add' onPress={() => navigation.navigate('Add')} />,
            })}
          />
          <Stack.Screen name='Add' options={{ title: 'Add Todo Item' }} component={AddScreen} />
          <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoContextProvider>
  );
}
