'use client';

import { useRef, useTransition } from 'react';

export const Add = ({
  addTodo,
}: {
  addTodo: (formData: FormData) => Promise<{ id: string; title: string; done: boolean }>;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const addTodoFormAction = async (formData: FormData) => {
    startTransition(async () => {
      formRef.current?.reset();
      await addTodo(formData);
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
          className="rounded-sm bg-gray-100 px-2 py-0.5 text-sm text-gray-600"
        />
        <input
          type="submit"
          value="Add"
          className="rounded-sm px-2 py-0.5 text-sm text-white bg-black"
        />
        {isPending && <span className="animate-spin">↻</span>}
      </form>
    </div>
  );
};
