import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext/useCartContext.js"
import "./Nav.css"

export const Nav = () => {
    const { getTotalItems } = useCartContext();

    
    return (
        <nav className="navstyle">
            <ul className="nav-list">
                <li>
                    <Link className="nav-button" to={"/"}>Home</Link>
                </li>
                <li>
                    <Link className="nav-button" to={"/category/carteras"}>Carteras</Link>
                </li>
                <li>
                    <Link className="nav-button" to={"/category/billeteras"}>Billeteras</Link>
                </li>
                <li>
                    <Link className="nav-button">Carrito</Link>
                    {getTotalItems() > 0 && <span>{getTotalItems()}</span>}
                </li>
            </ul>
        </nav>)};

        export default Nav;