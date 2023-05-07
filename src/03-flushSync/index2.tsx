import React, { useState } from 'react';
import { flushSync } from 'react-dom';

const FlushSync2 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log('render');

  return (
    <div>
      <button
        onClick={() => {
          flushSync(() => {
            setCount1(count1 + 1);
            setCount2(count2 + 1);
          });
        }}
      >
        点击
      </button>
    </div>
  );
};

export default FlushSync2;
