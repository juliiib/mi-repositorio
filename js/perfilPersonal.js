document.addEventListener("DOMContentLoaded", async () => {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
  const seccionPerfil = document.getElementById("perfil");
  const seccionAviso = document.getElementById("aviso");
  const fotoPerfil = document.getElementById("fotoPerfil");
  const contenedorFavoritos = document.getElementById("mis-favoritos");

  if (usuario) {
    seccionPerfil.classList.remove("oculto");
    fotoPerfil.textContent = usuario.nombreUsuario;

    try {
      const response = await fetch(`https://sheetdb.io/api/v1/isz9lmkvqyslz/search?usuario=${usuario.nombreUsuario}`);
      const favoritos = await response.json();

      favoritos.forEach(fav => {
        const img = document.createElement("img");
        img.src = fav.url_imagen;
        img.classList.add("foto-favorita");
        contenedorFavoritos.appendChild(img);
      });

    } catch (error) {
      console.error("Error cargando favoritos:", error);
    }

  } else {
    seccionAviso.classList.remove("oculto");
  }
});
