import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function BorderCountries({ borders }) {
	if (!borders) return null;

	return (
		<ul className="flex flex-wrap gap-2 items-center mt-auto">
			<li className="font-semibold">border countries: </li>
			{borders &&
				borders.map((border) => (
					<Link
						to={`/country/${border}`}
						key={border}
						className="px-3 py-1 rounded-sm text-sm shadow-sm bg-slate-50 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-700"
					>
						{border}
					</Link>
				))}
		</ul>
	);
}

export default BorderCountries;
