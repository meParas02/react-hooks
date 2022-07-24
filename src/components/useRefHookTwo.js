import React, { useEffect, useRef } from "react";

const UseRefHookTwo = () => {
  const inputElRef = useRef(null);

  useEffect(() => {
    inputElRef.current.focus();
  }, []);

  return (
    <div>
        <h4>Use refs</h4>
      <input defaultValue={"Won't focus"} /> &nbsp;
      <input ref={inputElRef} defaultValue={"Will focus"} />
    </div>
  );
};

export default UseRefHookTwo;
