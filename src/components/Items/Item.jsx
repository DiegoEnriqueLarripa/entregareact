// src/components/Item/Item.jsx
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', margin: '10px', width: '250px', textAlign: 'center' }}>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: '100%', height: 'auto' }} />
            </picture>
            <section>
                <p>Precio: ${price}</p>
                <p>Stock disponible: {stock}</p>
            </section>
            <footer>
                {/* Este es el enlace clave para la navegación */}
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    );
};

export default Item;