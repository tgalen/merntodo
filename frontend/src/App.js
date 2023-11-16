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
import { USERS_API, GROUPS_API } from "./constants/constants";
import axios from "axios";
import GroupDashboard from "./components/GroupDashboard";

function App() {
  const [loggedInVigorUser, setLoggedInVigorUser] = useState(null);
  const vigorUser = JSON.parse(localStorage.getItem("vigorUser"));
  const [loginOpen, setLoginOpen] = useState(false);
  const [userGroups, setUserGroups] = useState(null);
  const [users, setUsers] = useState(false);

  const config = loggedInVigorUser && {
    headers: {
      Authorization: `Bearer ${loggedInVigorUser.token}`,
    },
  };

  userGroups && console.log(userGroups.length);

  const getUsers = async () => {
    const response = await axios.get(USERS_API);

    if (response) {
      setUsers(response.data);
    }
  };

  const getGroups = async () => {
    const response = await axios.get(GROUPS_API, config);

    if (response) {
      setUserGroups(response.data);
    }
  };

  useEffect(() => {
    vigorUser && setLoggedInVigorUser(vigorUser);
    getUsers();
  }, []);

  useEffect(() => {
    loggedInVigorUser && getGroups();
  }, [loggedInVigorUser]);
  console.log(loggedInVigorUser);
  console.log(users);
  console.log(userGroups);

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
            element={<LoginPage setLoggedInVigorUser={setLoggedInVigorUser} />}
            path="/login"
          />
          <Route
            element={
              <GroupDashboard
                userGroups={userGroups}
                loggedInVigorUser={loggedInVigorUser}
                setUserGroups={setUserGroups}
                users={users}
              />
            }
            path="/:id"
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
