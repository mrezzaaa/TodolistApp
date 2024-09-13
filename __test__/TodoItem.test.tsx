import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoItem from '../src/components/TodoItem';

describe('TodoItem', () => {
  const mockTodo = { id: '1', text: 'Test Todo', completed: false };
  const mockToggle = jest.fn();
  const mockRemove = jest.fn();

  it('renders correctly', () => {
    const { getByText } = render(
      <TodoItem
        id={mockTodo.id}
        text={mockTodo.text}
        completed={mockTodo.completed}
        onToggle={mockToggle}
        onRemove={mockRemove}
      />
    );
    expect(getByText('Test Todo')).toBeTruthy();
  });

  it('calls onToggle when pressed', () => {
    const { getByTestId } = render(
      <TodoItem
        id={mockTodo.id}
        text={mockTodo.text}
        completed={mockTodo.completed}
        onToggle={mockToggle}
        onRemove={mockRemove}
      />
    );
    fireEvent.press(getByTestId('todo-item'));
    expect(mockToggle).toHaveBeenCalledWith(mockTodo.id);
  });

  it('calls onRemove when remove button is pressed', () => {
    const { getByTestId } = render(
      <TodoItem
        id={mockTodo.id}
        text={mockTodo.text}
        completed={mockTodo.completed}
        onToggle={mockToggle}
        onRemove={mockRemove}
      />
    );
    fireEvent.press(getByTestId('remove-todo'));
    expect(mockRemove).toHaveBeenCalledWith(mockTodo.id);
  });
});