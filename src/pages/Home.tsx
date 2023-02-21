import { useState } from 'react' 
import './home.css'

const HomePage = () => {
    const [count, setCount] = useState(0)
    
    return (
        <>
        <div className="home">
        <h1> yaaa its home </h1>
        </div>
        <div className='fafosec'>
            <div className='fafo'>
            <p> counter {count} </p>
                <button onClick={() => { setCount(count + 1) }}> test </button>
            </div>
        </div>
        </>
    )    
}


export default HomePage