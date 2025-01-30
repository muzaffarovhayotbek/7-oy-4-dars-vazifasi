import React from 'react';
import Select from './components/Select';

function App() {
  return (
    <div className="container mx-auto mt-4 flex items-center gap-4">
      <Select></Select>
      <button className='bg-red-600 text-white rounded-md cursor-pointer'>Register</button>
    </div>
  );
}

export default App;
