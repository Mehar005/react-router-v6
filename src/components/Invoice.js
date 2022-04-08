import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getInvoiceByNumber, deleteInvoice } from '../data';

function Invoice() {
	const params = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const invoice = getInvoiceByNumber(parseInt(params.invoiceId, 10));
	return (
		<main style={{ padding: '1rem' }}>
			<h2>Total Due: {invoice.amount}</h2>
			<p>
				{invoice.name}: {invoice.number}
			</p>
			<p>Due Date: {invoice.due}</p>
			<button
				onClick={() => {
					deleteInvoice(invoice.number);
					navigate(`/invoices${location.search}`);
				}}
			>
				Delete
			</button>
		</main>
	);
}

export default Invoice;
