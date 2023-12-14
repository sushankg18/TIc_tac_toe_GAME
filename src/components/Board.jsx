import React from 'react'
const Board = () => {
    const handleConsole = () => {
        console.log('hey-cliked')
    }
    return (
        <div className='main-container'>
            <div className='main-box'>
                <div className='r-1'>
                    <div onClick={handleConsole} className='square'>X</div>
                    <div onClick={handleConsole} className='square'>0</div>
                    <div onClick={handleConsole} className='square'>X</div>
                </div>
                <div className='r-2'>
                    <div onClick={handleConsole} className='square'>0</div>
                    <div onClick={handleConsole} className='square'>X</div>
                    <div onClick={handleConsole} className='square'>0</div>
                </div>
                <div className='r-3'>
                    <div onClick={handleConsole} className='square'>0</div>
                    <div onClick={handleConsole} className='square'>0</div>
                    <div onClick={handleConsole} className='square'>X</div>
                </div>
            </div>
        </div>
    )
}

export default Board
