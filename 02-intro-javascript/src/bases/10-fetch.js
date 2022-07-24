
const apiKey = 'TNhtlCZiLaweTP0zCmRekmlpt2NVrPd8';
const url = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const peticion = fetch(url);

peticion
	.then(resp => resp.json())
	.then(({ data }) => {

		const { url } = data.images.original;

		const img = document.createElement('img');
		img.src = url;

		document.body.append(img);

	})
	.catch(console.warn);