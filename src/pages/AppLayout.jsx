import Header from '../ui/Header';
import { Outlet } from 'react-router-dom';

function AppLayout() {
	return (
		<div className="max-w-[1100px] mx-auto ">
			<Header />
			<main className="">
				<Outlet />
			</main>
		</div>
	);
}

export default AppLayout;
