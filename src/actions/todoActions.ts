'use server';

import { nanoid } from 'nanoid';
import type { RenderContext } from 'waku/server';

let todos = [{ id: nanoid(), title: 'buy milk', done: false }];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const readTodos = async () => todos;
export async function addTodo(formData: FormData) {
  await sleep(2000);
  const title = formData.get('title');
  if (title === null) {
    throw new Error('Unexpected null title');
  }
  const newTodo = { title: title.toString(), id: nanoid(), done: false };
  todos = [...todos, newTodo];
  return newTodo;
}
export async function deleteTodo(id: string) {
  await sleep(2000);
  todos = todos.filter((todo) => todo.id !== id);
}
export async function toggleTodo(
  id: string,
  done: boolean
  // formData: FormData
) {
  await sleep(2000);
  todos = todos.map((todo) => (todo.id === id ? { ...todo, done } : todo));
}
