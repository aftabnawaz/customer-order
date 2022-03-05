import React from 'react';
import Label from "../label/label";
import PaymentMethod from "../payment-method/payment-method";
import "./invoice-item.scss";
//Invoice-item
export default function InvoiceItem({ invoiceItem }) {
    return (
        <div className="invoice-item">
            <div className="label-item">
                <Label label={invoiceItem.purchaseType} flag={invoiceItem.flag}/>
            </div>
            <div className="item order-number">
                <div>{invoiceItem.orderNumber}</div>
                <div className='icon'></div>
            </div>
            <div className="item">{invoiceItem.created}</div>
            <div className="item store">
                <img className='flag' src={"/icons/" + invoiceItem.store.country.toLowerCase() + ".svg"} alt='img'></img>
                <div className='country-name'>{invoiceItem.store.text}</div>
            </div>
            <div className='item'>
                <PaymentMethod method={invoiceItem.paymentMethod} />
            </div>
            <div className="item payment-status">
                <div className={"circle " + invoiceItem.paymentStatus.toLowerCase().replace(" ", "-")}></div>
                <div className='text'>{invoiceItem.paymentStatus}</div>
            </div>
            <div className="item amount">{invoiceItem.amount}</div>
        </div>
    );
}