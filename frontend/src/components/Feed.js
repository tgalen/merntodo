import Box from "@mui/material/Box";
import CreateGroupTip from "./CreateGroupTip";

const Feed = ({ userGroups, loggedInVigorUser }) => {
  const NO_USER_GROUPS = userGroups && userGroups.length === 0;
  const createGroupTip =
    "You don't have any current Groups.  Please create one so you can add tasks.";

  return (
    <Box bgcolor="pink" flex={4} padding={2}>
      {NO_USER_GROUPS && (
        <CreateGroupTip loggedInVigorUser={loggedInVigorUser} />
      )}
    </Box>
  );
};

export default Feed;
