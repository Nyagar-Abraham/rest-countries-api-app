import { useNavigate } from 'react-router-dom';
import BorderCountries from '../ui/BorderCountries';
import Details from '../ui/Details';
import { useCountry } from '../hooks/useCountry';
import Spinner from '../ui/Spinner';

function CountryPage() {
	const navigate = useNavigate();
	const { country, isLoading } = useCountry();

	if (isLoading)
		return (
			<div className="flex justify-center items-center  h-screen">
				<Spinner />
			</div>
		);

	return (
		<div className="my-5 mx-6">
			<div className="mb-10">
				<button
					onClick={() => navigate(-1, { replace: true })}
					className="px-3 py-1 rounded-sm dark:bg-slate-900 dark:text-slate-50 text-slate-600 font-semibold shadow-sm bg-stone-50 dark:hover:bg-slate-700  hover:bg-slate-200 text-indigo-800 focus:ring focus:ring-2 focus:ring-stone-400 focus:outline-none "
				>
					&larr;back
				</button>
			</div>
			<div className="grid  md:grid-cols-2 gap-5 dark:bg-slate-900 rounded-md truncate ">
				<div>
					<img src={country.at(0).flags.svg} alt={country.at(0).flags.alt} />
				</div>
				<div className="flex flex-col gap-4  px-4 py-2">
					<Details country={country.at(0)} />
					<BorderCountries borders={country?.at(0)?.borders} />
				</div>
			</div>
		</div>
	);
}

export default CountryPage;
