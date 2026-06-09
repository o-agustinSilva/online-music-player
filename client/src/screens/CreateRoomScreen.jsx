import React, { useContext }from 'react'
import CreateRoom from '../components/CreateRoom';
import ThemeContext from "../context/ThemeProvider";
import Header from '../components/Header';

export function CreateRoomScreen() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="App" data-theme={theme? "dark" : "light"}>
            <Header/>
            <CreateRoom />
        </div>
    )
}
