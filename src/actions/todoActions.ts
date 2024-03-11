'use server';

import { nanoid } from 'nanoid';
import { rerender } from 'waku/server';

let todos = [{ id: nanoid(), title: 'buy milk', done: false }];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const readTodos = async () => todos;
export const addTodo = async (formData: FormData) => {
  await sleep(2000);
  const title = formData.get('title');
  if (title === null) {
    throw new Error('Unexpected null title');
  }
  todos = [...todos, { title: title.toString(), id: nanoid(), done: false }];
  rerender('/todo');
};
export const deleteTodo = async (id: string) => {
  await sleep(2000);
  todos = todos.filter((todo) => todo.id !== id);
  rerender('/todo');
};
export const toggleTodo = async (id: string, done: boolean) => {
  await sleep(2000);
  todos = todos.map((todo) => (todo.id === id ? { ...todo, done } : todo));
  rerender('/todo');
};
