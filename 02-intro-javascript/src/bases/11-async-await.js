
const getImage = async () => {

	try {
		const apiKey = 'TNhtlCZiLaweTP0zCmRekmlpt2NVrPd8';
		const fullUrl = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

		const resp = await fetch(fullUrl);
		const { data } = await resp.json();

		const { url } = data.images.original;
		const img = document.createElement('img');
		img.src = url;

		document.body.append(img);
	} catch (error) {
		// Manejo del error.
		console.error(error);
	}

};

getImage();
