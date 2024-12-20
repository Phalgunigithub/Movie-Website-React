import { Link } from "react-router-dom"
import "../css/Navbar.css"
export function Navbar(){
    return(
        <nav className="navbar">

            <div className="navbar_brand">
                <Link to="/" >Movie App</Link>
            </div>

            <div className="navbar_links">
                <Link to="/" className="nav_link">Home</Link>
                <Link to="/favorites" className="nav_link">Favorites</Link>
            </div>
            
        </nav>
    )
}