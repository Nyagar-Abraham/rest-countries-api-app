import { useSearchParams } from 'react-router-dom';
import { PAGE_ITEMS } from '../services/Constants';

/* eslint-disable react/prop-types */
function Pagination({ count }) {
	const [searchParams, setSearchparams] = useSearchParams();

	const pageCount = Math.ceil(count / PAGE_ITEMS);

	let page = +searchParams.get('page') || 1;

	function handlePagination(move) {
		if (move === 'inc' && page < pageCount) {
			page++;
		}
		if (move === 'dec' && 1 < page) {
			page--;
		}

		searchParams.set('page', page);

		setSearchparams(searchParams);
	}

	return (
		<div className="flex items-center justify-between right-0  text-sm mt-3 p-2 fixed bottom-0 w-full bg-white border dark:border-slate-600 border-slate-200 dark:bg-slate-900">
			<p>
				<span className="font-semibold">{(page - 1) * PAGE_ITEMS + 1}</span>{' '}
				&rarr;{' '}
				<span className="font-semibold">
					{page === pageCount ? count : page * PAGE_ITEMS}
				</span>{' '}
				of <span className="font-semibold">{count}</span> countries
			</p>
			<div className="flex items-center justify-between gap-5">
				<Button disabled={page === 1} onClick={() => handlePagination('dec')}>
					&larr;prev
				</Button>
				<Button
					disabled={page === pageCount}
					onClick={() => handlePagination('inc')}
				>
					next&rarr;
				</Button>
			</div>
		</div>
	);
}

function Button({ children, onClick, disabled }) {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className="dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-700  
  py-1 px-4 bg-slate-200  cursor-pointer font-semibold text-slate-700 rounded-sm hover:bg-slate-300 hover:text-slate-900 dark:hover:text-slate-200 focus:outline-none focus:ring focus:ring-2 focus:ring-slate-400 disabled:cursor-not-allowed "
		>
			{children}
		</button>
	);
}

export default Pagination;
