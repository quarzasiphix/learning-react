import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout () {
    return (
        <> <div className='navbar'>
            <NavLink to="/"> home </NavLink>                
            <NavLink to="/blogs"> blogs </NavLink>
            <NavLink to="/help"> help </NavLink>
        </div>
        <main>
            <Outlet />
        </main>
    </>
    )
}
 