import React from 'react';
import './BreakTime.css'

const BreakTime = () => {
    let buttons = document.querySelectorAll('#clickable button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'))
            this.classList.add('active')
            const getSeconds = document.getElementById('break-time-seconds');
            getSeconds.innerText = this.innerText

        })
    })

    return (
        <div className='break-container'>
            <h2>Add A Break</h2>
            <div id='clickable' className='break-time'>
                <button className='btn'><span>10</span>s</button>
                <button className='btn'><span>20</span>s</button>
                <button className='btn'><span>30</span>s</button>
                <button className='btn'><span>40</span>s</button>
            </div>
        </div>
    );
};

export default BreakTime;