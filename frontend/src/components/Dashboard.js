import Stack from "@mui/material/Stack";
import Sidebar from "../components/Sidebar";
import Container from "@mui/material/Container";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import AddTodo from "./AddTodo";
import AddGroup from "./AddGroup";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GroupsIcon from "@mui/icons-material/Groups";

import Box from "@mui/material/Box";
import Groups from "./Groups";
import { useState, useEffect } from "react";
import { GROUPS_API } from "../constants/constants";
import axios from "axios";

const Dashboard = ({ loggedInVigorUser, userGroups, setUserGroups }) => {
  const [display, setDisplay] = useState("todos");
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${loggedInVigorUser.token}`,
  //   },
  // };

  // const getGroups = async () => {
  //   const response = await axios.get(GROUPS_API, config);

  //   setUserGroups(response.data);
  // };

  // useEffect(() => {
  //   getGroups();
  // }, []);

  const handleNavChange = (e, value) => {
    setDisplay(value);
  };

  console.log(userGroups);
  return (
    <Container>
      <Box>
        <BottomNavigation
          showLabels
          value={display}
          onChange={handleNavChange}
          sx={{ backgroundColor: "inherit" }}
        >
          <BottomNavigationAction
            label="Todos"
            icon={<FormatListBulletedIcon />}
            value="todos"
          />
          <BottomNavigationAction
            label="Groups"
            icon={<GroupsIcon />}
            value="groups"
          />
        </BottomNavigation>
      </Box>
      {/* <Feed userGroups={userGroups} loggedInVigorUser={loggedInVigorUser} />
      {loggedInVigorUser && userGroups && userGroups.length > 0 && (
        <AddTodo
          loggedInVigorUser={loggedInVigorUser}
          userGroups={userGroups}
        />
      )} */}
      {display === "todos" ? (
        <Feed
          userGroups={userGroups}
          setUserGroups={setUserGroups}
          loggedInVigorUser={loggedInVigorUser}
        />
      ) : (
        <Groups userGroups={userGroups} />
      )}
      {display === "todos" ? (
        <AddTodo
          loggedInVigorUser={loggedInVigorUser}
          userGroups={userGroups}
          setUserGroups={setUserGroups}
        />
      ) : (
        <AddGroup
          loggedInVigorUser={loggedInVigorUser}
          userGroups={userGroups}
          setUserGroups={setUserGroups}
        />
      )}
    </Container>
  );

  // return (
  //   <Stack
  //     direction="row"
  //     spacing={2}
  //     justifyContent="space-between"
  //     id="dashboard-container"
  //   >
  //     <Sidebar />
  //     {testFeed ? (
  // <Feed userGroups={userGroups} loggedInVigorUser={loggedInVigorUser} />;
  //     ) : (
  //       <Groups userGroups={userGroups} />
  //     )}
  //     <Rightbar userGroups={userGroups} loggedInVigorUser={loggedInVigorUser} />
  //     {loggedInVigorUser && userGroups && userGroups.length > 0 && (
  //       <AddTodo
  //         loggedInVigorUser={loggedInVigorUser}
  //         userGroups={userGroups}
  //       />
  //     )}
  //   </Stack>
  // );
};

export default Dashboard;
