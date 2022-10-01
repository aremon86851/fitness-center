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
                <div>
                    <h2>Q: Difference between props and state?</h2>
                    <p><span style={{ fontWeight: 'bold' }}>A:</span>
                        <span>PROPS: </span>Props are used to pass data from one component to another.<br />
                        <span>STATE: </span>The state is a local data storage that is local to the component only and cannot be passed to other components.
                    </p>
                </div>
                <div>
                    <h2>Q: What is use of useEffect in react except data load from api?</h2>
                    <p><span style={{ fontWeight: 'bold' }}>A:</span>Actually useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.</p>
                </div>
            </div>
        </div>
    );
};

export default QandA;