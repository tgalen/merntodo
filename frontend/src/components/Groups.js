import Sidebar from "./Sidebar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import GroupListItem from "./GroupListItem";

const Groups = ({ userGroups }) => {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar />
      <Box bgcolor="pink" flex={8} padding={1}>
        {userGroups &&
          userGroups.map((group) => <GroupListItem group={group} />)}
      </Box>
    </Stack>
  );
};

export default Groups;
