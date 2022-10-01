import React from 'react';
import './DetailExercise.css'

const DetailExercise = ({ exercise }) => {
    const { name, age, time, img, description } = exercise;

    const addRequreTime = time => {
        const addTime = document.getElementById('exercise-time-seconds');
        const getPreSeconds = parseInt(addTime.innerText);
        const setTime = getPreSeconds + parseInt(time);
        addTime.innerText = setTime;
    }


    return (
        <div className='single-data-container'>
            <div>
                <img className='exercise-img' src={img} alt="" />
                <h3 className='exercise-name'>{name}</h3>
                <h5 className='exercise-age'>Age: <span className='inside-exercise-age'>{age}</span></h5>
                <p className='exercise-description'>{description.slice(0, 100)}...</p>
                <h5 className='exercise-required-time'>Required Time: <span className='inside-required-time'>{time}</span>s</h5>
            </div>
            <button onClick={() => addRequreTime(time)} className='exercise-btn'>Add to list</button>
        </div>
    );
};

export default DetailExercise;