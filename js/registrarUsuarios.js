const form= document.getElementById("formularioRegistro")

form.addEventListener("submit", function(event){
    const username = document.getElementById("nombreUsuario").value.trim()
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("contraseña").value.trim();
    const error_usuario = document.getElementById("error_usuario")
    const error_email = document.getElementById("error_email")
    const error_password = document.getElementById("error_password")
    const regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    let valido = true;

    if (username.length < 4 || username.length > 8){
        error_usuario.textContent = 'El nombre debe contener entre 4 y 8 caracteres';
        valido = false;
    } else {
        error_usuario.textContent = '';
    }

    if (!regexEmail.test(email)){
        error_email.textContent = 'El email no es válido';
        valido = false;
    } else {
        error_email.textContent = '';
    }

    if (password.length < 8 || password.length > 16){
        error_password.textContent = 'La contraseña debe tener entre 8 y 16 caracteres';
        valido = false;
    } else {
        error_password.textContent = '';
    }

    if (!valido) event.preventDefault();
})

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




    form.addEventListener("submit",async (e) => {
     e.preventDefault();

     const data=Object.fromEntries(new FormData(form));

     console.log("Datos capturados:",data)

     await fetch("https://sheetdb.io/api/v1/h8t1n9qrjcn9q", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ data: [data] })  
     });


     alert("cuenta creada con exito");
     form.reset();
 });