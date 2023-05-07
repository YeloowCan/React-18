import React from 'react';
import BatchSetState from './02-batchSetState';
import FlushSync from './03-flushSync';
import FlushSync2 from './03-flushSync/index2';

function App() {
  return (
    <div>
      <BatchSetState />
      <FlushSync />
      <FlushSync2 />
    </div>
  );
}

export default App;
