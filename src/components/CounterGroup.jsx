import { useState, useRef } from 'react';

export const CounterGroup = () => {
  const [count1, setCount1] = useState(0);
  const count2 = useRef(0);
  const updateCounter1 = () => {
    setCount1(count1 + 1);
    console.log(count1);
  };

  const updateCounter2 = () => {
    count2.current = count2.current + 1;
    console.log(count2);
  };

  return (
    <>
      <p>Use State : {count1}</p>
      <button onClick={() => updateCounter1()}>Add to Counter1</button>
      <p>Use Ref : {count2.current}</p>
      <button onClick={() => updateCounter2()}>Add to Counter2</button>
    </>
  );
};
