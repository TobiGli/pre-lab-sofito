import { Link } from "react-router-dom"
import { Item } from "../Item/Item.jsx";
import "./ItemList.css";

export const ItemList = ({list}) => {
    return (<>
    <div className="itemlist-products">
        {list.length ? (
        list.map((prod) => <Link to={'/detail/${prod.id}'} prod={prod.id}>
            <Item {...prod} />
        </Link>))
        :
        (
        <p>No hay productos para mostrar</p>
        )}
    </div>
    </>
    )
}