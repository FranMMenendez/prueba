//Funciones en JS

/*const saludar = function saludar( nombre ) {
    return`hola, ${ nombre }`;
}*/

const saludar2 = ( nombre ) => {
    return `hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;


//console.log( saludar( 'Goku' ) )

console.log( saludar2 ( 'Vegeta' ) );
console.log( saludar3 ( 'Goku' ) );
console.log( saludar4() );


const getUser = () => ({
        uid: 'ABC123',
        username: 'Franxolux'
    });

const user = getUser();
console.log(user);

//Tarea
// 1. Transformen a una función de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Probar
/*function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABC323',
        username: nombre
        
    }
};*/
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC323',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Franxolux');
console.log( usuarioActivo);