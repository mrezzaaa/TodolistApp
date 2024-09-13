import React from 'react';
import { render } from '@testing-library/react-native';
import TodoList from '../src/components/TodoList';

const mockTodos = [
  { id: '1', text: 'Todo 1', completed: false },
  { id: '2', text: 'Todo 2', completed: true },
];

jest.mock('../src/store/useTodoStore', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    todos: mockTodos,
    filter: 'all',
    toggleTodo: jest.fn(),
    removeTodo: jest.fn(),
  })),
}));

describe('TodoList', () => {
  it('renders todos correctly', () => {
    const { getByText } = render(<TodoList />);
    expect(getByText('Todo 1')).toBeTruthy();
    expect(getByText('Todo 2')).toBeTruthy();
  });

  // Add more tests for filtering logic if needed
});