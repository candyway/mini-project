import React from 'react';
import icon from './page1/ICONS.svg'

const Contacts = () => {
    return (
        <div className='container'>
            <img src={icon} alt="" />
            <div className='contacts'>
            <h2 className='title-skills'>Contacts</h2>
            <h3 className='mini-title-skills'>Location</h3>
            <p className='txt-skills'>Moscow,Russia</p>
            <h3 className='mini-title-skills'>Telegram/Whatsapp</h3>
            <p className='txt-skills'>+7 (905) 123-45-67</p>
            <h3 className='mini-title-skills'>Email</h3>
            <p className='email'>webdev@protonmail.com</p>
            </div>
        </div>
    );
};

export default Contacts;