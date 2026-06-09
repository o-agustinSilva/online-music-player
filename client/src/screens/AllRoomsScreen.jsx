import React, { useContext }from 'react'
import Rooms from '../components/Rooms';
import ThemeContext from "../context/ThemeProvider";
import Header from '../components/Header';

export function AllRoomsScreen() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="App" data-theme={theme? "dark" : "light"}>
            <Header/>
            <Rooms/>
        </div>
    )
}
