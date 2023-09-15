import Button from "@mui/material/Button";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Landing = ({ registerOpen, loggedInTasqUser, setLoggedInTasqUser }) => {
  return (
    <div>
      Landing
      <Button color="tertiary" variant="contained">
        <AssignmentIcon />
        Register
      </Button>
    </div>
  );
};

export default Landing;
