import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Box from "@mui/material/Box";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AddTodo from "./components/AddTodo";

function App() {
  const [loggedInTasqUser, setLoggedInTasqUser] = useState(null);
  const tasqUser = JSON.parse(localStorage.getItem("tasqUser"));
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    tasqUser && setLoggedInTasqUser(tasqUser);
  }, []);
  console.log(loggedInTasqUser);

  return (
    <Box>
      <BrowserRouter>
        <Navbar
          loggedInTasqUser={loggedInTasqUser}
          setLoggedInTasqUser={setLoggedInTasqUser}
          loginOpen={loginOpen}
          setLoginOpen={setLoginOpen}
        />
        <Routes>
          <Route
            path="/"
            element={
              loggedInTasqUser ? (
                <Dashboard loggedInTasqUser={loggedInTasqUser} />
              ) : (
                <Landing
                  loggedInTasqUser={loggedInTasqUser}
                  setLoggedInTasqUser={setLoggedInTasqUser}
                />
              )
            }
          />
          <Route
            element={<Register setLoggedInTasqUser={setLoggedInTasqUser} />}
            path="/register"
          />
        </Routes>

        {loggedInTasqUser && <AddTodo loggedInTasqUser={loggedInTasqUser} />}
      </BrowserRouter>
    </Box>
  );
}

export default App;
