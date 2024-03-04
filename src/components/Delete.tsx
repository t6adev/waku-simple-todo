'use client';

import { useTransition } from 'react';

export const Delete = ({
  id,
  deleteTodo,
}: {
  id: string;
  deleteTodo: (id: string, formData: FormData) => Promise<void>;
}) => {
  const deleteTodoWithData = deleteTodo.bind(null, id);
  const [isPending, startTransition] = useTransition();
  const deleteTodoFormAction = async (formData: FormData) => {
    startTransition(async () => {
      await deleteTodoWithData(formData);
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
        disabled={isPending}
      />
    </form>
  );
};
