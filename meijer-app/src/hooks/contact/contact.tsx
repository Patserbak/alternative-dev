import { useState, useEffect } from 'react';
import './contact.scss';
import SubmitMessage from '../submitMessage/submitMessage';
import ContactForm from '../contactForm/contactForm';
import Footer from '../footer/footer';
import Header from '../header/header';
import { setLightTheme } from '../../util/util.module';

const Contact = (): JSX.Element => {

    setLightTheme();

    const [submit, setSubmit] = useState<boolean>(sessionStorage.getItem("submit") ? true : false);

    useEffect(() => {
        if (submit) {
            sessionStorage.setItem("submit", JSON.stringify(submit));
        }
    }, [submit]);

    return (
        <>
            <Header classNameAdded="header--contact" />
            <SubmitMessage classNameAdded="submitMessage__page" submit={submit} />
            <div className={`contact ${submit ? "contact--submit" : ""}`}>
                <h1>Project Or Qustion?</h1>
                <div className="contact__text">
                    <span>Send us an e-mail or use the form.</span>
                </div>
                <a href="mailto:contact@meijer.com" className="contact__text__email">contact@meijer.com</a>
                <ContactForm setSubmit={setSubmit} />
            </div>
            <Footer classNameAdded={`${submit ? "footer--fixed" : ""}`} dark={false} />
        </>
    );
}

export default Contact;