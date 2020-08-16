import React, {useState} from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';
import Home from "./home";

export const LoginContext = React.createContext({
    isLoggedIn: true
});

export default function Login() {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function updateCss(event) {
        if (event.type === 'mouseover') {
            /*
                 This functionality can and should be achieved using CSS :hover property
            */
            if (event.target.id === 'gola-1' || event.target.id === 'gola-2') {
                // console.log('mouseover');
                // event.target.style.setProperty('animation', 'shadow 5s infinite');
                // event.target.style.setProperty('box-shadow', '0px 14px 10px 12px teal');
            }
            if (event.target.closest('div').id === 'gola-1' || event.target.closest('div').id === 'gola-2') {
                // event.target.closest('div').style.setProperty('animation', 'none');
                // event.target.closest('div').style.setProperty('box-shadow', '0px 14px 10px 12px teal');
            }

        } else {
            // if (event.target.id === 'gola-1' || event.target.id === 'gola-2')
            //     event.target.style.setProperty('box-shadow', 'none');
            // if (event.target.closest('div').id === 'gola-1' || event.target.closest('div').id === 'gola-2')
            //     event.target.closest('div').style.setProperty('box-shadow', 'none');
        }
    }

    function checkLogin(e) {
        console.log("Login Submitted");
        e.preventDefault();
        if (userName === 'R' && password === 'k') {
            setIsLoggedIn(true);

        }
        console.log("Condition Checked ");

        // return <Redirect to="/"/>
    }

    function updateUsername(event) {
        console.log(event.target.value);
        setUsername(event.target.value);
    }

    function updatePassword(event) {
        console.log(event.target.value);

        setPassword(event.target.value);
    }

    console.log('In App');


    return (<section id='outer-section' onMouseOver={updateCss} onMouseOut={updateCss}>
        {isLoggedIn ? <Home/> : <div id="gola-1">
            <form onSubmit={checkLogin}>
                <input type="text" placeholder="Email Address" onChange={updateUsername}/>
                <input type="password" placeholder="Password" onChange={updatePassword}/>
                <input type="submit" id="login-button" onClick={checkLogin}/>
            </form>
        </div>}
        {/*<hr/>*/}
        {/*<div id="gola-2">*/}
        {/*    <input type="text" placeholder="Email Address"/>*/}
        {/*    <input type="password" placeholder="Password"/>*/}
        {/*    <button id="login-button">Login</button>*/}
        {/*</div>*/}
    </section>);
}

