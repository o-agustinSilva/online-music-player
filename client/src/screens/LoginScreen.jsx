import React, { useContext }from 'react'
import Options from '../components/Options';
import Login from '../components/Login';
import ThemeContext from "../context/ThemeProvider";
import Header from '../components/Header';

export function LoginScreen() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="App" data-theme={theme? "dark" : "light"}>
            <Header/>
            <Login />
        </div>
    )
}
