import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            <h1>
                page not found
            </h1>

            <p> go <Link to="/"> home </Link></p>
        </div>
    )
}