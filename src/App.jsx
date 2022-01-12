import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const mensajeProductos = "Nuestros Productos Destacados"

  return (
    <main>
          <NavBar/>
          <center>
            <ItemListContainer mensaje={mensajeProductos}/>
            <ItemDetailContainer/>
            <ItemCount minimo={0} maximo={7}/>
          </center>
    </main>
  );
}

export default App;
