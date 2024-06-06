import { Check } from './Check.js';
import { Delete } from './Delete.js';

export const Todo = ({ id, title, done }: { id: string; title: string; done: boolean }) => {
  return (
    <div className="flex gap-2">
      <label className="flex items-center gap-2">
        <Check id={id} done={done} />
        <div>{title}</div>
      </label>
      <Delete id={id} />
    </div>
  );
};
