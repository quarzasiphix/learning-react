import { useState } from 'react' 

const HomePage = () => {
    const [count, setCount] = useState(0)
    
    return (
        <> <div className='fafosec'>
                <div className='fafo'>
                    <button onClick={() => { setCount(count+ + 1) }}> test </button>
                </div>
            </div>
        <div className="home">
            <h1> yaaa its home</h1>
                <p> {count} </p>
        </div>
        </>
    )    
}


export default HomePage