module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFiles: ['./jest.setup.ts'],
	transformIgnorePatterns: [],
	transform: {
		'\\.[jt]sx?$': 'babel-jest',
	},

	// ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
	moduleNameMapper: {
		'\\.(css|less)$': '<rootDir>/tests/mocks/styleMock.ts',
	},
};
