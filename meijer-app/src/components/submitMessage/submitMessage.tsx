import React, { useState } from 'react';
import './submitMessage.scss';
import Icon from '../icon/icon';

interface SubmitMessageProps {
    classNameAdded: string;
    submit: boolean;
}

const SubmitMessage = ({ classNameAdded = '', submit = false }: SubmitMessageProps): JSX.Element => {

    return (
        <div className={`submitMessage ${classNameAdded} ${submit ? "submitMessage--active" : ""}`}>
            <span>Thank you for your message.</span>
        </div>
    );
}

export default SubmitMessage;
