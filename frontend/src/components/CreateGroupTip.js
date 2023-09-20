import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import GroupsIcon from "@mui/icons-material/Groups";
import AddGroup from "./AddGroup";
import Add from "@mui/icons-material/Add";

const CreateGroupTip = ({ loggedInVigorUser }) => {
  return (
    <Card>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            You don't belong to any Groups.
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Please add one even if you're the only member.
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1, m: 2 }}>
          <AddGroup loggedInVigorUser={loggedInVigorUser} />
        </Box>
      </Box>
    </Card>
  );
};

export default CreateGroupTip;
