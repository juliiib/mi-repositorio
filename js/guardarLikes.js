console.log("script cargado")
document.querySelector(".contenedor").addEventListener("click", async (e) => {
    if (e.target.classList.contains("like")) {
        e.target.classList.toggle("active");

        const img = e.target.closest(".imagen-wrapper").querySelector("img");
        const urlFinal = img.src;

        const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));

        const data = {
            usuario: usuario.nombreUsuario,
            url_imagen: urlFinal
        };

        console.log("datos capturados:", data);

        try {
            const response = await fetch("https://sheetdb.io/api/v1/isz9lmkvqyslz", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data: [data] })
            });

            const result = await response.json();
            console.log("Guardado en Sheets:", result);
        } catch (error) {
            console.error("Error al guardar en Sheets:", error);
        }
    }
});
