const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.textContent = "¡Desplegado automáticamente con GitHub Actions!";
});
