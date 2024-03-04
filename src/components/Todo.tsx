import { type ComponentProps } from 'react';
import { Check } from './Check.js';
import { Delete } from './Delete.js';

export const Todo = ({
  id,
  title,
  done,
  toggle,
  deleteTodo,
}: { id: string; title: string; done: boolean } & Pick<ComponentProps<typeof Check>, 'toggle'> &
  Pick<ComponentProps<typeof Delete>, 'deleteTodo'>) => {
  return (
    <div className="flex gap-2">
      <label className="flex items-center gap-2">
        <Check id={id} done={done} toggle={toggle} />
        <div>{title}</div>
      </label>
      <Delete id={id} deleteTodo={deleteTodo} />
    </div>
  );
};
