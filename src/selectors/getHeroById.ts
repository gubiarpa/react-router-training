import { Hero, heroes } from '../data/heroes';

export function getHeroById(id?: string): Hero | undefined {
	if (!id) throw new Error('id is required');

	const matchedHero = heroes.find((hero) => hero.id === id);

	return matchedHero;
}
