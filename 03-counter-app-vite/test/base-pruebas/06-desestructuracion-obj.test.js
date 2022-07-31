import { retornaPersona } from "../../src/base-pruebas/06-desestructuracion-obj";


describe('Pruebas en 06-desestructuracion-obj', () => {

	test('retornaPersona debe de retornar un objeto.', () => {

		const codeName = 'Captain America';
		const age = 27;

		const person = retornaPersona({ clave: codeName, edad: age, });

		expect(person).toEqual({
			nombreClave: codeName,
			anios: age,
			latlng: {
				lat: 14.1232,
				lng: -12.3232,
			},
		});

	});

});