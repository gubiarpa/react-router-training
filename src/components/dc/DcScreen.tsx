import { HeroList } from '../hero/HeroList';

export const DcScreen = () => {
	return (
		<>
			<h1>DC Heroes</h1>
			<hr />
			<HeroList publisher={'DC Comics'} />
		</>
	);
};
