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

  useEffect(() => {
    tasqUser && setLoggedInTasqUser(tasqUser);
  }, []);

  return (
    <Box>
      <Navbar
        loggedInTasqUser={loggedInTasqUser}
        setLoggedInTasqUser={setLoggedInTasqUser}
      />
      {loggedInTasqUser ? (
        <Dashboard loggedInTasqUser={loggedInTasqUser} />
      ) : (
        <Landing />
      )}
      {loggedInTasqUser && <AddTodo />}
    </Box>
  );
}

export default App;
