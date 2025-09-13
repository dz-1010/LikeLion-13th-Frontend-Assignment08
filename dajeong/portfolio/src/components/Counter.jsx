import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
    console.log(count);
  }

  useEffect(() => {
    console.log("count 변경됨: ", count);
  }, [count]);

  return (
    <>
      <button onClick={increase}>증가</button>
      <p>{count}</p>
    </>
  );
}
