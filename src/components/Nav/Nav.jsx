import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext/useCartContext.js"
import "./Nav.css"

export const Nav = () => {
    const { getTotalItems } = useCartContext();

    
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/category/carteras"}>Carteras</Link>
                </li>
                <li>
                    <Link to={"/category/billeteras"}>Billeteras</Link>
                </li>
                <li>
                    <Link>Carrito</Link>
                    {getTotalItems() > 0 && <span>{getTotalItems()}</span>}
                </li>
            </ul>
        </nav>)};

        export default Nav;