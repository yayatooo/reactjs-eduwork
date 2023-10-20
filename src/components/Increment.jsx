import React from "react";
import { useState } from "react";

const Increment = () => {
  const [count, setCount] = useState(0);

  const incrementNumber = () => {
    setCount(count + 1);
  };

  const decrementNumber = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="w-6/12 mx-auto flex gap-8 justify-center items-center">
      <button
        className="text-3xl bg-sky-600 rounded-full text-white font-semibold p-3"
        onClick={decrementNumber}
      >
        -
      </button>
      <h1 className="text-4xl font-semibold">{count}</h1>
      <button
        className="text-3xl bg-sky-600 rounded-full text-white font-semibold p-3"
        onClick={incrementNumber}
      >
        +
      </button>
    </div>
  );
};

export default Increment;
