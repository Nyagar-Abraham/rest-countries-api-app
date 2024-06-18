/* eslint-disable react/prop-types */
function Details({ country }) {
	const {
		capital,
		population,
		region,
		subregion,
		name,
		languages,
		currencies,
	} = country;

	const { name: curName } = Object.values(currencies).at(0);

	return (
		<div className="grid md:grid-cols-2 gap-2 w-full">
			<div className="flex flex-col ">
				<h2 className="mb-3 font-bold">{name.official}</h2>
				<p className="space-x-2">
					<strong className="font-semibold">Native name:</strong>{' '}
					<span className="text-sm text-stone-500">{name.common} </span>
				</p>
				<p className="space-x-2">
					<strong className="font-semibold">Population:</strong>{' '}
					<span className="text-sm text-stone-500">{population}</span>
				</p>
				<p className="space-x-2">
					<strong className="font-semibold">region:</strong>
					<span className="text-sm text-stone-500">{region}</span>
				</p>
				<p className="space-x-2">
					<strong className="font-semibold">Sub-region:</strong>
					<span className="text-sm text-stone-500">{subregion}</span>
				</p>
				<p className="space-x-2">
					<strong className="font-semibold">Capital:</strong>
					<span className="text-sm text-stone-500">{capital.at(0)}</span>
				</p>
			</div>
			<div className="flex flex-col ">
				<p className="space-x-2">
					<strong className="font-semibold">country:</strong>{' '}
					<span className="text-sm text-stone-500">name</span>
				</p>
				<p className="space-x-2">
					<strong className="font-semibold">Currency:</strong>{' '}
					<span className="text-sm text-stone-500">{curName}</span>
				</p>
				<p className="space-x-2">
					<strong className="font-semibold">Language:</strong>{' '}
					<span className="text-sm text-stone-500">{languages.fra}</span>
				</p>
			</div>
		</div>
	);
}

export default Details;
