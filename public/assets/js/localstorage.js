

let productos = []
let imagenes = document.querySelectorAll('img')
let listaProductos = document.querySelector('#listaProductos')


const eventListeners = () => {
    document.addEventListener('DOMContentLoaded', () => {
        productos = JSON.parse( localStorage.getItem('productos') ) || [];
        console.log('productos-->', productos )

        productos.forEach((element)=>{
            listaProductos.innerHTML += `<img src="assets/img/${element}.png" alt="${element}"/>`
        })

    });
    return productos
}


const sincronizarStorage = () => {
    localStorage.setItem('productos', JSON.stringify(productos));
}

eventListeners();
// console.log( 'Salida de productos-->', eventListeners() )

imagenes.forEach( (element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault()

        let alt = e.target.alt
        productos = [ ...productos, alt ];
        console.log(productos)
        sincronizarStorage();
    })
} )
