import { Check } from './Check.js';
import { toggleTodo, deleteTodo } from '../actions/todoActions.js';
import { Delete } from './Delete.js';

type ServerFunction<T> = T extends (...args: infer A) => infer R ? (...args: A) => R : never;

export const Todo = ({ id, title, done }: { id: string; title: string; done: boolean }) => {
  return (
    <div className="flex gap-2">
      <label className="flex items-center gap-2">
        <Check
          id={id}
          done={done}
          toggle={toggleTodo as unknown as ServerFunction<typeof toggleTodo>}
        />
        <div>{title}</div>
      </label>
      <Delete id={id} deleteTodo={deleteTodo as unknown as ServerFunction<typeof deleteTodo>} />
    </div>
  );
};
