import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

interface Props {
	publisher: string;
}

export const HeroList = ({ publisher }: Props) => {
	const heroes = getHeroesByPublisher(publisher);

	return (
		<div className='row row-cols-1 row-cols-md-3 g-2 animate__animated animate__fadeIn'>
			{heroes.map((hero) => (
				<HeroCard
					key={hero.id}
					hero={hero}
				/>
			))}
		</div>
	);
};
