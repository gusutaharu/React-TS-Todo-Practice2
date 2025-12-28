import { useForm } from 'react-hook-form';
import { Todo } from '../types/todo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const InputArea = (props: Props) => {
  const { todos, setTodos } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Todo>();

  const onSubmit = (data: Todo) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: data.text,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
    reset();
  };

  return (
    <div>
      <div className="bg-primary rounded-lg p-2 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="TODOを入力"
            className="bg-white rounded-md py-1 px-3"
            {...register('text', { required: '空白です' })}
          />
          <button
            type="submit"
            className="bg-gray-200 py-1 px-2 rounded-md ml-1 hover:bg-active hover:text-white hover:cursor-pointer"
          >
            追加
          </button>
        </form>
      </div>
      <p className="text-red-600 text-center">{errors.text?.message}</p>
    </div>
  );
};
