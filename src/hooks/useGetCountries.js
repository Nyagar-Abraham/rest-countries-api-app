import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getAllCountries } from '../services/apiCountries';
import { useSearchParams } from 'react-router-dom';

export function useGetCountries() {
	const [searchParams] = useSearchParams();

	const region = searchParams.get('region')?.toLocaleLowerCase() || 'all';

	const { data: countries, isLoading } = useQuery({
		queryKey: ['countries', region],
		queryFn: () => getAllCountries(region),
		placeholderData: keepPreviousData,
	});

	return { countries, isLoading };
}
