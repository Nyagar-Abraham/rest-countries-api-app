/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function CountryItem({ country }) {
	// console.log(country);
	const {
		name,
		flags: { svg },
		capital,
		population,
		region,
	} = country;
	return (
		<Link to={`/country/${name.common}`}>
			<li className="shadow-md rounded-md truncate h-full bg-slate-50 dark:bg-slate-900 ">
				<div className="border-b border-slate-200 dark:border-slate-400 ">
					<img
						className="w-full  opacity-70 "
						src={svg}
						alt={`image of flag ${name?.common} `}
					/>
				</div>
				<div className="py-3 px-2 flex flex-col ">
					<p className="font-semibold text-[1.1rem] mb-2 ">{name.common} </p>

					<Item value={population} property="Population" />
					<Item value={capital.at(0)} property="Capital" />
					<Item value={region} property="Region" />
				</div>
			</li>
		</Link>
	);
}

function Item({ property, value }) {
	return (
		<p className="space-x-2">
			<strong className="font-semibold">{property}:</strong>{' '}
			<span className="text-sm text-stone-500">{value}</span>
		</p>
	);
}

export default CountryItem;
