const form= document.getElementById("formularioInicioSesion")

form.addEventListener("submit",async (e) => {
    e.preventDefault();

    const data=Object.fromEntries(new FormData(form));
    const email = data.email;
    const password = data.contraseña;

    console.log("Intentando login con:", email, password);

    try {
        const url = `https://sheetdb.io/api/v1/h8t1n9qrjcn9q/search?email=${email}&contraseña=${password}`;
        const res = await fetch(url);
        const usuarios = await res.json();

        if (usuarios.length > 0) {
            const usuario = usuarios[0];
            alert("Bienvenido " + usuario.nombreUsuario);

            localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
            
            window.location.href = "../index.html";
        } else {
            alert("Correo o contraseña incorrectos ❌");
        }
    } catch (error) {
        console.error("Error en login:", error);
        alert("Hubo un error al iniciar sesión");
    }

    const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    if (usuarioGuardado) {
        console.log("Usuario ya logueado:", usuarioGuardado.nombreUsuario);
    }

});