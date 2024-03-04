'use client';

export const Delete = ({
  id,
  deleteTodo,
}: {
  id: string;
  deleteTodo: (id: string, formData: FormData) => Promise<void>;
}) => {
  const deleteFormAction = deleteTodo.bind(null, id);
  return (
    <form action={deleteFormAction}>
      <input
        type="submit"
        value="Delete"
        className="rounded-sm bg-black px-2 py-0.5 text-sm text-white"
      />
    </form>
  );
};
