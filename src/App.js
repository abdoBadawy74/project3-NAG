import logo from "./logo.svg";
import "./App.css";
import SignUp from "./SignUp";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div className="App contianer">
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
