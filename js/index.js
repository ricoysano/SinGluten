document.addEventListener("DOMContentLoaded", () => {

    actualizarCarrito();

    // --- Botones agregar al carrito ---
    const botones = document.querySelectorAll(".boton");

    botones.forEach((boton, index) => {
        boton.addEventListener("click", () => {

            const card = boton.closest(".card");

            const producto = {
                id: index + 1,
                nombre: card.querySelector("h2").textContent,
                precio: 10,
                imagen: card.querySelector("img").src
            };

            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));

            actualizarCarrito();
        });
    });

    // --- Botón vaciar carrito ---
    document.getElementById("vaciar-carrito").addEventListener("click", () => {
        localStorage.removeItem("carrito");
        actualizarCarrito();
    });

    // --- Mostrar / ocultar panel lateral ---
    const panelCarrito = document.getElementById("carrito-panel");
    const botonCarrito = document.getElementById("boton-carrito");
    const cerrarCarrito = document.getElementById("cerrar-carrito");

    botonCarrito.addEventListener("click", (e) => {
        e.preventDefault();
        panelCarrito.classList.remove("oculto");
        panelCarrito.classList.add("activo");
    });

    cerrarCarrito.addEventListener("click", () => {
        panelCarrito.classList.remove("activo");
        panelCarrito.classList.add("oculto");
    });
});


// --- Función mostrar carrito ---
function actualizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const listaCarrito = document.querySelector("#lista-carrito");

    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<li>El carrito está vacío</li>";
    } else {
        carrito.forEach(producto => {
            const li = document.createElement("li");
            li.textContent = `${producto.nombre} - $${producto.precio}`;
            listaCarrito.appendChild(li);
        });
    }

    // --- Actualizar TOTAL ---
    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    document.getElementById("carrito-total").textContent = `Total: $${total}`;

    // --- Actualizar ícono del carrito ---
    const carritoCount = document.getElementById("carrito-count");
    carritoCount.textContent = carrito.length;
    carritoCount.style.display = carrito.length > 0 ? "block" : "none";
}