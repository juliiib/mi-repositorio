const form= document.getElementById("formularioRegistro")

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