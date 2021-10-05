import { Link } from "react-router-dom"

export default function Dashboard () {
    return (
        <div>
            <header>
                <Link to='/'>Home</Link>
            </header>
            <h1>Dashboard</h1>
        </div>
    )
}