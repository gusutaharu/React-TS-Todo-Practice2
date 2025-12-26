import { CompleteArea } from './components/CompleteArea';
import { InCompleteArea } from './components/InCompleteArea';
import { InputArea } from './components/InputArea';

export const App = () => {
  return (
    <div>
      <InputArea />
      <InCompleteArea />
      <CompleteArea />
    </div>
  );
};
