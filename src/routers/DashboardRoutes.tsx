import { Route, Routes } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from '../components/hero/HeroScreen';

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route
						path='/'
						element={<MarvelScreen />}
					/>
					<Route
						path='marvel'
						element={<MarvelScreen />}
					/>
					<Route
						path='dc'
						element={<DcScreen />}
					/>
					<Route
						path='search'
						element={<SearchScreen />}
					/>
					<Route
						path='hero/:heroId'
						element={<HeroScreen />}
					/>
				</Routes>
			</div>
		</>
	);
};
