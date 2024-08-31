import { useRef } from "react";

const Input = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  

  const referenceHandle1 = () => {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "#fc8f00";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  };
  const referenceHandle2 = () => {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "#fc8f00";
    inputRef3.current.style.backgroundColor = "";
  };
  const referenceHandle3 = () => {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "#fc8f00";
  };
  

  return (
    <>
      <input ref={inputRef1} type="text" />
      <button onClick={referenceHandle1}>Click Me</button><br />
      <input ref={inputRef2} type="text" />
      <button onClick={referenceHandle2}>Click Me</button><br />
      <input ref={inputRef3} type="text" />
      <button onClick={referenceHandle3}>Click Me</button>
    </>
  );
};

export default Input;
