import React from 'react';

export default class Home extends React.Component {
    updateCss(event) {
        if (event.type === 'mouseover') {
            /*
                 This functionality can and should be achieved using CSS :hover property
            */
            if (event.target.id === 'gola-1' || event.target.id === 'gola-2') {
                console.log('mouseover');
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

    checkLogin() {
        console.log('login');
    }

    render() {
        return (<section id='outer-section' onMouseOver={this.updateCss} onMouseOut={this.updateCss}>
            <div id="intro">
                <input type="text" placeholder="Email Address"/>
                <input type="password" placeholder="Password"/>
                <button id="login-button" onClick={this.checkLogin}>Login</button>
            </div>
        </section>);
    }
}
