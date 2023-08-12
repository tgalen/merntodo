import logo from "./logo.svg";
import "./App.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Groups2Icon from "@mui/icons-material/Groups2";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        {/* <Login /> */}
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
