import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import { getInvoices } from '../data';
import { useSearchParams, useLocation } from 'react-router-dom';

function QueryNavLink({ to, ...props }) {
	// this will return a NavLink that will change the url id but keeps the queryString e.g filter
	const location = useLocation();
	return <NavLink to={to + location.search} {...props} />;
}

function Invoices() {
	let invoices = getInvoices();
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<div style={{ display: 'flex' }}>
			<nav
				style={{
					borderRight: 'solid 1px',
					padding: '1rem',
				}}
			>
				<input
					value={searchParams.get('filter') || ''}
					onChange={(e) => {
						let filter = e.target.value;
						if (filter) return setSearchParams({ filter });
						setSearchParams({});
					}}
				/>
				{invoices
					.filter((invoice) => {
						let filter = searchParams.get('filter');
						if (!filter) return true;
						let name = invoice.name.toLocaleLowerCase();
						return name.startsWith(filter.toLocaleLowerCase());
					})
					.map((invoice) => (
						<QueryNavLink
							className={({ isActive }) =>
								`nav-link ${isActive ? 'active-nav-link' : ''}`
							}
							to={`/invoices/${invoice.number}`}
							key={invoice.number}
						>
							{invoice.name}
						</QueryNavLink>
					))}
			</nav>
			<Outlet />
		</div>
	);
}

export default Invoices;
