import React from 'react';
import './RightProfile.css'
import ProfileSummary from '../ProfileSummary/ProfileSummary';
import BreakTime from '../BreakTime/BreakTime';
import ExerciseInfo from '../ExerciseInfo/ExerciseInfo';

const RightProfile = () => {
    return (

        <div className='right-profile'>
            <div className='profile-containers'>
                <ProfileSummary></ProfileSummary>
                <BreakTime></BreakTime>
                <ExerciseInfo></ExerciseInfo>
            </div>
        </div>
    );
};

export default RightProfile;