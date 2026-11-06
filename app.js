const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

const variableSinUsar = 5
boton.addEventListener('click', () => { mensaje.textContent = 'hola' })

boton.addEventListener("click", () => {
  mensaje.textContent = "¡Desplegado automáticamente con GitHub Actions!";
});
