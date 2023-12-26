import React, { useState } from 'react';

const Board = () => {
  const [signals, setSignals] = useState(Array(9).fill(''));

  const handleConsole = (index) => {
    const newSignals = [...signals];
    newSignals[index] = newSignals[index] === 'X' ? 'O' : 'X';
    setSignals(newSignals);
  };
  

  return (
    <div className='main-container'>
      <div className='main-box'>
        <div className='r-1'>
          {signals.slice(0, 3).map((signal, index) => (
            <div key={index} onClick={() => handleConsole(index)} className='square'>
              {signal}
            </div>
          ))}
        </div>
        <div className='r-2'>
          {signals.slice(3, 6).map((signal, index) => (
            <div key={index} onClick={() => handleConsole(index + 3)} className='square'>
              {signal}
            </div>
          ))}
        </div>
        <div className='r-3'>
          {signals.slice(6, 9).map((signal, index) => (
            <div key={index} onClick={() => handleConsole(index + 6)} className='square'>
              {signal}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
