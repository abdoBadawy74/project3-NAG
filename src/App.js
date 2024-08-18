import "./App.css";
import SignUp from "./Pages/Website/Auth/SignUp";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Website/Auth/Login";
import Home from "./Pages/Website/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Users from "./Pages/Dashboard/Users/ShowUsers/Users";
import UpdateUser from "./Pages/Dashboard/Users/UpdateUser";
import CreateUser from "./Pages/Dashboard/Users/CreateUser";
import RequireAuth from "./Pages/Website/Auth/RequireAuth";
import PersistLogin from "./Pages/Website/Auth/PersistLogin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />

        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<UpdateUser />} />
              <Route path="user/create" element={<CreateUser />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
