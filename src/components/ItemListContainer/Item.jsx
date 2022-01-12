import React from 'react'

const Item = ({ datitos }) => {

    return (
        <div>
            <h2>{datitos.nombre}</h2>
            <h3>{datitos.precio}</h3>
            <button>Detalles</button>
        </div>
    );
};

export default Item;