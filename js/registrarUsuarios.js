const form= document.getElementById("formularioRegistro")

form.addEventListener("submit",async function (event){

    event.preventDefault();

    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const passwordValido = validarPassword();
    const fechaValido = validarFecha();

    if (nombreValido && emailValido && passwordValido && fechaValido){
        const data = Object.fromEntries(new FormData(form));
        const email = data.email;
        const checkUrl = `https://sheetdb.io/api/v1/h8t1n9qrjcn9q/search?email=${email}`;
        const res = await fetch(checkUrl);
        const usuarios = await res.json();

        if (usuarios.length > 0) {
            alert("Ya existe una cuenta con ese correo.");
            return;
        }

        await fetch("https://sheetdb.io/api/v1/h8t1n9qrjcn9q", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: [data] })
        });

        alert('Enviado');
        form.reset();
    }  
})


function validarNombre(){
    const nombre = document.getElementById("nombreUsuario").value.trim();
    const error = document.getElementById("error-usuario");
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;

    if (nombre === ''){
        error.textContent = 'Nombre obligatorio';
        return false;
    }else if(!regex.test(nombre)){
        error.textContent = 'Solo letras (minimo 3 caracteres)';
        return false;
    }else{
        error.textContent = '';
        return true;
    }

}

function validarEmail(){
    const email = document.getElementById("email").value.trim();
    const error = document.getElementById("error-email")
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === ''){
        error.textContent = 'El email es obligatorio'
        return false;
    }else if (!regex.test(email)){
        error.textContent = 'Formato inválido'
        return false;
    }else{
        error.textContent = '';
        return true;
    }
}

function validarPassword(){
    const password = document.getElementById("contraseña").value;
    const error = document.getElementById("error-password");

    if (password === ''){
        error.textContent = 'La contraseña es obligatoria'
        return false;
    }

    const passwordLongitud = password.length > 8;
    const passwordNum = /\d/.test(password);
    const passwordMayus = /[A-Z]/.test(password);

    if (!passwordLongitud || !passwordNum || !passwordMayus){
        error.textContent = 'La contraseña debe tener al menos 8 caracteres, incluir un número y una letra mayúscula'
        return false;
    }
    
    error.textContent = '';
    return true;
}

function validarFecha(){
    const fecha = document.getElementById("fechaNacim").value;
    const error = document.getElementById("error-fecha");

    if (!fecha){
        error.textContent = 'Fecha obligatoria'
        return false; 
    }

    const fechaNacimiento = new Date(fecha);
    const hoy = new Date();

    if (fechaNacimiento > hoy){
        error.textContent = 'La fecha es invalida'
        return false;
    }
    error.textContent = ''
    return true;
}

document.getElementById("nombreUsuario").addEventListener("blur", validarNombre);
document.getElementById("email").addEventListener('blur', validarEmail);
document.getElementById("contraseña").addEventListener('blur', validarPassword);
document.getElementById("fechaNacim").addEventListener('blur', validarFecha);


