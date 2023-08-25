import React, { useState } from 'react';

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const restart = () => {
    setCount(initialCount);
  };

  const switchSign = () => {
    setCount(-count);
  };

  return (
    <div className="text-center">
      <h1 className="text-5xl mb-2">Count:</h1>
      <h3  data-testid="count" className='text-3xl font-bold mb-5'>{count}</h3>
      <div className="flex justify-center items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-4"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-4"
          onClick={restart}
        >
          Restart
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={switchSign}
        >
          Switch Sign
        </button>
      </div>
    </div>
  );
};

export default Counter;