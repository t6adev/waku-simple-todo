'use server';

import { nanoid } from 'nanoid';
import type { RenderContext } from 'waku/server';

let todos = [{ id: nanoid(), title: 'buy milk', done: false }];

export const readTodos = async () => todos;
export async function addTodo(this: RenderContext, formData: FormData) {
  const title = formData.get('title');
  if (title === null) {
    throw new Error('Unexpected null title');
  }
  todos = [...todos, { title: title.toString(), id: nanoid(), done: false }];
  this.rerender('/todo');
}
export async function deleteTodo(this: RenderContext, id: string) {
  todos = todos.filter((todo) => todo.id !== id);
  this.rerender('/todo');
}
export async function toggleTodo(
  this: RenderContext,
  id: string,
  done: boolean
  // formData: FormData
) {
  todos = todos.map((todo) => (todo.id === id ? { ...todo, done } : todo));
  this.rerender('/todo');
}
