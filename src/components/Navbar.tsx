
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (<>
        <nav>
            <ul className="navLinks">

                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/animals">Animals</Link>
                </li>

            </ul></nav ></>)
}