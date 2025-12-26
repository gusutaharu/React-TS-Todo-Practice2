import './App.css';
import { CompleteArea } from './components/CompleteArea';
import { InCompleteArea } from './components/InCompleteArea';
import { InputArea } from './components/InputArea';

export const App = () => {
  return (
    <div className="w-100 m-2">
      <InputArea />
      <InCompleteArea />
      <CompleteArea />
    </div>
  );
};
