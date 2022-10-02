import React, { useEffect, useState } from 'react';
import './BreakTime.css'

function activeBtn() {
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'))
            this.classList.add('active')
            // Add Local Storage
            localStorage.setItem('breakTime', this.innerText)
            const getSeconds = document.getElementById('break-time-seconds');
            getSeconds.innerText = this.innerText
        })
    })
}

const BreakTime = () => {

    useEffect(() => {
        //Get From local storage
        const setItemFromLocal = localStorage.getItem('breakTime')
        if (setItemFromLocal) {
            console.log(setItemFromLocal)
            const getSeconds = document.getElementById('break-time-seconds');
            getSeconds.innerText = setItemFromLocal
        }
    }, [])

    return (
        <div className='break-container'>
            <h2>Add A Break <small>(in seconds)</small></h2>
            <div id='clickable' className='break-time'>
                <button onClick={activeBtn} className='btn'><span>10</span></button>
                <button onClick={activeBtn} className='btn'><span>20</span></button>
                <button onClick={activeBtn} className='btn'><span>30</span></button>
                <button onClick={activeBtn} className='btn'><span>40</span></button>
            </div>
        </div>
    );
};

export default BreakTime;