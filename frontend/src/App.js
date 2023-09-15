import { useState, useEffect } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Dashboard from "./components/Dashboard";
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
      <Navbar
        loggedInTasqUser={loggedInTasqUser}
        setLoggedInTasqUser={setLoggedInTasqUser}
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen}
      />
      {loggedInTasqUser ? (
        <Dashboard loggedInTasqUser={loggedInTasqUser} />
      ) : (
        <Landing
          loggedInTasqUser={loggedInTasqUser}
          setLoggedInTasqUser={setLoggedInTasqUser}
        />
      )}
      {loggedInTasqUser && <AddTodo loggedInTasqUser={loggedInTasqUser} />}
    </Box>
  );
}

export default App;
