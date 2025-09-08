const form= document.getElementById("formularioRegistro")

form.addEventListener("submit", function(event){
    const username = document.getElementById("nombreUsuario").value.trim()
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("contraseña").value.trim();
    const error_usuario = document.getElementById("error_usuario")
    const error_email = document.getElementById("error_email")
    const error_password = document.getElementById("error_password")
    //Expresion regular para el email
    const regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    let valido = true;

    // Validar nombre de usuario
    if (username.length < 4 || username.length > 8){
        error_usuario.textContent = 'El nombre debe contener entre 4 y 8 caracteres';
        valido = false;
    } else {
        error_usuario.textContent = '';
    }

    // Validar email
    if (!regexEmail.test(email)){
        error_email.textContent = 'El email no es válido';
        valido = false;
    } else {
        error_email.textContent = '';
    }

    // Validar contraseña
    if (password.length < 8 || password.length > 16){
        error_password.textContent = 'La contraseña debe tener entre 8 y 16 caracteres';
        valido = false;
    } else {
        error_password.textContent = '';
    }

    if (!valido) event.preventDefault();
})

//Eventos BLUR, validar cuando pierde el foco

document.getElementById("email").addEventListener("blur", function() {
    const email = this.value.trim();
    const error_email = document.getElementById("error_email");
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(email)) {
        error_email.textContent = 'El email no es válido';
    } else {
        error_email.textContent = '';
    }
});

document.getElementById("contraseña").addEventListener("blur", function() {
    const password = this.value.trim();
    const error_password = document.getElementById("error_password");
    if (password.length < 8 || password.length > 16) {
        error_password.textContent = 'La contraseña debe tener entre 8 y 16 caracteres';
    } else {
        error_password.textContent = '';
    }
});

document.getElementById("nombreUsuario").addEventListener("blur", function() {
    const username = this.value.trim();
    const error_usuario = document.getElementById("error_usuario");
    if (username.length < 4 || username.length > 8) {
        error_usuario.textContent = 'El nombre debe contener entre 4 y 8 caracteres';
    } else {
        error_usuario.textContent = '';
    }
});


//Funcion para verificar si el correo electronico ya esta en uso en la base de datos (sheetDB)

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form));
    const email = data.email;

    // Verificar si el email ya existe
    const checkUrl = `https://sheetdb.io/api/v1/h8t1n9qrjcn9q/search?email=${email}`;
    const res = await fetch(checkUrl);
    const usuarios = await res.json();

    if (usuarios.length > 0) {
        alert("Ya existe una cuenta con ese correo.");
        return;
    }

    // Si no existe, registrar el usuario
    await fetch("https://sheetdb.io/api/v1/h8t1n9qrjcn9q", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [data] })  
    });

    alert("Cuenta creada con exito");
    form.reset(); 
});