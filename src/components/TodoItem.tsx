import React, { useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, withSpring, runOnJS } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalStyles, Colors } from '../../props/theme';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle, onRemove }) => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 300 });
    scale.value = withSpring(1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  const handleRemove = () => {
    opacity.value = withTiming(0, { duration: 300 }, (finished) => {
      if (finished) {
        runOnJS(onRemove)(id);
      }
    });
    scale.value = withTiming(0.8);
  };

  return (
    <Animated.View style={[GlobalStyles.todoItem, animatedStyle]}>
      <TouchableOpacity onPress={() => onToggle(id)} style={GlobalStyles.todoContent} testID='todo-item'>
        <Icon
          name={completed ? 'checkmark-circle' : 'ellipse-outline'}
          size={24}
          color={completed ? Colors.primary : Colors.textSecondary}
        />
        <Text style={[GlobalStyles.todoText, completed && GlobalStyles.completedTodoText]}>{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRemove} style={GlobalStyles.deleteButton} testID='remove-todo'>
        <Icon name="trash-outline" size={24} color={Colors.accent} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default TodoItem;