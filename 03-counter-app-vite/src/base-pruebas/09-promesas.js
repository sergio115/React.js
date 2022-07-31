import { getHeroeById } from "./08-import-export";


export const getHeroeByIdAsync = (id) => {

	return new Promise((resolve, reject) => {

		setTimeout(() => {

			const heroe = getHeroeById(id);

			if (heroe)
				resolve(heroe);
			else
				reject(`No existe el heroe con el id: ${id}`)

		}, 500);

	});

};
