import React from 'react';

const Test = () => {
  return (
    <div className='bg-primary min-h-screen flex flex-col'>
      <div className='flex-grow flex items-center p-3 gap-3 overflow-x-hidden'>
        <div className='bg-secondary text-accent flex-grow-0 w-40'>1</div>
        <div className='bg-secondary text-accent flex-grow'>2</div>
      </div>
      <div className='bg-secondary text-accent self-end'>3</div>
    </div>
  );
};

export default Test;
