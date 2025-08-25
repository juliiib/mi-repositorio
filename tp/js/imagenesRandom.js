const contenedor = document.querySelector('.contenedor')
const filas = 10

for (let i = 0; i<filas * 3; i++){
    const img = document.createElement('img')
    img.src = `https://picsum.photos/200/300?random=${i}`
    contenedor.appendChild(img)
}

console.log (getRandomSize())