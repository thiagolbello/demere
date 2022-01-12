import { useEffect, useState } from 'react'
import { getProductos } from '../productos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [detallesProducto, setDetallesProducto] = useState({});

    useEffect(() => {
        getProductos
        .then(resp => setDetallesProducto(resp.find(prod => prod.id === '1')))
    }, []);

    return (
        <div>
            <ItemDetail producto={detallesProducto}/>
        </div>
    )
}

export default ItemDetailContainer;