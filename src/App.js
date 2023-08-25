import React from 'react';
import Counter from './components/counter/Counter';

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Counter initialCount={0} />
    </div>
  );
};

export default App;