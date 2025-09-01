const contenedor = document.querySelector('.contenedor')
const filas = 1

for (let i = 0; i < filas * 30; i++) {
    const imgWrapper = document.createElement('div')
    imgWrapper.classList.add('imagen-wrapper')

    const img = document.createElement('img')
    img.src = `https://picsum.photos/200/300?random=${i}`

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

    const botonDescargar = document.createElement('button')
    botonDescargar.classList.add('descargar')
    botonDescargar.innerHTML = '👀';
    botonDescargar.setAttribute('aria-label', 'Descargar imagen');

    botonDescargar.addEventListener('click', function() {
        this.classList.add('active');
        
        const originalIcon = this.innerHTML;
        this.innerHTML = '⏳'; 
        
        const link = document.createElement('a');
        link.href = img.src;
        
        const fileName = `imagen-${i+1}-${Date.now()}.jpg`;
        link.download = fileName;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => {
            this.innerHTML = '✓'; 
            setTimeout(() => {
                this.innerHTML = originalIcon; 
                this.classList.remove('active');
            }, 1000); 
        }, 500); 
    });

    overlay.appendChild(botonFavorito)
    overlay.appendChild(botonDescargar)

    imgWrapper.appendChild(img)
    imgWrapper.appendChild(overlay)

    contenedor.appendChild(imgWrapper)

}

