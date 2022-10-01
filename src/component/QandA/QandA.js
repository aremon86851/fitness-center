import React from 'react';
import './QAndA.css'
const QandA = () => {
    return (
        <div>
            <h2>Question And Answer</h2>
            <div className='qna'>
                <div>
                    <h2>Q: How does react work?</h2>
                    <p><span style={{ fontWeight: 'bold' }}>A:</span> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>
                </div>
            </div>
        </div>
    );
};

export default QandA;