const btnCerrarSesion = document.getElementById("cerrarSesion");

btnCerrarSesion.addEventListener("click", () => {
  // Borrar todo lo que tengas en localStorage
  localStorage.clear();

  // O si solo querés borrar el usuario:
  // localStorage.removeItem("usuario");

  alert("Sesión cerrada correctamente");

  window.location.href = "../index.html";
});