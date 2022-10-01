import React from 'react';
import './BreakTime.css'

const BreakTime = () => {
    function activeBtn() {
        let buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                const getSeconds = document.getElementById('break-time-seconds');
                buttons.forEach(btn => btn.classList.remove('active'))
                this.classList.add('active')
                getSeconds.innerText = this.innerText
                const setItem = this.innerText
                localStorage.setItem('break-time', JSON.stringify(setItem))
            })
        })
    }

    return (
        <div className='break-container'>
            <h2>Add A Break</h2>
            <div id='clickable' className='break-time'>
                <button onClick={activeBtn} className='btn'><span>10</span>s</button>
                <button onClick={activeBtn} className='btn'><span>20</span>s</button>
                <button onClick={activeBtn} className='btn'><span>30</span>s</button>
                <button onClick={activeBtn} className='btn'><span>40</span>s</button>
            </div>
        </div>
    );
};

export default BreakTime;