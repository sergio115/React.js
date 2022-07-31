import { retornaArreglo } from "../../src/base-pruebas/07-desestructuracion-arr";


describe('Pruebas en 07-desestructuracion-arr', () => {

	test('retornaArreglo debe de retornar un string y un número.', () => {

		const [letters, numbers] = retornaArreglo();

		// expect(letters).toBe('ABC');
		// expect(numbers).toBe(123);

		expect(typeof letters).toBe('string');
		expect(typeof numbers).toBe('number');

		expect(letters).toEqual(expect.any(String));
		expect(numbers).toEqual(expect.any(Number));
	});

});
