import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Box from "@mui/material/Box";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AddTodo from "./components/AddTodo";
import LoginPage from "./components/LoginPage";

function App() {
  const [loggedInVigorUser, setLoggedInVigorUser] = useState(null);
  const tasqUser = JSON.parse(localStorage.getItem("tasqUser"));
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    tasqUser && setLoggedInVigorUser(tasqUser);
  }, []);
  console.log(loggedInVigorUser);

  return (
    <Box>
      <BrowserRouter>
        <Navbar
          loggedInVigorUser={loggedInVigorUser}
          setLoggedInVigorUser={setLoggedInVigorUser}
          loginOpen={loginOpen}
          setLoginOpen={setLoginOpen}
        />
        <Routes>
          <Route
            path="/"
            element={
              loggedInVigorUser ? (
                <Dashboard loggedInVigorUser={loggedInVigorUser} />
              ) : (
                <Landing
                  loggedInVigorUser={loggedInVigorUser}
                  setLoggedInVigorUser={setLoggedInVigorUser}
                />
              )
            }
          />
          <Route
            element={<Register setLoggedInVigorUser={setLoggedInVigorUser} />}
            path="/register"
          />
          <Route
            element={<LoginPage setLoggedInVigorUser={setLoggedInVigorUser} />}
            path="/login"
          />
        </Routes>

        {loggedInVigorUser && <AddTodo loggedInVigorUser={loggedInVigorUser} />}
      </BrowserRouter>
    </Box>
  );
}

export default App;
