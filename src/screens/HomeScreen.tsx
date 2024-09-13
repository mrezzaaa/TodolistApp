import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import FilterTodos from '../components/FilterTodos';
import { GlobalStyles } from '../../props/theme';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <View style={GlobalStyles.container}>
        <AddTodo />
        <FilterTodos />
        <TodoList />
      </View>
    </SafeAreaView>
  );
};



export default HomeScreen;