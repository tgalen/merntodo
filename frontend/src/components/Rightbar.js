import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Rightbar = ({ userGroups, loggedInVigorUser }) => {
  return (
    <Box
      bgcolor="lightgreen"
      flex={2}
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <List>
        {userGroups &&
          userGroups.map((group) => {
            return (
              <ListItem>
                <ListItemText
                  primary={group.groupName}
                  secondary={group.description}
                />
              </ListItem>
            );
          })}
      </List>
    </Box>
  );
};

export default Rightbar;
