import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';
import AddTodo from '../src/components/AddTodo';


Alert.alert = jest.fn();


const mockAddTodo = jest.fn();
jest.mock('../src/store/useTodoStore', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    addTodo: mockAddTodo,
  })),
}));

describe('AddTodo', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<AddTodo />);
    expect(getByPlaceholderText('Add a new todo...')).toBeTruthy();
  });

  it('calls addTodo when text is entered and button is pressed', () => {
    const { getByPlaceholderText, getByTestId } = render(<AddTodo />);
    const input = getByPlaceholderText('Add a new todo...');
    
    fireEvent.changeText(input, 'New Todo');

    const button = getByTestId('add-button');
    fireEvent.press(button);

    expect(mockAddTodo).toHaveBeenCalledWith(expect.objectContaining({
      text: 'New Todo',
      completed: false,
    }));
  });

  it('does not call addTodo and shows alert when input is empty', () => {
    const { getByTestId } = render(<AddTodo />);
    const button = getByTestId('add-button');

    fireEvent.press(button);

    expect(mockAddTodo).not.toHaveBeenCalled();
    expect(Alert.alert).toHaveBeenCalledWith(
      'Ohh! We got issue',
      'Please fill the task name before adding it'
    );
  });
});