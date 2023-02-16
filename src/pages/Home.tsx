import { useState } from 'react' 

const HomePage = () => {
    const [count, setCount] = useState(0)
    
    return (
        <div className='home'>
            <h1> yaaa its home</h1>
            <div className='fafosec'>
                <div className='fafo'>
                <p> {count} </p>
                    <button onClick={() => { setCount(count+ + 1) }}> test </button>
                </div>
            </div>
        </div>
    )    
}


export default HomePage