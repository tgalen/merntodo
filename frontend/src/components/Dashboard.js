import Stack from "@mui/material/Stack";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import AddTodo from "./AddTodo";
import { useState, useEffect } from "react";
import { GROUPS_API } from "../constants/constants";
import axios from "axios";

const Dashboard = ({ loggedInVigorUser }) => {
  const [userGroups, setUserGroups] = useState(null);

  const config = {
    headers: {
      Authorization: `Bearer ${loggedInVigorUser.token}`,
    },
  };

  const getGroups = async () => {
    const response = await axios.get(GROUPS_API, config);

    setUserGroups(response.data);
  };

  useEffect(() => {
    getGroups();
  }, []);

  console.log(userGroups);

  return (
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar />
      <Feed userGroups={userGroups} loggedInVigorUser={loggedInVigorUser} />
      <Rightbar />
      {loggedInVigorUser && userGroups && userGroups.length > 0 && (
        <AddTodo loggedInVigorUser={loggedInVigorUser} />
      )}
    </Stack>
  );
};

export default Dashboard;
