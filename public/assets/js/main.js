let productos = []
localStorage.setItem('productos', JSON.stringify(productos));

const sincronizarStorage = () => {
    localStorage.setItem('productos', JSON.stringify(productos));
}


$( ".img-producto" ).on( "click", function() {
    let elemento = $(this).attr('alt')
    let imagen = $(this).attr('id')
    if (!productos.includes(elemento)){
        productos = [ ...productos, elemento ];
        console.log(productos)
        sincronizarStorage();
        alert( `${elemento}, se ha agredado al carro`);
    }
    
  } );

  $( "#carrocompra" ).on( "click", function() {

    productos = JSON.parse( localStorage.getItem('productos') ) || [];
    console.log('productos-->', productos )
    let listaProductos = document.querySelector('#listaProductos')
    listaProductos.innerHTML ="";

    productos.forEach((element)=>{

        listaProductos.innerHTML += `<img src="/img/${element}.png" alt="${element}" width="80"/>`
    })
    $('#modalCarrito').modal('show');
    
  } );