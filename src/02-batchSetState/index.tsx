import React, { useState } from 'react';

const BatchSetState = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log('render');

  return (
    <div>
      <button
        onClick={() => {
          setTimeout(() => {
            setCount1(count1 + 1);
            setCount2(count2 + 1);
          }, 100);
        }}
      >
        点击
      </button>
    </div>
  );
};

export default BatchSetState;
