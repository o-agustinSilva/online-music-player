import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginScreen } from "./screens/LoginScreen";
import { SignupScreen } from "./screens/SignupScreen";
import { AllRoomsScreen } from "./screens/AllRoomsScreen";
import { CreateRoomScreen } from "./screens/CreateRoomScreen";

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen />} class />
        <Route path="/login" element={<LoginScreen />} class />
        <Route path="/signup" element={<SignupScreen />} class />
        <Route path="/rooms" element={<AllRoomsScreen />} class />
        <Route path="/create-room" element={<CreateRoomScreen />} class />
      </Routes>
    </>
  )
}

export default App
