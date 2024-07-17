import "./App.css";
import SignUp from "./SignUp";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Users from "./Users";
import UpdateUser from './UpdateUser';
import CreateUser from "./CreateUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>} >
          <Route path="users" element={<Users/>} />
          <Route path="users/:id" element={<UpdateUser/>} />
          <Route path="user/create" element={<CreateUser/>} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
