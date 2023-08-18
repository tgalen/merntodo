import logo from "./logo.svg";
import "./App.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Groups2Icon from "@mui/icons-material/Groups2";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Box>
      <Navbar />
      <Dashboard />
    </Box>
  );
}

export default App;
