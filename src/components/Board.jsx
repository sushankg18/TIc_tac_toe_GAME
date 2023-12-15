import React,{useState} from 'react'
const Board = () => {
    const [signal, setSignal] = useState('')

    

    const handleConsole = () => {
        setSignal('X')
    }
    return (
        <div className='main-container'>
            <div className='main-box'>
                <div className='r-1'>
                    <div onClick={handleConsole} className='square'>{signal}</div>
                    <div onClick={handleConsole} className='square'>{signal}</div>
                    <div onClick={handleConsole} className='square'>{signal}</div>
                </div>
                <div className='r-2'>
                    <div onClick={handleConsole} className='square'>{signal}</div>
                    <div onClick={handleConsole} className='square'>{signal}</div>
                    <div onClick={handleConsole} className='square'>{signal}</div>
                </div>
                <div className='r-3'>
                    <div onClick={handleConsole} className='square'>{signal}</div>
                    <div onClick={handleConsole} className='square'>{signal}</div>
                    <div onClick={handleConsole} className='square'>{signal}</div>
                </div>
            </div>
        </div>
    )
}

export default Board
