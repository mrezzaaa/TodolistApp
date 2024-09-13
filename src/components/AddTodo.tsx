import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useTodoStore from '../store/useTodoStore';
import { GlobalStyles, Colors } from '../../props/theme';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const {addTodo} = useTodoStore();

  const handleAddTodo = () => {
    if (text.trim()) {
      const newTodo = { id: Date.now().toString(), text: text.trim(), completed: false };
      addTodo(newTodo);
      setText('');
    } else {
      Alert.alert('Ohh! We got issue', 'Please fill the task name before adding it');
    }
  };

  return (
    <View style={GlobalStyles.inputContainer}>
      <TextInput
        style={GlobalStyles.input}
        placeholder="Add a new todo..."
        placeholderTextColor={Colors.textSecondary}
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleAddTodo}
      />
      <TouchableOpacity style={GlobalStyles.addButton} onPress={handleAddTodo} testID="add-button">
        <Icon name="add" size={24} color={Colors.text} />
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;