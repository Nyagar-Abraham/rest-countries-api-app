import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetCountries } from '../hooks/useGetCountries';
import { PAGE_ITEMS } from '../services/Constants';
import CountryItem from './CountryItem';
import Pagination from './Pagination';
import Spinner from './Spinner';

function CountriesList() {
	const [displayCountries, setDisplaycountries] = useState([]);
	const { countries, isLoading } = useGetCountries();

	const [searchParams] = useSearchParams();

	const page = +searchParams.get('page') || 1;

	useEffect(() => {
		const pageCount = Math.ceil(countries?.length / PAGE_ITEMS);
		const start = (page - 1) * PAGE_ITEMS;
		const end = page === pageCount ? countries?.length : page * PAGE_ITEMS;

		setDisplaycountries(countries?.slice(start, end));
	}, [page, countries]);

	if (isLoading)
		return (
			<div className="flex justify-center items-center  h-screen">
				<Spinner />
			</div>
		);

	const display = displayCountries?.length ? displayCountries : countries;

	return (
		<div className="mx-3 mt-10">
			<ul className="list-none grid grid-cols-2 sm:grid-cols-3  gap-y-6 gap-x-4 md:gap-x-8 md:gap-y-10 md:grid-cols-4    ">
				{display?.map((country) => (
					<CountryItem key={country.name.common} country={country} />
				))}
			</ul>
			<Pagination count={countries?.length} />
		</div>
	);
}

export default CountriesList;
