// export interface TodoState {
//     todos: {
//         id: number;
//         task: string;
//         completed: boolean;
//     }[];
//     addTodo: (task: string) => void;
//     removeTodo: (id: number) => void;
//     loadTodos: () => void;
// }

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
  }
  
export interface TodoState {
    todos: Todo[];
    filter: 'all' | 'active' | 'completed';
    addTodo: (text: string) => void;
    toggleTodo: (id: string) => void;
    removeTodo: (id: string) => void;
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
  }
  