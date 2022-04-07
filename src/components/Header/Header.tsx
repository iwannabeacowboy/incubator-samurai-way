import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://market-research-companies.in//images/default.jpg'
                alt='Company logo'/>
        </header>
    )
}

export default Header;