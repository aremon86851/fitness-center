import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div>
            <h2 className='website-name'><span className='name-icon'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span><span className='web-name'>Fitness-Center</span></h2>
        </div>
    );
};

export default Header;