import { getImage } from "../../src/base-pruebas/11-async-await";


describe('Pruebas en 11-async-await', () => {

	test('getImage debe de retornar un error si no tenemos apiKey', async () => {

		const resp = await getImage();
		// expect(typeof url).toBe('string');
		// console.log(resp);
		expect(resp).toBe('No se encontró la imágen.');

	});

});
