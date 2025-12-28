import { useState } from 'react';
import './App.css';
import { CompleteArea } from './components/CompleteArea';
import { InCompleteArea } from './components/InCompleteArea';
import { InputArea } from './components/InputArea';
import { Todo } from './types/todo';

export const App = () => {
  const [Todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'タスク１', isComplete: false },
    { id: 2, text: 'タスク２', isComplete: true },
    { id: 3, text: 'タスク３', isComplete: false },
    { id: 4, text: 'タスク４', isComplete: true },
  ]);

  return (
    <div className="w-100 m-2">
      <InputArea todos={Todos} setTodos={setTodos} />
      <InCompleteArea todos={Todos.filter((todo) => !todo.isComplete)} />
      <CompleteArea todos={Todos.filter((todo) => todo.isComplete)} />
    </div>
  );
};
