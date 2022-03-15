//Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};


//const { nombre, edad, clave } = persona;


//console.log( nombre );

/*console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );*/

const retornaPersona = ( usuario ) => {
    const { edad, clave, nombre, } = usuario;

    console.log ( edad, clave, nombre )
}

const retornaPersona = ( persona );