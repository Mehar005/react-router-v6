import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Invoices from './components/Invoices';
import Invoice from './components/Invoice';
import Expences from './components/Expences';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/invoices" element={<Invoices />}>
						<Route path=":invoiceId" element={<Invoice />}></Route>
					</Route>
					<Route path="/expences" element={<Expences />} />
					<Route
						path="*"
						element={
							<main style={{ padding: '1rem' }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Route>
			</Routes>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
