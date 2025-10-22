import { Item } from "../item/item.jsx";
import { useCartContext } from "../../context/CardContext/CartContext.jsx"

export const ItemDetail = ({ detail }) => {
    const{ addItem } = useCartContext();
    
    return (
        <Item {...detail}>
            <button onClick={() => addItem(detail)}>Enviar al carrito</button>
        </Item>    
)
}