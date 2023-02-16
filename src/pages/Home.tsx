import { useState } from 'react' 

const HomePage = () => {
    const [count, setCount] = useState(0)
    
    return (
        <div className='home'>
        <h1> yaaa its home</h1>
        <p> {count} </p>
        <button onClick={() => { setCount(count+ + 1) }}> yo</button>
        </div>
    )    
}


export default HomePage