import React from 'react';
import "./customer-contact.scss";
export default function CustomerContact() {
    return (
        <div className="customer-contact-page">
            <div className='customer-contact'>
                <div>
                    <img className='icon' src="./icons/email-phone.svg" alt="" />
                    Contact John
                    <div className='mid-text'>Johnanne@Abc.com</div>
                    <div>+467212346</div>
                </div>
            </div>
            <div className='shipping-address'>
                <div>
                    <img className='icon' src="./icons/shipping.svg" alt="" />
                    Shipping Address
                    <div className='mid-text'>Abcvägen 123,</div>
                    <div>12345 Stockholm, Sweden</div>
                </div>
            </div>
            <div className='invoice-address'>
                <div>
                    <img className='icon' src="./icons/invoice.svg" alt="" />
                    Invoice Address
                    <div className='mid-text'>Abcvägen 123,</div>
                    <div>12345 Stockholm, Sweden</div>
                </div>
            </div>
        </div>
    );
}
