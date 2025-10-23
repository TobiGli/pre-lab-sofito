import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList.jsx';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        fetch('/data/products.json') 
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Hubo un problema al cargar los productos');
                }
                return res.json();
            })

            .then((data) => {
                setProducts(data);
            })
            
            .catch((err) => {
                console.log(err);
            });
    }, []);

    console.log("Productos en el estado de ItemListContainer:", products);

    return (
        <section>
            <h1>Bienvenidos</h1>
            <ItemList list={products} />
        </section>  
    );
}