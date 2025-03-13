import { Hero, heroes } from '../data/heroes';

export function getHeroesByPublisher(publisher: string): Hero[] {
	const validPublishers = ['DC Comics', 'Marvel Comics'];

	if (!validPublishers.includes(publisher)) {
		throw new Error(`Publisher "${publisher}" is not valid`);
	}

	return heroes.filter((hero) => hero.publisher === publisher);
}
