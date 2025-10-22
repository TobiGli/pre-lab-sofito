import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = (children) => {
    const [cart, setCart] = useState([])

    const exists = (id) => {
        const exist = cart.some( (prod) => prod.id === id )
        return exist;
    };

    const addItem = (item) => {
        if (exists(item.id)) {
            alert("El producto ya está en el carrito");
            return;
    }

    setCart({...cart, item});
    alert('${item.name} agregado al carrito');
};

const clearCart = () => {
    setCart([]);
}

const getTotalItems = () => {
    if (cart.length) {
        return cart.length
    }
}

const values = {
    cart, addItem, clearCart, getTotalItems
}

    return (
        <CartContext.provider value={ values }>{children}</CartContext.provider>
    )
}