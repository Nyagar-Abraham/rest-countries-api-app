import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { useDarkMode } from '../context/DarkModeContext';
import { Link } from 'react-router-dom';

function Header() {
	const { toggleDarkMode, isDarkMode } = useDarkMode();

	return (
		<header className="  font-semibold my-2 py-2 px-4 shadow-sm flex items-center justify-between dark:bg-slate-900">
			<Link to="/">Where in the world?</Link>
			<div className="flex items-center gap-1">
				<button
					onClick={toggleDarkMode}
					className={`bg-stone-200 dark:bg-slate-950 h-5 w-8 flex justify-center items-center rounded-full ${
						isDarkMode ? 'text-stone-50' : 'text-stone-600'
					}`}
				>
					{isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
				</button>

				<p className="text-sm">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
			</div>
		</header>
	);
}

export default Header;
