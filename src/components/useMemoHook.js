import React, { useMemo, useState } from "react";

const UseMemoCom = () => {
  const [todo, setTodo] = useState(0);
  const [count, setCount] = useState(0);

  const clickHandle = useMemo(() => {
    return (
      <h3>
        This is call memo function's html - {count} - {todo}
      </h3>
    );
  }, [todo]);

  return (
    <>
      {clickHandle}
      <h4>This is normal {count}</h4>
      <button onClick={()=>{setCount(count + 1)}}>Click</button>&nbsp;
      <button onClick={()=>{setTodo(todo + 1)}}>Memo Click</button>
    </>
  );
};



// usememo is use for specific render component's part
// not like useEffect, its render whole component

export default UseMemoCom;
