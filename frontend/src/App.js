import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Groups2Icon from "@mui/icons-material/Groups2";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  );
}

export default App;
