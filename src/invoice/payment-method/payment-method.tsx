import React from "react";
import "./payment-method.scss";
export default function PaymentMethod({ method }) {
    const images = {
        visa: "visa.png",
        trustly: "trustly.svg",
        invoice: "Abc.svg",
        amex: "amex.png",
        manual: "amex.png",
        paypal: "paypal.png"
    }
    const url = "./icons/" + images[method.type];

    return (
        <div className='payment-method'>
            <img className={'icon ' + method.type} src={url} alt="" />
            <div className={method.type + '-text'}>{method.text}</div>
        </div>
    );
}
