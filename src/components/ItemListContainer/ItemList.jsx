import React from 'react'
import Item from './Item';

const ItemList = ({ datosProductos }) => {

    return (
        <div>
            {datosProductos.map((datosProducto) => (
                <Item key={datosProducto.id} datitos={datosProducto}/>
            ))}
        </div>
    );
}

export default ItemList