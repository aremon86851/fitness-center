import React from 'react';
import './ExerciseInfo.css'

const ExerciseInfo = () => {
    return (
        <div className='exercise-info-container'>
            <h2>Exercise Details</h2>
            <div className='exercise-time'>
                <h3>Exercise time</h3>
                <p><span id='exercise-time-seconds'>0</span> seconds</p>
            </div>
            <div className='break-seconds'>
                <h3>Break time</h3>
                <p><span id='break-time-seconds'>0</span> seconds</p>
            </div>
            <button>
                Activity Complete
            </button>
        </div>
    );
};

export default ExerciseInfo;