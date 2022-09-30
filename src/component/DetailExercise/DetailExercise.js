import React from 'react';
import './DetailExercise.css'

const DetailExercise = ({ exercise }) => {
    const { name, age, time, img, description } = exercise;
    return (
        <div className='single-data-container'>
            <img className='exercise-img' src={img} alt="" />
            <h3 className='exercise-name'>{name}</h3>
            <h5 className='exercise-age'>Age: <span>{age}</span></h5>
            <p className='exercise-description'>{description}</p>
            <h5 className='exercise-required-time'>Required Time: <span>{time}</span></h5>
        </div>
    );
};

export default DetailExercise;