'use client';

import { useRef, useTransition } from 'react';

import { addTodo } from '../actions/todoActions.js';

export const Add = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const addTodoFormAction = async (formData: FormData) => {
    startTransition(async () => {
      await addTodo(formData);
      formRef.current?.reset();
    });
  };
  return (
    <div className="flex gap-2 items-center">
      <h2 className="text-md font-semibold">New Todo</h2>
      <form action={addTodoFormAction} className="flex-1 flex gap-2" ref={formRef}>
        <input
          type="text"
          name="title"
          placeholder="Add new Todo"
          className={`rounded-sm bg-gray-100 px-2 py-0.5 text-sm ${
            isPending ? 'text-gray-300' : 'text-gray-600'
          }`}
          disabled={isPending}
        />
        <input
          type="submit"
          value="Add"
          className={`rounded-sm px-2 py-0.5 text-sm text-white ${
            isPending ? 'bg-gray-500' : 'bg-black'
          }`}
          disabled={isPending}
        />
      </form>
    </div>
  );
};
