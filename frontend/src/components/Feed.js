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
    <Box bgcolor="pink" padding={2} height="75vh" id="todo-feed">
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
