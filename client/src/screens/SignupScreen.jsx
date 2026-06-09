import React, { useContext }from 'react'
import Signup from '../components/Signup';
import ThemeContext from "../context/ThemeProvider";
import Header from '../components/Header';

export function SignupScreen() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="App" data-theme={theme? "dark" : "light"}>
            <Header/>
            <Signup />
        </div>
    )
}
