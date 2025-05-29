import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function DetailsScreen({ route }) {
  const navigation = useNavigation();
  const { item, toggleIsDone } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: item.title });
  }, []);

  function handlePress() {
    toggleIsDone(item);
    navigation.goBack();
  }

  return (
    <View style={{ alignItems: 'center', marginTop: 32 }}>
      <Text>{item.description}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text
          style={{
            color: 'white',
            padding: 8,
            fontWeight: 600,
            borderRadius: 8,
            backgroundColor: '#007AFF',
            marginTop: 32,
          }}
        >
          Mark as done
        </Text>
      </TouchableOpacity>
    </View>
  );
}
