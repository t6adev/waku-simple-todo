import { Link } from 'waku';
import { Add } from '../components/Add.js';
import { Todo } from '../components/Todo.js';
import { readTodos, addTodo } from '../actions/todoActions.js';

export const TodoPage = async () => {
  const todos = await readTodos();

  return (
    <div>
      <Add addTodo={addTodo} />
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Todos</h2>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </div>
      <Link to="/" className="mt-4 inline-block underline">
        Return home
      </Link>
    </div>
  );
};
