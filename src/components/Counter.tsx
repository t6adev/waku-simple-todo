'use client';

import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="mt-8 flex gap-2 p-4 border border-gray-400">
      <div>Count: {count}</div>
      <button
        className="rounded-sm bg-black px-2 py-0.5 text-sm text-white"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};
