import React, {useState} from 'react'

const ItemCount = ({minimo, maximo}) => {
    const [contador, setContador] = useState(minimo)

    // Funcin Sumar
    const sumar = () => {
        contador < maximo ? setContador(prev => prev + 1) : alert('Maximos productos disponibles.')
    }

    // Funcion Restar
    const restar = () => {
        contador > minimo ? setContador(prev => prev - 1) : alert('Porfavor elige un numero positivo.')
    }

    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </div>
    )
}

export default ItemCount