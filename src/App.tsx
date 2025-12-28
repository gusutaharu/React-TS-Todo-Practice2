import { useState } from 'react';
import './App.css';
import { CompleteArea } from './components/CompleteArea';
import { InCompleteArea } from './components/InCompleteArea';
import { InputArea } from './components/InputArea';
import { Todo } from './types/todo';
import { v4 as uuidv4 } from 'uuid';

export const App = () => {
  const [Todos, setTodos] = useState<Todo[]>([
    { id: uuidv4(), text: 'タスク１', isComplete: false },
    { id: uuidv4(), text: 'タスク２', isComplete: true },
    { id: uuidv4(), text: 'タスク３', isComplete: false },
    { id: uuidv4(), text: 'タスク４', isComplete: true },
  ]);

  return (
    <div className="w-100 m-2">
      <InputArea todos={Todos} setTodos={setTodos} />
      <InCompleteArea todos={Todos} setTodos={setTodos} />
      <CompleteArea todos={Todos} setTodos={setTodos} />
    </div>
  );
};
