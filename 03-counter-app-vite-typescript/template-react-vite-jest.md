# Plantilla para crear proyectos de React con Vite

1. Instalaciones:
```
yarn create vite
```

2. Escribimos un nombre

3. Seleccionamos __react__

4. Seleccionamos __react-ts__

5. Navegamos dentro del proyecto y lo corremos con:
```
cd .\nombre-del-proyecto
yarn
yarn dev
```

## Instalación y configuracion de Jest + React Testing Library

1. Instalaciones:
```
yarn add --dev jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript @babel/preset-react react-test-renderer
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:
```
yarn add --dev whatwg-fetch
```

3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel 

__babel.config.cjs__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
	    '@babel/preset-typescript',
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};

```

5. Para componentes que importen CSS, crear un archivo llamado:
```tests/mocks/styleMock.ts```
```
module.exports = {};
```


6. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.cjs__
```
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

```

__jest.setup.ts__
```
// En caso de necesitar la implementación del FetchAPI
// yarn add -D whatwg-fetch
// import 'whatwg-fetch';

// En caso de encontrar paquetes que lo requieran 
// yarn add -D setimmediate
// import 'setimmediate';

// En caso de tener variables de entorno y aún no soporta el import.meta.env
// yarn add -D dotenv
// require('dotenv').config({
//     path: '.env.test'
// });

// Realizar el mock completo de las variables de entorno
// jest.mock('./src/helpers/getEnvVariables', () => ({
//     getEnvVariables: () => ({ ...process.env })
// }));
```
