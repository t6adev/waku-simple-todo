'use client';

import { useTransition } from 'react';

import { deleteTodo } from '../actions/todoActions.js';

export const Delete = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();
  const deleteTodoFormAction = async () => {
    startTransition(async () => {
      await deleteTodo(id);
    });
  };
  return (
    <form action={deleteTodoFormAction}>
      <input
        type="submit"
        value="Delete"
        className={`rounded-sm px-2 py-0.5 text-sm text-white ${
          isPending ? 'bg-gray-500' : 'bg-black'
        }`}
      />
    </form>
  );
};
