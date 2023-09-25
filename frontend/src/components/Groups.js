import Box from "@mui/material/Box";
import GroupListItem from "./GroupListItem";
import Stack from "@mui/material/Stack";

const Groups = ({ userGroups }) => {
  return (
    <Box bgcolor="pink" flex={4} padding={2}>
      <Stack spacing={2}>
        {userGroups &&
          userGroups.map((group) => {
            return <GroupListItem group={group} />;
          })}
      </Stack>
    </Box>
  );
};

export default Groups;
