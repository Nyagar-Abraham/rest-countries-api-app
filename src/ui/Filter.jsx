import { useSearchParams } from 'react-router-dom';

/* eslint-disable react/prop-types */
function Filter({ options }) {
	const [searchParams, setSearchParams] = useSearchParams();

	function handleFilter(value) {
		const region = searchParams.get('region');

		searchParams.set('region', value);

		if (value !== region) searchParams.set('page', 1);

		setSearchParams(searchParams);
	}

	return (
		<select
			onChange={(e) => handleFilter(e.target.value)}
			className="dark:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-200 text-sm hover:bg-slate-50 shadow-sm py-1 px-2 rounded-sm dark:focus:ring-slate-500  dark:hover:bg-slate-700"
		>
			<option className="bg-stone-50 px-5" value="">
				filter by region
			</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
}

export default Filter;
