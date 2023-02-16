import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout () {
    return (
        <div className="help-layout">
            <h1> help </h1>
            <nav>
                <NavLink to="./faq"> view faq </NavLink>
                <NavLink to="./contact"> contact us </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}