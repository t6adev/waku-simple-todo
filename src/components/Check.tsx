'use client';

import { useTransition } from 'react';

import { toggleTodo } from '../actions/todoActions.js';

export const Check = ({ id, done }: { id: string; done: boolean }) => {
  const [isPending, startTransition] = useTransition();
  const toggleFormAction = async (formData: FormData) => {
    startTransition(async () => {
      await toggleTodo(id, formData.get('done') === 'on');
    });
  };
  return (
    <form action={toggleFormAction} className="flex">
      {isPending ? (
        <span className="animate-spin">↻</span>
      ) : (
        <input
          name="done"
          type="checkbox"
          className="w-4 h-4"
          checked={done}
          onChange={(e) => {
            e.target.form?.requestSubmit();
          }}
        />
      )}
    </form>
  );
};
