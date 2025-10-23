import { Link } from "react-router-dom"
import { Item } from "../Item/Item.jsx";

export const ItemList = ({list}) => {
    return (<>
    {list.length ? (
    list.map((prod) => <Link to={'/detail/${prod.id}'} prod={prod.id}>
        <Item {...prod} />
    </Link>))
    :
    (
    <p>No hay productos para mostrar</p>
    )}
    </>
    )
}