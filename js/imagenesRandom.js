const contenedor = document.querySelector('.contenedor')
const filas = 10

for (let i = 0; i < filas * 3; i++) {
    // Crear contenedor individual para cada imagen
    const imgWrapper = document.createElement('div')
    imgWrapper.classList.add('imagen-wrapper')

    // Crear imagen
    const img = document.createElement('img')
    img.src = `https://picsum.photos/200/300?random=${i}`

    // Crear overlay
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')

    const botonFavorito = document.createElement('button')
    botonFavorito.classList.add('like')
    botonFavorito.textContent = 'favorito'

    const botonDescargar = document.createElement('button')
    botonDescargar.classList.add('descargar')
    botonDescargar.textContent = 'descargar'

    overlay.appendChild(botonFavorito)
    overlay.appendChild(botonDescargar)

    // Agregar imagen y overlay al wrapper
    imgWrapper.appendChild(img)
    imgWrapper.appendChild(overlay)

    // Agregar wrapper al contenedor principal
    contenedor.appendChild(imgWrapper)
}
