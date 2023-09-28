import Stack from "@mui/material/Stack";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import AddTodo from "./AddTodo";
import Groups from "./Groups";
import { useState, useEffect } from "react";
import { GROUPS_API } from "../constants/constants";
import axios from "axios";

const Dashboard = ({ loggedInVigorUser, userGroups, setUserGroups }) => {
  const [testFeed, setTest] = useState(true);
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
      {testFeed ? (
        <Feed userGroups={userGroups} loggedInVigorUser={loggedInVigorUser} />
      ) : (
        <Groups userGroups={userGroups} />
      )}
      <Rightbar userGroups={userGroups} loggedInVigorUser={loggedInVigorUser} />
      {loggedInVigorUser && userGroups && userGroups.length > 0 && (
        <AddTodo
          loggedInVigorUser={loggedInVigorUser}
          userGroups={userGroups}
        />
      )}
    </Stack>
  );
};

export default Dashboard;
