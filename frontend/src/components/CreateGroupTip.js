import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import GroupsIcon from "@mui/icons-material/Groups";

const CreateGroupTip = () => {
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
          <Fab color="primary" aria-label="add" variant="extended">
            <GroupsIcon style={{ marginRight: "5px" }} />
            Add Group
          </Fab>
        </Box>
      </Box>
    </Card>
  );
};

export default CreateGroupTip;
