import CartWidget from "./CartWidget";

function NavBar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">demere</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              <a class="nav-link" href="#">Comprar</a>
              <a class="nav-link" href="#">Vender</a>
            </div>
          </div>
          <CartWidget/>
        </div>
      </nav>
    );
  }

  export default NavBar;