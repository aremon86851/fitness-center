import React from 'react';
import './ExerciseInfo.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ExerciseInfo = () => {

    const notify = () => toast("Wow activity is complete");
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
            <button className='activity-btn' onClick={notify}>
                Activity Complete
            </button>
            <ToastContainer position="bottom-right" />
        </div>
    );
};

export default ExerciseInfo;