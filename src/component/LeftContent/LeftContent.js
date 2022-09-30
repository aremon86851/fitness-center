import React from 'react';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import './LeftContent.css'
const LeftContent = () => {
    return (
        <div className='left-data-container'>
            <div className='left-content'>
                <Header></Header>
                <Exercise></Exercise>
            </div>
            <div className='right-profile'>
                <h2>hey this is flex</h2>
            </div>
        </div>
    );
};

export default LeftContent;