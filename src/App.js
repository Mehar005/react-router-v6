import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className="App">
			<h1 style={{ background: 'green' }}>React Router v6</h1>
			<nav
				style={{
					borderBottom: 'solid 1px',
					paddingBottom: '1rem',
					display: 'flex',
					justifyContent: 'center',
					gap: '20px',
				}}
			>
				<Link to="/invoices">invoices</Link>
				<Link to="/expences">expences</Link>
			</nav>
			<Outlet />
		</div>
	);
}

export default App;
