'use client';

import { type ComponentProps, useState, useOptimistic } from 'react';
import { Add } from '../components/Add.js';
import { Todo } from '../components/Todo.js';

type Action =
  | { type: 'add'; title: string }
  | { type: 'delete'; id: string }
  | { type: 'toggle'; id: string; nextDone: boolean };

export const TopTodos = ({
  todos,
  addTodo,
  toggle,
  deleteTodo,
}: { todos: { id: string; title: string; done: boolean }[] } & ComponentProps<typeof Add> &
  Pick<ComponentProps<typeof Todo>, 'toggle' | 'deleteTodo'>) => {
  const [todosState, setTodosState] = useState(todos);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    todosState,
    (state, action: Action) => {
      switch (action.type) {
        case 'add':
          return [...state, { id: 'dummy', title: action.title, done: false }];
        case 'delete':
          return state.map((todo) =>
            todo.id === action.id ? { ...todo, title: `${todo.title} (deleting...)` } : todo
          );
        case 'toggle':
          return state.map((todo) =>
            todo.id === action.id ? { ...todo, done: action.nextDone } : todo
          );
        default:
          return state;
      }
    }
  );
  const addTodoWithState = async (formData: FormData) => {
    addOptimisticMessage({ type: 'add', title: formData.get('title')?.toString() ?? '' });
    const newTodo = await addTodo(formData);
    setTodosState((s) => [...s, newTodo]);
    return newTodo;
  };
  const toggleWithState = async (id: string, nextDone: boolean, formData: FormData) => {
    addOptimisticMessage({ type: 'toggle', id, nextDone });
    await toggle(id, nextDone, formData);
    setTodosState((s) => s.map((todo) => (todo.id === id ? { ...todo, done: nextDone } : todo)));
  };
  const deleteWithState = async (id: string, formData: FormData) => {
    addOptimisticMessage({ type: 'delete', id });
    await deleteTodo(id, formData);
    setTodosState((s) => s.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <Add addTodo={addTodoWithState} />
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Todos</h2>
        {optimisticMessages.map((todo) => (
          <Todo key={todo.id} {...todo} toggle={toggleWithState} deleteTodo={deleteWithState} />
        ))}
      </div>
    </>
  );
};
