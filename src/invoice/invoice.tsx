import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InvoiceItem from "./invoice-item/invoice-item";
import Pagination from "./pagination/pagination";
import CustomerContact from "./customer-contact/customer-contact";
import "./invoice.scss";

function Invoice() {
	const { invoiceData } = useSelector((state: any) => state);
	const [filterInvoiceItems, setFilterInvoiceItems] = useState<any[]>();

	useEffect(() => {
		if (invoiceData) {
			handlePagination(1);
		}
	}, [invoiceData]);

	const handlePagination = (pageNo) => {
		const _paginateData = paginate(pageNo);
		const _invoiceData = [...invoiceData];
		const _filterInvoiceItems = _invoiceData.splice(_paginateData.startIndex, _paginateData.endIndex);
		setFilterInvoiceItems(_filterInvoiceItems);
	}

	function paginate(
		currentPage: number = 1,
		pageSize: number = 5,
	) {
		const endIndex = pageSize * currentPage;
		const startIndex = endIndex - pageSize;

		return {
			startIndex: startIndex,
			endIndex: endIndex
		};
	}

	return (
		<div className="invoice">
			<div className='customer-name'>John Anne (19960330-3067)</div>
			<div className="container">
				<CustomerContact />
				<div className='customer-order-help'>
					<div className='customer-order'>John's orders</div>
					<div className='customer-help'>
						<div className="i-icon">i</div>
						Help
					</div>
				</div>
				<div className="header">
					<div className="label"></div>
					<div className="item">Order number</div>
					<div className="item">Created</div>
					<div className="item">Store</div>
					<div className="item">Payment method</div>
					<div className="item">Payment status</div>
					<div className="item">Amount</div>
				</div>
				{filterInvoiceItems &&
					filterInvoiceItems.map((invoiceItem) => {
						return (
							<div >
								<InvoiceItem invoiceItem={invoiceItem} />
							</div>
						);
					})
				}
				<Pagination handlePagination={handlePagination} />
			</div>
		</div>
	);
}
export default Invoice;
