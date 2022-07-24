// import { heroes } from '../data/heroes';
// import heroes, { owners } from '../data/heroes';
// import { heroes, owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log(owners);


const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);


// console.log(getHeroeById(2));
// console.log(getHeroeById(1));
// console.log(getHeroeById(3));


const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroeByOwner('DC'));
// console.log(getHeroeByOwner('Marvel'));

export {
	getHeroeById,
	getHeroeByOwner,
}