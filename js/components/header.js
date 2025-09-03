document.getElementById("header").innerHTML = `
<nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <img class="img-fluid headerimg rounded-pill" src="assets/img/logoPNG.png" alt="logoPNG">
                <a class="navbar-brand ms-3" href="#"> PASTELERIA MIL SABORES</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="catalogoProductos.html">Catalogo</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Categorias
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Tortas Cuadradas </a></li>
                                <li><a class="dropdown-item" href="#">Tortas Circulares </a></li>
                                <li><a class="dropdown-item" href="#">Postres Individuales </a></li>
                                <li><a class="dropdown-item" href="#">Productos Sin Azucar </a></li>
                                <li><a class="dropdown-item" href="#">Pasteleria Tradicional </a></li>
                                <li><a class="dropdown-item" href="#">Productos Sin Gluten </a></li>
                                <li><a class="dropdown-item" href="#">Productos Veganas </a></li>
                                <li><a class="dropdown-item" href="#">Tortas Especiales </a></li>
                            </ul>
                        </li>
                         <li class="nav-item">
                            <a class="nav-link" href="#">Sucursales</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Sobre Nosotros
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Nuestra Historia</a></li>
                                <li><a class="dropdown-item" href="#">Equipo </a></li>
                                <li><a class="dropdown-item" href="#">Procesos </a></li>
                            </ul>
                        </li>
                           <ul class="navbar-nav ms-auto">
                        <li class="nav-item" id="nav-login">
                            <a class="nav-link" href="login.html">Login</a>
                        </li>
                        <li class="nav-item" id="nav-registro">
                            <a class="nav-link" href="">Registarse</a>
                        </li>
                        <li class="nav-item d-none" id="nav-logout">
                            <a class="nav-link" href="" id="btnLogout">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `;

const logueado = localStorage.getItem("logueado");
document.getElementById("nav-login").classList.toggle("d-none", logueado === "true");
document.getElementById("nav-registro").classList.toggle("d-none", logueado === "true");
document.getElementById("nav-logout").classList.toggle("d-none", logueado !== "true");

if (logueado === "true") {
    const user = localStorage.getItem("usuario");
    document.querySelector("#nav-logout a").textContent = `Logout ${user}`
}