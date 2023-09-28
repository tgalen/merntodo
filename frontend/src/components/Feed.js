import Box from "@mui/material/Box";
import CreateGroupTip from "./CreateGroupTip";

const Feed = ({ userGroups, loggedInVigorUser }) => {
  const NO_USER_GROUPS = userGroups && userGroups.length === 0;

  const todos =
    userGroups &&
    userGroups.map((group) => {
      return group.todos.map((todo) => todo);
    });

  console.log(todos[0]);

  return (
    <Box bgcolor="pink" flex={4} padding={2}>
      {NO_USER_GROUPS && (
        <CreateGroupTip loggedInVigorUser={loggedInVigorUser} />
      )}
      {todos &&
        todos[0].map((todo) => {
          return <h1> {todo.todoTitle}</h1>;
        })}
    </Box>
  );
};

export default Feed;
