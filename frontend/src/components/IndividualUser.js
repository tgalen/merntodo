import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";

const IndividualUser = ({ user }) => {
  return (
    <Paper
      sx={{
        margin: 1.1,
        marginLeft: "auto",
        marginRight: "auto",
        p: 1,
        borderRadius: 1,
        height: "2rem",
        display: "flex",
        maxWidth: "400px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "skyblue",
          width: "3rem",
          height: "100%",
          display: "flex",
        }}
      >
        <PersonIcon fontSize="medium" sx={{ margin: "auto" }} />
      </Box>
      <Box
        sx={{
          height: "100%",
          width: { xs: "14.5rem", sm: "18rem" },
          backgroundColor: "yellow",
          display: "flex",
          alignItems: "center",
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <Typography
          sx={{
            marginLeft: "5px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            display: "block",
            maxWidth: { xs: "230px", sm: "285px" },
          }}
          variant="body2"
          component="span"
        >
          {user.userName}
        </Typography>
      </Box>
    </Paper>
  );
};

export default IndividualUser;
