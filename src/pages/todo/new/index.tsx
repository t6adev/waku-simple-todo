import { Link } from 'waku';
import { Add } from '../../../components/Add.js';
import { addTodo } from '../../../actions/todoActions.js';

export default async function NewTodoPage() {
  return (
    <div>
      {/* When adding a new todo, nothing happened in this page. */}
      {/* At least, the /todo page is rendered with new todos. */}
      <Add addTodo={addTodo} />
      <Link to="/todo" className="block mt-4 underline">
        Return TODO top
      </Link>
      <Link to="/" className="block mt-4 underline">
        Return home
      </Link>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  };
};
