'use server';

import { nanoid } from 'nanoid';
import type { RenderContext } from 'waku/server';

let todos = [{ id: nanoid(), title: 'buy milk', done: false }];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const readTodos = async () => todos;
export async function addTodo(this: RenderContext, formData: FormData) {
  await sleep(2000);
  const title = formData.get('title');
  if (title === null) {
    throw new Error('Unexpected null title');
  }
  todos = [...todos, { title: title.toString(), id: nanoid(), done: false }];
  this.rerender('/todo');
}
export async function deleteTodo(this: RenderContext, id: string) {
  await sleep(2000);
  todos = todos.filter((todo) => todo.id !== id);
  this.rerender('/todo');
}
export async function toggleTodo(
  this: RenderContext,
  id: string,
  done: boolean
  // formData: FormData
) {
  await sleep(2000);
  todos = todos.map((todo) => (todo.id === id ? { ...todo, done } : todo));
  this.rerender('/todo');
}
