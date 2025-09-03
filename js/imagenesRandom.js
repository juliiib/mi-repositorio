const contenedor = document.querySelector('.contenedor')
const filas = 1

for (let i = 0; i < filas * 30; i++) {
    const imgWrapper = document.createElement('div')
    imgWrapper.classList.add('imagen-wrapper')

    const intervalo = Array.from({ length: 500 }, (_, i) => i + 1);
    const valor = intervalo[Math.floor(Math.random() * intervalo.length)];
    const img = document.createElement('img')
    img.src = `https://picsum.photos/id/${valor}/200/300`

    const overlay = document.createElement('div')
    overlay.classList.add('overlay')

    //Cambie esta parte del script para que se viera como un corazon y la intension es tambien ponerle alguna animacion.
    const botonFavorito = document.createElement('button');
    botonFavorito.classList.add('like');
    botonFavorito.innerHTML = '♡';
    botonFavorito.setAttribute('aria-label', 'Añadir a favoritos');

    botonFavorito.addEventListener('click', function() {
        this.classList.toggle('active');

        if (this.classList.contains('active')) {
            this.innerHTML = '♥';
            this.style.color = '';
        }
    });

    overlay.appendChild(botonFavorito)

    imgWrapper.appendChild(img)
    imgWrapper.appendChild(overlay)

    contenedor.appendChild(imgWrapper)

}

