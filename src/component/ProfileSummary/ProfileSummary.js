import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProfileSummary.css'

const ProfileSummary = () => {
    return (
        <div>
            <div className='profile-summary-top'>
                <div>
                    <img src="https://images.squarespace-cdn.com/content/v1/5b7e685d8ab722146afd7529/1564600902218-403CMIW9V4G2UC13A25W/PP_01.jpg" alt="" />
                </div>
                <div className='profile-info'>
                    <h2 className='profile-name'>Noman Bepari</h2>
                    <p className='profile-location'>NYC, USA</p>
                </div>
            </div>
            <div className='profile-details'>
                <div>
                    <h2>63<small className='kg'>kg</small> </h2>
                    <p className='weight'>Weight</p>
                </div>
                <div>
                    <h2>5.4</h2>
                    <p className='height'>Height</p>
                </div>
                <div>
                    <h2>20<small className='yrs'>yrs</small></h2>
                    <p className='age'>age</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileSummary;