export const productos = [
    {
        id: '1',
        nombre: 'computadora',
        precio: '120000',
        descripcion: 'Máquina electrónica capaz de almacenar información y tratarla automáticamente mediante operaciones matemáticas y lógicas controladas por programas informáticos.',
        img: './img/computadora.jpg'
    },

    {
        id: '2',
        nombre: 'auto',
        precio: '500000',
        descripcion: 'Vehículo automóvil de cuatro ruedas para circular por tierra, que se dirige mediante un volante y está destinado al transporte de personas.',
        img: './img/auto.jpg'
    },

    {
        id: '3',
        nombre: 'mesa',
        precio: '2000',
        descripcion: 'Mueble formado por un tablero horizontal, sostenido por uno o varios pies, con la altura conveniente para poder realizar alguna actividad sobre ella o dejar cosas encima.',
        img: './img/mesa.jpg'
    }
];

export const getProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000)
});