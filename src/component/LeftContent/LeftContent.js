import React from 'react';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import RightProfile from '../RightProfile/RightProfile';
import './LeftContent.css'
const LeftContent = () => {
    return (
        <div className='left-data-container'>
            <div className='left-content'>
                <Header></Header>
                <Exercise></Exercise>
            </div>
            <div className='right-profile'>
                <RightProfile></RightProfile>
            </div>
        </div>
    );
};

export default LeftContent;