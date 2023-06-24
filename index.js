//inicialmente inicia en vacio, y nosotros indicaremos que productos estaran disponibles, y los insertamos dentro del array.
const peliculas = [];


// Las clases son PLANTILLAS, para crear objetos, / productos, de manera mas prolija y siguiendo una estratructura.
class Pelicula {
    // adentro tienen un constructor, se va a encargar de recibir por parametro, las propiedades que va a tener la plantilla
    constructor(nombre, precio){
        // para poder acceder al parametro se utiliza el this.
        this.nombre = nombre;
        this.precio = precio;
    }
}

//Crear los objetos
peliculas.push(new Pelicula("Titanic",12000))
peliculas.push(new Pelicula("Thor",1000))
peliculas.push(new Pelicula("Titanic",12000))
peliculas.push(new Pelicula("Titanic",12000))
peliculas.push(new Pelicula("Titanic",12000))
peliculas.push(new Pelicula("Titanic",12000))

console.log('peliculas log ==> ', peliculas)



// creamos la funcion
 function crearProductos(){
    // utilizar el DOM para poder mostrar los productos dinamicamente en el HTML.    DOM = SELECCIONAR ELEMENTOS/ ETIQUETAS DEL HTML, Y DARLES UNA FUNCIONALIDAD O INDICACION.
    const contenedor = document.querySelector('#container-peliculas')
    // el forEach itera sobre el array de nuestras peliculas y por cada una guarda en el parametro la informacion esperando a que le indiquemos que informacion queremos mostrar.
    peliculas.forEach((pelicula) => {
        const hijoDelContenedor = document.createElement('div');
        // agregamos una clase del css para darle estilos a las peliculas
        hijoDelContenedor.classList.add('box-producto')
        // Inyectamos el html usando la interpolacion, para meter las propiedades del objeto que recorre el forEach con el parametro pelicula
        hijoDelContenedor.innerHTML = `
        <span>${pelicula.nombre}</span>
        <p>$ ${pelicula.precio}</p>
        `

        // appendChild lo que hace es ejecutar la visual del hijoDelContenedor, creando un elemento div dinamicamente en el DOM.
        contenedor.appendChild(hijoDelContenedor)
    })

}


// ejecuta la funcion del renderizado
crearProductos()

