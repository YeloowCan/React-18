import React, { useState, useEffect, useTransition, ChangeEvent } from 'react';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    // 使用了并发特性，开启并发更新
    startTransition(() => {
      inputValue && setList(new Array(20000).fill(inputValue));
    });
  }, [inputValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input value={inputValue} onChange={handleChange} />
      {isPending ? 'loading' : list.map((_, i) => <div key={i}>{_}</div>)}
    </>
  );
};

export default App;
