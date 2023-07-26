const init = () => {
    let contenedor = document.querySelector('.contenedor')

    console.log()

    const color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.999)`

    setTimeout( () => {
        contenedor.style.background = color
        init()
    },2000)
}

init()