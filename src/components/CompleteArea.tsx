import { Todo } from '../types/todo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const CompleteArea = (props: Props) => {
  const { todos, setTodos } = props;
  const onClickBack = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = false;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <div className="rounded-md bg-secondary min-h-50 mt-2 py-2 px-4">
      <h4 className="text-gray-600 text-center font-bold">完了のTODO</h4>
      <ul className="mt-3">
        {todos
          .filter((todos) => todos.isComplete)
          .map((todo) => (
            <li key={todo.id} className="mt-1">
              {todo.text}
              <button
                className="bg-gray-200 py-1 px-2 rounded-md ml-1 hover:bg-active hover:text-white hover:cursor-pointer"
                onClick={() => onClickBack(todo.id)}
              >
                戻す
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
