import Box from "@mui/material/Box";
import CreateGroupTip from "./CreateGroupTip";
import IndividualTodo from "./IndividualTodo";

const Feed = ({ userGroups, loggedInVigorUser }) => {
  const NO_USER_GROUPS = userGroups && userGroups.length === 0;

  const todos =
    userGroups &&
    userGroups
      .map((group) => {
        return group.todos.map((todo) => todo);
      })
      .flat();

  console.log(todos);

  return (
    <Box
      bgcolor="pink"
      flex={4}
      padding={2}
      minHeight="85vh"
      sx={{ width: { xs: "100vw" }, margin: { xs: 0 } }}
    >
      {NO_USER_GROUPS && (
        <CreateGroupTip loggedInVigorUser={loggedInVigorUser} />
      )}
      {todos &&
        todos.map((todo) => {
          return <IndividualTodo todo={todo} />;
        })}
    </Box>
  );
};

export default Feed;
