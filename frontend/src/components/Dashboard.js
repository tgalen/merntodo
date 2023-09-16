import Stack from "@mui/material/Stack";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import { useState, useEffect } from "react";
import { TODOS_API } from "../constants/constants";
import axios from "axios";

const Dashboard = ({ loggedInVigorUser }) => {
  const [userGroups, setUserGroups] = useState(null);

  const config = {
    headers: {
      Authorization: `Bearer ${loggedInVigorUser.token}`,
    },
  };

  const getGroups = async () => {
    const response = await axios.get(TODOS_API);
  };

  return (
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar />
      <Feed />
      <Rightbar />
    </Stack>
  );
};

export default Dashboard;
