import { Link } from 'waku';

import { readTodos, addTodo, toggleTodo, deleteTodo } from '../actions/todoActions.js';
import { Counter } from '../components/Counter.js';
import { TopTodos } from '../components/TopTodos.js';

type ServerFunction<T> = T extends (...args: infer A) => infer R ? (...args: A) => R : never;

export const TodoPage = async () => {
  const todos = await readTodos();

  return (
    <div>
      <TopTodos
        todos={todos}
        addTodo={addTodo as unknown as ServerFunction<typeof addTodo>}
        toggle={toggleTodo as unknown as ServerFunction<typeof toggleTodo>}
        deleteTodo={deleteTodo as unknown as ServerFunction<typeof deleteTodo>}
      />
      <Link to="/" className="mt-4 inline-block underline">
        Return home
      </Link>
      <Counter />
    </div>
  );
};
