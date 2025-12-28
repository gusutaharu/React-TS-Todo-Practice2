import { Todo } from '../types/todo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const InCompleteArea = (props: Props) => {
  const { todos, setTodos } = props;
  const onClickComplete = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = true;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="border-2 rounded-md border-primary min-h-50 mt-2 py-2 px-4">
      <h4 className="text-gray-600 text-center font-bold">未完了のTODO</h4>
      <ul className="mt-3">
        {todos
          .filter((todos) => !todos.isComplete)
          .map((todo) => (
            <li key={todo.id} className="mt-1">
              {todo.text}
              <button
                className="bg-gray-200 py-1 px-2 rounded-md ml-1 hover:bg-active hover:text-white hover:cursor-pointer"
                onClick={() => onClickComplete(todo.id)}
              >
                完了
              </button>
              <button className="bg-gray-200 py-1 px-2 rounded-md ml-1 hover:bg-active hover:text-white hover:cursor-pointer">
                削除
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
