import React, { useState, useEffect } from 'react';
import './contactForm.scss';

interface ContactFormProps {
    setSubmit: (value: boolean) => void;
}

const ContactForm = ({ setSubmit = () => { } }: ContactFormProps): JSX.Element => {

    const [name, setName] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const expMail = /^[^\s@]{1,64}@[^\s@]{1,64}\.[^\s@]{1,64}$/;
    const maxInput = 64;
    const maxMessage = 1000;

    const [errorMessage, setErrorMessage] = useState<boolean>(false);

    const sendForm = (name: string, company: string, email: string, phone: string, message: string): boolean => {
        return true;
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (name && email && expMail.test(email) && message) {
            setSubmit(sendForm(name.substring(0, maxInput - 1), company.substring(0, maxInput - 1), email.substring(0, maxMessage - 1), phone.substring(0, maxInput - 1), message.substring(0, maxInput - 1)));
        } else {
            setErrorMessage(true);
        }
    }

    return (
        <>
            <form className="form" onSubmit={onSubmit}>
                <label className="form__name inputLabel">
                    <input id="name" className="inputLabel__input" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    <span className={`inputLabel__placeholder ${(errorMessage && !name) ? "inputLabel__placeholder--invalid" : "inputLabel__placeholder--valid"}`}>Name</span>
                </label>
                <label className="form__company inputLabel">
                    <input id="company" className="inputLabel__input" placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} />
                    <span className="inputLabel__placeholder">Company</span>
                </label>
                <label className="form__email inputLabel">
                    <input id="email" className="inputLabel__input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <span className={`inputLabel__placeholder ${(errorMessage && (!email || !expMail.test(email))) ? "inputLabel__placeholder--invalid" : "inputLabel__placeholder--valid"}`}>Email</span>
                </label>
                <label className="form__phone inputLabel">
                    <input id="phone" className="inputLabel__input" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
                    <span className="inputLabel__placeholder">Phone</span>
                </label>
                <label className="form__message textareaLabel">
                    <textarea id="message" className="textareaLabel__input" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
                    <span className={`textareaLabel__placeholder ${(errorMessage && !message) ? "textareaLabel__placeholder--invalid" : "textareaLabel__placeholder--valid"}`}>Message</span>
                </label>
                <div className="form__submit">
                    <button type="submit" className="form__submit__button"><span>Submit</span></button>
                </div>
                <div className={`form__error-message ${(errorMessage && (!name || ((!email || !expMail.test(email))) || !message)) ? "form__error-message--visible" : ""}`}><span>One or more fields have an error. Please check and try
                    again.</span>
                </div>
            </form>
        </>
    );
}

export default ContactForm;
