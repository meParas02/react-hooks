import React, { useCallback, useState } from "react";
import ChildCom from "./child";

const PerentCom = () => {
  const [todo, setTodo] = useState(0);
  const [count, setCount] = useState(0);

  const clickEventOne = () => {
    setCount((count) => count + 1);
  };

  // 2. unessary child called
  //   const clickEvent = () => {
  //     console.log("console");
  //   };

  // now this function is not called anymore
  const clickEvent = useCallback(() => {
    console.log("Callback");
  }, [todo]);

  return (
    <>
      <h4>Memo and callback</h4>
      {/*1. <ChildCom /> */}
      {/* 2. */}
      <ChildCom clickEvent={clickEvent} todo={todo} />
      <button onClick={clickEventOne}>Click</button> {count}
    </>
  );
};

export default PerentCom;
