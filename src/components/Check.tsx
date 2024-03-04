'use client';

import { useTransition } from 'react';

export const Check = ({
  id,
  done,
  toggle,
}: {
  id: string;
  done: boolean;
  toggle: (id: string, done: boolean, formData: FormData) => Promise<void>;
}) => {
  const toggleWithData = toggle.bind(null, id, !done);
  const [isPending, startTransition] = useTransition();
  const toggleFormAction = async (formData: FormData) => {
    startTransition(async () => {
      await toggleWithData(formData);
    });
  };
  return (
    <form action={toggleFormAction} className="relative">
      <div className={`absolute -left-4 ${isPending ? 'block' : 'hidden'}`}>
        <div className="animate-spin">↻</div>
      </div>
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => {
          e.target.form?.requestSubmit();
        }}
      />
    </form>
  );
};
