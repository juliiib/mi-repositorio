function cargarPagina(pagina) {
    let paginaAnterior = pagina;
    document.getElementById("GuardaPagina").value = paginaAnterior || "";

    fetch(pagina + '.html')
        .then(response => {
            if (!response.ok) throw new Error('Página no encontrada');
            return response.text();
        })
        .then(html => {
            if (pagina === "../index") {
                document.getElementById('Inicio').style.display = "none";
                document.getElementById('GuardaPagina').style.display = "none";
                document.getElementById('header').style.display = "none";
                document.getElementById('footer').style.display = "none";
                window.location.reload();
                return;
            }
            document.getElementById('contenido').innerHTML = html;
            document.getElementById('Inicio').style.display = "block";
            document.getElementById('contenedor').style.display = "none";
            document.getElementById('menuInicio').style.display = "none";
        })
        .catch(err => {
            document.getElementById('contenido').innerHTML = `<p>Error al cargar la página: ${err}</p>`;
        });
}
