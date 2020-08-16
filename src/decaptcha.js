import React, {useState, useEffect} from 'react';

export default function DeCaptcha() {
    const [counter, updateCounter] = useState(0);
    useEffect(() => {
        // setTimeout(function () {
            // let body = document.getElementsByTagName('body')[0];
            // let gradient = `linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)`;
            // Below is a way to set css property using JavaScript
            // body.style.setProperty('background', gradient);
            // console.log('effect', counter);
            // updateCounter(counter + 1);
        // }, 20000);

        // return () => {
        //     console.log('unmount', counter);
        //
        //     updateCounter(0);
        // };
    });
    return <div className="outer">
        <button onClick={updateCounter.bind(null, counter + 1)}> Increment</button>
        <div className="inner">
            <img src="2_1.jpg" alt="DeCaptcha"/>
            <label>{counter}</label>
        </div>
        <button onClick={updateCounter.bind(null, counter - 1)} disabled={counter <= 0}> Decrement</button>
    </div>
}
