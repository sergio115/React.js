
export const getImage = async () => {

	try {
		// const apiKey = 'TNhtlCZiLaweTP0zCmRekmlpt2NVrPd8';
		const apiKey = '';
		const fullUrl = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

		const resp = await fetch(fullUrl);
		const { data } = await resp.json();

		const { url } = data.images.original;

		return url;

	} catch (error) {
		// Manejo del error.
		return 'No se encontró la imágen.';
	}

};
