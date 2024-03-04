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
        className="w-4 h-4"
        checked={done}
        onChange={(e) => {
          e.target.form?.requestSubmit();
        }}
      />
    </form>
  );
};
