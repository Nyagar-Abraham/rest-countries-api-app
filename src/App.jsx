import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';

import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import AppLayout from './pages/AppLayout';
import './index.css';

const queryClient = new QueryClient();
function App() {
	return (
		<>
			<DarkModeProvider>
				<QueryClientProvider client={queryClient}>
					<BrowserRouter>
						<Routes>
							<Route element={<AppLayout />}>
								<Route path="/" element={<HomePage />} />
								<Route path="/country/:name" element={<CountryPage />} />
							</Route>
						</Routes>
					</BrowserRouter>
				</QueryClientProvider>
			</DarkModeProvider>
		</>
	);
}

export default App;
