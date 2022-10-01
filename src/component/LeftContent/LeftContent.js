import React from 'react';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import QandA from '../QandA/QandA';
import RightProfile from '../RightProfile/RightProfile';
import './LeftContent.css'
const LeftContent = () => {
    return (
        <div className='left-data-container'>
            <div className='left-content'>
                <Header></Header>
                <Exercise></Exercise>
                <QandA></QandA>
            </div>
            <RightProfile></RightProfile>
        </div>
    );
};

export default LeftContent;