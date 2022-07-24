

// Funciones en JS
// function saludar(nombre) {
// 	return `Hola, ${nombre}`;
// }

// saludar = 30;

// const saludar = function (nombre) {
// 	return `Hola, ${nombre}`;
// }

// saludar = 20;

const saludar2 = (nombre) => {
	return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;


// console.log(saludar('Sergio'));

console.log(saludar2('Sergio'));
console.log(saludar3('Fernando'));
console.log(saludar4());

const getUser = () => ({
	uid: 'ABC123',
	username: 'El_Papi1502',
});

const user = getUser();
console.log(user);


// Tarea
// 1. Transformar a una función de Flecha.
// 2. Tiene que retornar un objeto implícito.
// 3. Pruebas.
function getUsuarioActivo(nombre) {
	return {
		uid: 'ABC4567',
		username: nombre,
	};
}

const usuarioActivo = getUsuarioActivo('Sergio');
console.log(usuarioActivo);

// ************************************************

const getUsuarioActivo2 = (nombre) => ({
	uid: 'ABC4567',
	username: nombre,
});

const usuarioActivo2 = getUsuarioActivo2('Efren');
console.log(usuarioActivo2);
