import { useState } from 'react'
import './index.css'


const App = () => {
  const [blogs, setBlogs] = useState([
    { title: 'site', body: 'sup', author: 'me', id: 1},
    { title: 'niggas', body: 'wazaa sup', author: 'niggame', id: 2},
    { title: 'test e nigga', body: 'wazaa sup body', author: 'niggers', id: 3 }
  ])
  return(
    <div className='home'>
      { blogs.map((blog) => (
        <div className="blog-preview">
          <h2>{blog.title}</h2>
          <p> author { blog.author}</p>
        </div>
      ))}
    </div>
  )
  /*
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
  */
}

export default App
