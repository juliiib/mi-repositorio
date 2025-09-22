
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggle = document.getElementById("ModoOscuro");
    const icono = document.getElementById("PantallaClara");

    if (localStorage.getItem("tema") === "oscuro") {
        body.classList.add("oscuro-modo");
        icono.src = "Imagenes/PantallaOscura.png"; 
        icono.alt = "Modo Oscuro";
    }

    toggle.addEventListener("click", () => {
        body.classList.toggle("oscuro-modo");

        if (body.classList.contains("oscuro-modo")) {
            localStorage.setItem("tema", "oscuro");
        } else {
            localStorage.setItem("tema", "claro");
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

