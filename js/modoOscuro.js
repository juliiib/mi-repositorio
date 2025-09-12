
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggle = document.getElementById("ModoOscuro");
    const icono = document.getElementById("PantallaClara");

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("oscuro-modo");
        icono.src = "Imagenes/PantallaOscura.png"; 
        icono.alt = "Modo Oscuro";
    }

    toggle.addEventListener("click", () => {
        body.classList.toggle("oscuro-modo");

        if (body.classList.contains("oscuro-modo")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        if(icono.src.includes("assets/image/PantallaClara.png")){
            icono.src = "assets/image/PantallaOscura.png"; 
            icono.alt = "Modo Oscuro";
        } else {
            icono.src = "assets/image/PantallaClara.png";  
            icono.alt = "Modo Claro";
        }
    });
});

