import BatchSetState from './02-batchSetState';
import FlushSync from './03-flushSync';
import FlushSync2 from './03-flushSync/index2';
import StartTransition from './04-startTransition';

function App() {
  return (
    <div>
      <BatchSetState />
      <FlushSync />
      <FlushSync2 />
      <StartTransition />
    </div>
  );
}

export default App;
