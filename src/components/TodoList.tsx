import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import TodoItem from './TodoItem';
import useTodoStore from '../store/useTodoStore';
import { GlobalStyles, Colors } from '../../props/theme';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const TodoList: React.FC = () => {
  const { todos, filter, toggleTodo, removeTodo } = useTodoStore();
  const listHeight = useSharedValue(0);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  useEffect(() => {
    listHeight.value = withTiming(filteredTodos.length * 65, { duration: 300 });
  }, [filteredTodos.length]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: listHeight.value,
    };
  });

  return (
    <View style={GlobalStyles.container}>
      <AnimatedFlatList
        data={filteredTodos}
        renderItem={({item}) => (
          <TodoItem
            id={item.id}
            text={item.text}
            completed={item.completed}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          /> 
        )}
        keyExtractor={item => item.id}
        style={[GlobalStyles.list, animatedStyle]}
      />
    </View>
  );
};

export default TodoList;