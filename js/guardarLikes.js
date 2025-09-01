// Reemplazá con tu endpoint real de SheetDB
const SHEETDB_URL = "https://sheetdb.io/api/v1/XXXXX";  

function guardarLike(usuario, imageUrl) {
    fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            data: {
                usuario: usuario,
                imagen: imageUrl
            }
        })
    })
    .then(res => res.json())
    .then(data => console.log("Like guardado:", data))
    .catch(err => console.error("Error al guardar like:", err));
}

function quitarLike(usuario, imageUrl) {
    // Eliminamos buscando por usuario + imagen
    fetch(`${SHEETDB_URL}/usuario/${usuario}/imagen/${encodeURIComponent(imageUrl)}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => console.log("Like eliminado:", data))
    .catch(err => console.error("Error al eliminar like:", err));
}
