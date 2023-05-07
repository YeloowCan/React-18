import React, { useEffect, useState } from 'react';

const BatchSetState2 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // useEffect(() => {
  //   document.body.addEventListener('click', () => {
  //     setCount1((count) => count + 1);
  //     setCount2((count) => count + 1);
  //   });
  //   // 在原生js事件中不会进行批处理
  // }, []);

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

export default BatchSetState2;
