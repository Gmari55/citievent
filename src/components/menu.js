import { Link } from "react-router-dom";

export function Menu() {
    return (
        <nav>
            <ul>
               
                <li>
                    <Link to="/cities">cities</Link>
                </li>
                <li>
                    <Link to="/add-citi">Create New Events</Link>
                </li>
                
            </ul>
        </nav>
    );
}