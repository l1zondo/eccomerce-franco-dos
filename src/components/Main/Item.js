import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ prod }) => {
    return (
        <article className="card">
            <img src={prod.imagen} alt={prod.title} />
            <div className="card-info">
                <h2>{prod.titulo}</h2>
                <h4>${prod.precio}.-</h4>
                <h5>#{prod.categoria}</h5>
                <h6>{prod.detalle}</h6>
                {prod.stock === 0 ? (
                    <h6>No hay stock</h6>
                ) : (
                    <Link to={`/item/${prod.id}`}>Ver detalle</Link>
                )}
            </div>
        </article>
    );
};

export default Item;    