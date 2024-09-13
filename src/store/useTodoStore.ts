import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  recentlyAddedTodoId: string | null;
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  clearRecentlyAddedTodoId: () => void;
}

const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      filter: 'all',
      recentlyAddedTodoId: null,
      addTodo: (todo) => set((state) => ({
        todos: [todo, ...state.todos],
        recentlyAddedTodoId: todo.id
      })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      setFilter: (filter) => set({ filter }),
      clearRecentlyAddedTodoId: () => set({ recentlyAddedTodoId: null }),
    }),
    {
      name: 'todo-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useTodoStore;