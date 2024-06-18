import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { useParams } from 'react-router-dom';
import { getCountry } from '../services/apiCountries';

export function useCountry() {
	const { name } = useParams();

	const { data: country, isLoading } = useQuery({
		queryKey: ['country', name],
		queryFn: async () => await getCountry(name),
		placeholderData: keepPreviousData,
	});

	return { country, isLoading };
}
