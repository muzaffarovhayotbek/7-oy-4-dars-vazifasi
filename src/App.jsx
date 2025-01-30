import React from 'react';
import Select from './components/Select';

function App() {
  return (
    <div className="container mx-auto mt-2 flex flex-col justify-center items-center  p-4 ">
      <Select></Select>
      <button className='bg-red-600 text-white rounded-md cursor-pointer mt-3'>Register</button>
    </div>
  );
}

export default App;
