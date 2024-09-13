import { act, renderHook } from '@testing-library/react-hooks';
import useTodoStore from '../src/store/useTodoStore';

describe('useTodoStore', () => {
  it('should add a todo', () => {
    const { result } = renderHook(() => useTodoStore());
    
    act(() => {
      result.current.addTodo({ id: '1', text: 'Test Todo', completed: false });
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0]).toEqual({ id: '1', text: 'Test Todo', completed: false });
  });

  it('should toggle a todo', () => {
    const { result } = renderHook(() => useTodoStore());
    
    act(() => {
      result.current.addTodo({ id: '1', text: 'Test Todo', completed: false });
      result.current.toggleTodo('1');
    });

    expect(result.current.todos[0].completed).toBe(true);
  });

  it('should remove a todo', () => {
    const { result } = renderHook(() => useTodoStore());
    
    act(() => {
      result.current.addTodo({ id: '1', text: 'Test Todo', completed: false });
      result.current.removeTodo('1');
    });

    expect(result.current.todos).toHaveLength(0);
  });

  it('should set filter', () => {
    const { result } = renderHook(() => useTodoStore());
    
    act(() => {
      result.current.setFilter('active');
    });

    expect(result.current.filter).toBe('active');
  });
});