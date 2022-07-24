import { useState, useEffect, useRef } from "react";

function UseRefHook() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h4>Current Value: {inputValue} ---- Previous Value: {previousInputValue.current}</h4>
    </>
  );
}

export default UseRefHook;
