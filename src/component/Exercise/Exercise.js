import React, { useEffect, useState } from 'react';
import DetailExercise from '../DetailExercise/DetailExercise';
import './Exercise.css'

const Exercise = () => {
    const [exercises, setExercises] = useState([])
    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    return (
        <div>
            <h3>Select today's exercise</h3>
            <div className='full-content-container'>
                {
                    exercises.map(exercise => <DetailExercise key={exercise.id} exercise={exercise}></DetailExercise>)
                }
            </div>
        </div>
    );
};

export default Exercise;