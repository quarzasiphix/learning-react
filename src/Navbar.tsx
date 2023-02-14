import  { useState } from 'react'

const Navbar = () => {
    const [link, setLink] = useState('quarza')

    function Links() {
        return <p> {link} </p>
    }
    
    const handleClick = () => {
        if(link == 'niggax') setLink('quarza')
        else setLink('niggax')
    }
    
    return(
        <div className='nav'>
            <div className='navbar'>
                 <Links/>
            </div>
            <div className='test'>
                <button onClick={handleClick}> change </button>
            </div>
        </div>
    )
}

export default Navbar