import "./item.css";

export const Item = ({name, price, descripction, imageUrl, children}) => {
    return (
        <article className="product item">
            <img src={imageUrl} alt={description} />
            <h2 className="product-title">{name}</h2>
            <p>Precio: ${price}</p>
            <p>Descripcion{descripction}</p>
            {children}
        </article>
    )
}