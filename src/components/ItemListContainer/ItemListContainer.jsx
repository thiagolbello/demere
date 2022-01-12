import React, { useEffect, useState } from 'react'
import { getProductos } from '../productos'
import ItemList from './ItemList'

const ItemListContainer = (prop) => {
    const mensaje = prop.mensaje

    const [data, setData] = useState([]);

    useEffect(() => {
        getProductos
        .then((res) => {
            setData(res);
        })
        .catch((error) => {
            console.error(error);
        })
    }, []);

    return (
        <div>
            <h1>{mensaje}</h1>
            <ItemList datosProductos={data}/>
        </div>
    )
}

export default ItemListContainer;