'use client';

export const Check = ({
  id,
  done,
  toggle,
}: {
  id: string;
  done: boolean;
  toggle: (id: string, done: boolean, formData: FormData) => Promise<void>;
}) => {
  const toggleFormAction = toggle.bind(null, id, !done);
  return (
    <form action={toggleFormAction} className="flex">
      <input
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        checked={done}
        onChange={(e) => {
          e.target.form?.requestSubmit();
        }}
      />
    </form>
  );
};
