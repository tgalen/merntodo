import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Box from "@mui/material/Box";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import LoginPage from "./components/LoginPage";
import LoginDialog from "./components/LoginDialog";
import Groups from "./components/Groups";

function App() {
  const [loggedInVigorUser, setLoggedInVigorUser] = useState(null);
  const vigorUser = JSON.parse(localStorage.getItem("vigorUser"));
  const [loginOpen, setLoginOpen] = useState(false);
  const [userGroups, setUserGroups] = useState(null);

  console.log(userGroups);

  useEffect(() => {
    vigorUser && setLoggedInVigorUser(vigorUser);
  }, []);
  console.log(loggedInVigorUser);

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  return (
    <Box
      style={{ minHeight: "100vh" }}
      sx={{ backgroundColor: "tertiary.main" }}
    >
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
                <Dashboard
                  loggedInVigorUser={loggedInVigorUser}
                  userGroups={userGroups}
                  setUserGroups={setUserGroups}
                />
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
            element={
              <Groups userGroups={userGroups} setUserGroups={setUserGroups} />
            }
            path="/groups"
          />
          <Route
            element={<LoginPage setLoggedInVigorUser={setLoggedInVigorUser} />}
            path="/login"
          />
        </Routes>
        <LoginDialog
          loginOpen={loginOpen}
          setLoginOpen={setLoginOpen}
          handleLoginClose={handleLoginClose}
          loggedInVigorUser={loggedInVigorUser}
          setLoggedInVigorUser={setLoggedInVigorUser}
        />
      </BrowserRouter>
    </Box>
  );
}

export default App;
