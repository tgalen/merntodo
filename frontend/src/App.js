import { useState, useEffect } from "react";
import "./App.css";
import Box from "@mui/material/Box";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

function App() {
  const [loggedInTasqUser, setLoggedInTasqUser] = useState(null);
  const tasqUser = JSON.parse(localStorage.getItem("tasqUser"));

  useEffect(() => {
    tasqUser && setLoggedInTasqUser(tasqUser);
  }, []);

  return (
    <Box>
      <Navbar loggedInTasqUser={loggedInTasqUser} />
      {loggedInTasqUser ? <Dashboard /> : <Landing />}
    </Box>
  );
}

export default App;
