import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./home";
import Login from "./login";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route  path="/home" component={Home}/>
                <Route  path="/login" component={Login}/>
                <Route  path="/" component={Login}/>
            </Switch>
        </Router>);
}
//
// const themes = {
//     light: {
//         foreground: "#000000",
//         background: "#eeeeee"
//     },
//     dark: {
//         foreground: "#ffffff",
//         background: "#222222"
//     }
// };
//
// const ThemeContext = React.createContext(themes.light);
//
// function App() {
//     return (
//         <ThemeContext.Provider value={themes.dark}>
//             <Toolbar/>
//         </ThemeContext.Provider>
//     );
// }
//
// function Toolbar(props) {
//     return (
//         <div>
//             <ThemedButton/>
//         </div>
//     );
// }
//
// function ThemedButton() {
//     const theme = useContext(ThemeContext);
//     return (
//         <button style={{background: theme.background, color: theme.foreground}}>
//             I am styled by theme context!
//         </button>
//     );
// }
