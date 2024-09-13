import { StyleSheet } from 'react-native';

export const Colors = {
  background: '#1E1E2E',
  surface: '#2A2A3F',
  primary: '#008c69',
  secondary: '#87878f',
  text: '#FFFFFF',
  textSecondary: '#8E8EA0',
  accent: '#FF5252',
  todoItem: '#1d142c',
};

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: Colors.surface,
    borderRadius: 25,
    paddingHorizontal: 20,
    color: Colors.text,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: Colors.secondary,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterButton: {
    flex:1,
    flexDirection:'row',
    margin:5,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 20,
    backgroundColor: Colors.surface,
  },
  filterButtonActive: {
    backgroundColor: Colors.primary,
  },
  filterButtonText: {
    color: Colors.text,
    fontSize: 16,
  },
  todoItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.todoItem,
    padding: 10,
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
  todoContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding:10
  },
  todoText: {
    flex: 1,
    color: Colors.text,
    fontSize: 16,
    marginLeft: 10,
  },
  completedTodoText: {
    textDecorationLine: 'line-through',
    color: Colors.textSecondary,
  },
  deleteButton: {
    padding: 5,
  },
  checkboxOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary,
  },
  list: {
    width: '100%',
  },
});