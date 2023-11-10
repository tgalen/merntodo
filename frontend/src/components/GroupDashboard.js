import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import IndividualTodo from "./IndividualTodo";

const GroupDashboard = ({ userGroups, loggedInVigorUser, setUserGroups }) => {
  const currentURL = window.location.href;
  const splitURL = currentURL.split("/");
  const groupID = splitURL[splitURL.length - 1];

  const userGroup =
    userGroups && userGroups.filter((group) => group._id === groupID);

  const todosWithGroupName =
    userGroups &&
    userGroup[0].todos.map((todo) => {
      return {
        ...todo,
        groupName: userGroup[0].groupName,
        groupID: userGroup[0]._id,
      };
    });

  console.log(userGroup);

  return (
    <Box>
      <Box sx={{ width: "90%", display: "flex", margin: "10px" }}>
        <h1>{userGroup && userGroup[0].groupName}</h1>
      </Box>
      <Box
        bgcolor="inherit"
        padding={2}
        height="74vh"
        id="group-todo-feed"
        overflow="auto"
        maxWidth="500px"
        margin="auto"
      >
        {userGroups &&
          todosWithGroupName.length > 0 &&
          todosWithGroupName.map((todo) => {
            return (
              <IndividualTodo
                todo={todo}
                loggedInVigorUser={loggedInVigorUser}
                setUserGroups={setUserGroups}
                userGroups={userGroups}
              />
            );
          })}
      </Box>
    </Box>
  );
};

export default GroupDashboard;
