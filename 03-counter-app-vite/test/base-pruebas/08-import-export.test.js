import { getHeroeById, getHeroeByOwner } from "../../src/base-pruebas/08-import-export";
import heroes, { owners } from "../../src/data/heroes";


describe('Pruebas en 08-import-export', () => {

	test('getHeroeById debe de retornar un héroe por Id.', () => {

		const id = 1;
		const hero = getHeroeById(id);

		expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC', });

	});

	test('getHeroeById debe de retornar undefined si no existe el Id.', () => {

		const id = 100;
		const hero = getHeroeById(id);

		expect(hero).toBeFalsy();

	});

	// Tarea:
	// getHeroeByOwner

	// Debe de retornar un arreglo con los héroes de DC.
	// length === 3.
	// toEqual al arreglo filtrado.
	test('getHeroeByOwner debe de retornar héroes de DC', () => {

		const testHeroes = heroes.filter(heroe => heroe.owner == 'DC');
		const owner = owners.find(owner => owner == 'DC');

		const heroesRest = getHeroeByOwner(owner);

		expect(heroesRest.length).toBe(3);
		expect(heroesRest).toEqual(testHeroes);

	});

	// Debe de retornar un arreglo con los héroes de Marvel.
	// length == 2.
	test('getHeroeByOwner debe de retornar héroes de Marvel', () => {

		const testHeroes = heroes.filter(heroe => heroe.owner == 'Marvel');
		const owner = owners.find(owner => owner == 'Marvel');

		const heroesRest = getHeroeByOwner(owner);

		expect(heroesRest.length).toBe(2);
		expect(heroesRest).toEqual(testHeroes);

	});

});
