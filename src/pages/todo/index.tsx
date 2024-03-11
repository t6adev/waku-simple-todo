import { Link } from 'waku';
import { Counter } from '../../components/Counter.js';
import { Add } from '../../components/Add.js';
import { Todo } from '../../components/Todo.js';
import { readTodos, addTodo } from '../../actions/todoActions.js';

export default async function TodoPage() {
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
      <Counter />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  };
};
