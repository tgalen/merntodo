import Box from "@mui/material/Box";
import GroupListItem from "./GroupListItem";
import Stack from "@mui/material/Stack";
import IndividualGroup from "./IndividualGroup";

const Groups = ({ userGroups }) => {
  return (
    <Box bgcolor="inherit" padding={2} minHeight="74vh" overflow="auto">
      {/* <Stack spacing={2}>
        {userGroups &&
          userGroups.map((group) => {
            return <GroupListItem group={group} />;
          })}
      </Stack> */}
      {userGroups &&
        userGroups.map((group) => <IndividualGroup group={group} />)}
    </Box>
  );
};

export default Groups;
