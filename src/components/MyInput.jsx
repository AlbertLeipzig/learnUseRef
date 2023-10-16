import { useRef } from 'react';
export const MyInput = () => {
  const inputRef = useRef(null);
  /* console.log(inputRef); */

  const updateFocusState = () => {
    inputRef.current.focus();
    console.log(inputRef);
  };

  return (
    <div className="my-input">
      <label htmlFor="">
        Update
        <input type="text" ref={inputRef} />
        <button onClick={() => updateFocusState()}>Focus to this input</button>
      </label>
    </div>
  );
};
