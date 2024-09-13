import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import useTodoStore from '../store/useTodoStore';
import { GlobalStyles } from '../../props/theme';

const FilterTodos: React.FC = () => {
  const { filter, setFilter } = useTodoStore();

  const filters: ('all' | 'active' | 'completed')[] = ['all', 'active', 'completed'];

  return (
    <View style={GlobalStyles.filterContainer}>
      {filters.map((f) => (
        <TouchableOpacity
          key={f}
          style={[GlobalStyles.filterButton, filter === f && GlobalStyles.filterButtonActive]}
          onPress={() => setFilter(f)}
        >
          <Text style={GlobalStyles.filterButtonText}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FilterTodos;