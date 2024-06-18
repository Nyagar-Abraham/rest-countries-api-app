import { getCode } from 'country-list';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Filter from './Filter';

const filterOptions = [
	{ label: 'All', value: 'all' },
	{ label: 'Africa', value: 'Africa' },
	{ label: 'Americas', value: 'America' },
	{ label: 'Europe', value: 'Europe' },
	{ label: 'Asia', value: 'Asia' },

	{ label: 'Oceania', value: 'Oceania' },
];

function isValidCountryName(countryName) {
	const countryCode = getCode(countryName);
	return countryCode !== undefined;
}

function Search() {
	const navigate = useNavigate();
	const [country, setCountry] = useState('');
	const [error, setError] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		setError('');
		const formData = new FormData(e.target);
		const { country: value } = Object.fromEntries(formData.entries());

		if (!isValidCountryName(value)) {
			setError('country name invalid');
			setCountry('');
			return;
		}
		setCountry('');
		navigate(`/country/${value}`);
	}

	return (
		<div className="my-2 mx-4 mt-6 flex justify-between  items-center">
			<form className="flex flex-col" onSubmit={handleSubmit}>
				<input
					onChange={() => setError('')}
					defaultValue={country}
					className="dark:bg-slate-900 focus:outline-none focus:ring-1 bg-inherit focus:ring-stone-200 hover:bg-stone-200 shadow-sm py-1 px-2 rounded-sm text-inherit dark:hover:bg-slate-600 "
					type="text"
					name="country"
					placeholder="seach country..."
				/>
				<label className="text-xs text-red-600">{error}</label>
			</form>
			<Filter options={filterOptions} />
		</div>
	);
}

export default Search;
