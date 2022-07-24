import { getHeroeById } from "./bases/08-import-export";

// const promesa = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		// Tarea
// 		// Importar el getHeroeById
// 		const heroe = getHeroeById(2);
// 		resolve(heroe);
// 		// reject('No se pudo encontrar el heroe');
// 	}, 2000);
// });

// promesa.then((heroe) => {
// 	console.log('heroe', heroe);
// })
// 	.catch((err) => {
// 		console.warn(err);
// 	});


const getHeroeByIdAsync = (id) => {

	return new Promise((resolve, reject) => {
		setTimeout(() => {

			const heroe = getHeroeById(id);

			if (heroe)
				resolve(heroe);
			else
				reject(`No existe el heroe con el id: ${id}`)

		}, 2000);
	});

};

getHeroeByIdAsync(4)
	.then(heroe => console.log('Heroe', heroe))
	.catch(err => console.warn(err));

getHeroeByIdAsync(10)
	.then(heroe => console.log('Heroe', heroe))
	.catch(err => console.warn(err));

getHeroeByIdAsync(5)
	.then(console.log)
	.catch(console.warn);

getHeroeByIdAsync(6)
	.then(console.log)
	.catch(console.warn);
