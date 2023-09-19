import Box from "@mui/material/Box";

const Feed = ({ userGroups }) => {
  const createGroupTip =
    "You don't have any current Groups.  Please create one so you can add tasks.";

  return (
    <Box bgcolor="pink" flex={4} padding={2}>
      {userGroups && userGroups.length === 0 && createGroupTip}
    </Box>
  );
};

export default Feed;
