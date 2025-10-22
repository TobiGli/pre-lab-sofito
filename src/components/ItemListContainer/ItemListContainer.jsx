import { useState, useEffect, use } from 'react';
import { ItemList } from '../itemlist/itemlist.jsx';

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('./products.json')
        .then((res)=> {
            if (!res.ok) {
                throw new Error ('Hubo un problema al cargar los productos');
        }
            return res.json()
        .then((data)=> {
            setProducts(data);
        })
        .catch((err)=> {
            console.log(err)
        })
    }, [])

    return (
        <section>
            <h1>Bienvenidos</h1>
            <ItemList list={products} />
        </section>  
    )
    })}