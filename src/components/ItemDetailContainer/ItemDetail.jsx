const ItemDetail = ({producto}) => {
    
    return (
        <div>
            <div>
            <strong>Descripcion: </strong>
            <a>{producto.descripcion}</a>
            </div>
            <img src={producto.img}></img>
        </div>
    )
}

export default ItemDetail