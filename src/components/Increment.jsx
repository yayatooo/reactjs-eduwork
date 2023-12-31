import React from "react";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterNumber";

const Increment = () => {
  // const [count, setCount] = useState(0);

  // const incrementNumber = () => {
  //   setCount(count + 1);
  // };

  // const decrementNumber = () => {
  //   if (count !== 0) {
  //     setCount(count - 1);
  //   }
  // };

  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="w-6/12 mx-auto flex gap-8 justify-center items-center py-10">
      <h1 className="text-2xl font-semibold text-sky-700">
        Counter Use Redux toolkit :
      </h1>
      <button
        className="text-3xl bg-sky-600 rounded-full text-white font-semibold p-3"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <h1 className="text-4xl font-semibold">{count}</h1>
      <button
        className="text-3xl bg-sky-600 rounded-full text-white font-semibold p-3"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
};

export default Increment;
